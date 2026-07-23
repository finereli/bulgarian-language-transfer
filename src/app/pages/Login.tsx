import { useApp } from "../store";

export function Login() {
  const { config } = useApp();

  return (
    <div className="login">
      <div className="login-card">
        <div className="login-flag" aria-hidden>
          <span /><span /><span />
        </div>
        <h1>
          Хайде!
          <span className="login-sub">Learn Bulgarian by thinking, not memorizing</span>
        </h1>
        <p>
          A complete beginner's course in the spirit of the <em>Language Transfer</em> thinking
          method — adapted for reading and writing, with audio for every phrase. Built for
          English speakers; optional Hebrew and Russian parallels throughout.
        </p>
        <ul className="login-points">
          <li>Short lessons that build real sentences from minute one</li>
          <li>Type answers in Latin letters — they turn into Cyrillic</li>
          <li>Tap any phrase to hear it pronounced</li>
          <li>Your progress syncs across devices</li>
        </ul>
        {config?.googleConfigured ? (
          <a className="btn btn-primary btn-google" href="/api/auth/login">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path fill="#fff" d="M21.35 11.1H12v2.9h5.35c-.5 2.5-2.6 4.3-5.35 4.3a6.3 6.3 0 1 1 0-12.6c1.6 0 3.05.6 4.15 1.6l2.1-2.1A9.2 9.2 0 1 0 12 21.2c5.3 0 8.8-3.7 8.8-8.9 0-.4 0-.8-.1-1.2z"/>
            </svg>
            Continue with Google
          </a>
        ) : (
          <p className="login-warn">
            Google sign-in isn't configured yet — set <code>GOOGLE_CLIENT_ID</code> and{" "}
            <code>GOOGLE_CLIENT_SECRET</code> (see the README).
          </p>
        )}
        {config?.devLogin && (
          <a className="btn btn-ghost" href="/api/auth/dev">
            Dev login (local only)
          </a>
        )}
      </div>
    </div>
  );
}
