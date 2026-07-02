import { useNavigate } from "react-router-dom";
import { useApp } from "../store";
import { useTranslitPref } from "../components/BgInput";

export function Settings() {
  const { user, setShowRussian, signOut } = useApp();
  const [translit, setTranslit] = useTranslitPref();
  const navigate = useNavigate();
  if (!user) return null;

  return (
    <div className="page settings">
      <h1>Settings</h1>

      <section className="card profile">
        {user.picture ? (
          <img src={user.picture} alt="" className="avatar" referrerPolicy="no-referrer" />
        ) : (
          <div className="avatar avatar-fallback">{user.name.charAt(0)}</div>
        )}
        <div>
          <div className="profile-name">{user.name}</div>
          <div className="profile-email">{user.email}</div>
          <div className="profile-best">Best streak: {user.bestStreak} days</div>
        </div>
      </section>

      <section className="card">
        <label className="toggle-row">
          <div>
            <div className="toggle-title">Russian parallels</div>
            <div className="toggle-desc">
              Show extra notes comparing Bulgarian with Russian (false friends, shared grammar).
              Leave off if you don't know Russian.
            </div>
          </div>
          <input
            type="checkbox"
            checked={user.showRussian}
            onChange={(e) => setShowRussian(e.target.checked)}
          />
        </label>
        <label className="toggle-row">
          <div>
            <div className="toggle-title">Latin → Cyrillic typing</div>
            <div className="toggle-desc">
              Convert Latin letters to Cyrillic as you type in exercises (zh→ж, sht→щ, y→ъ…).
              Turn off if you use a Bulgarian keyboard.
            </div>
          </div>
          <input
            type="checkbox"
            checked={translit}
            onChange={(e) => setTranslit(e.target.checked)}
          />
        </label>
      </section>

      <section className="card">
        <button
          className="btn btn-ghost"
          onClick={() => {
            void signOut().then(() => navigate("/"));
          }}
        >
          Sign out
        </button>
      </section>
    </div>
  );
}
