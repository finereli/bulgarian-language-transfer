export function Method() {
  return (
    <div className="page method">
      <h1>About the method</h1>
      <section className="card prose">
        <p>
          This course is inspired by <strong>Language Transfer</strong>, the free audio courses
          created by Mihalis Eleftheriou. The heart of that approach — often called the{" "}
          <em>thinking method</em> — is that you never memorize lists. Instead, a teacher shows
          you how the language works, connects it to what you already know, and immediately asks
          you to <em>build</em> something with it. The small effort of working out each answer is
          what writes it into long-term memory.
        </p>
        <p>
          Language Transfer has no Bulgarian course, and it's audio-first. This app adapts the
          approach to <strong>reading and writing</strong>: teaching notes play the teacher's
          role, and instead of speaking your answer aloud, you type it. Every Bulgarian phrase
          still has audio (tap the speaker), so your ear develops alongside your hands.
        </p>
        <p>
          The course draws parallels from <strong>English</strong> and <strong>Hebrew</strong> —
          and optionally <strong>Russian</strong> (toggle it in Settings), which shares much of
          Bulgarian's vocabulary while differing in surprising, useful ways.
        </p>
        <h2>How to use it</h2>
        <ul>
          <li>
            <strong>Guess before you check.</strong> Being almost right and getting corrected
            beats reading the answer. Wrong answers cost nothing.
          </li>
          <li>
            <strong>Work in short sessions.</strong> One lesson at a time. The streak is there to
            reward showing up, not bingeing.
          </li>
          <li>
            <strong>Say it out loud.</strong> Type the answer, then play the audio and repeat it.
          </li>
          <li>
            <strong>Replay old lessons</strong> whenever answers stop feeling automatic —
            completed lessons stay open forever.
          </li>
          <li>
            <strong>Use the AI explainer sparingly.</strong> When you don't understand a
            correction, ask "why?" — but try to work it out first. That effort is the method.
          </li>
        </ul>
        <p className="method-credit">
          If you enjoy this way of learning, check out{" "}
          <a href="https://www.languagetransfer.org" target="_blank" rel="noreferrer">
            languagetransfer.org
          </a>{" "}
          and support the original project.
        </p>
      </section>
    </div>
  );
}
