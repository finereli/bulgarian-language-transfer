// TTS playback with a client-side IndexedDB cache: each phrase is fetched
// from the API once per device, then replayed (and available offline) for free.

const DB_NAME = "hayde-tts";
const STORE = "audio";

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbGet(key: string): Promise<Blob | undefined> {
  try {
    const db = await openDb();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, "readonly");
      const req = tx.objectStore(STORE).get(key);
      req.onsuccess = () => resolve(req.result as Blob | undefined);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return undefined;
  }
}

async function idbPut(key: string, blob: Blob): Promise<void> {
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).put(blob, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    // Cache failures are fine; playback already happened from memory.
  }
}

let current: HTMLAudioElement | null = null;

export async function playTTS(text: string): Promise<void> {
  const key = text.trim();
  if (!key) return;

  let blob = await idbGet(key);
  if (!blob) {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: key }),
    });
    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as { error?: string } | null;
      throw new Error(data?.error ?? `TTS failed (${res.status})`);
    }
    blob = await res.blob();
    void idbPut(key, blob);
  }

  current?.pause();
  const url = URL.createObjectURL(blob);
  const audio = new Audio(url);
  current = audio;
  audio.addEventListener("ended", () => URL.revokeObjectURL(url));
  await audio.play();
}
