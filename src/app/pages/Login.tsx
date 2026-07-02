export function Login() {
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
          English speakers; Hebrew parallels throughout, Russian parallels optional.
        </p>
        <ul className="login-points">
          <li>Short lessons that build real sentences from minute one</li>
          <li>Type answers in Latin letters — they turn into Cyrillic</li>
          <li>Tap any phrase to hear it pronounced</li>
          <li>Your progress syncs across devices</li>
        </ul>
        <a className="btn btn-primary" href="/api/auth/enter">
          Start learning
        </a>
      </div>
    </div>
  );
}
