import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { AppProvider, useApp } from "./store";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { LessonPage } from "./pages/LessonPage";
import { Settings } from "./pages/Settings";
import { Method } from "./pages/Method";

function Shell() {
  const { loading, user } = useApp();
  const location = useLocation();
  const inLesson = location.pathname.startsWith("/lesson/");

  if (loading) {
    return (
      <div className="splash">
        <div className="splash-flag" aria-hidden>
          <span /><span /><span />
        </div>
        <p>Хайде!</p>
      </div>
    );
  }

  if (!user) return <Login />;

  return (
    <>
      {!inLesson && (
        <nav className="topbar">
          <Link to="/" className="brand">
            <span className="brand-flag" aria-hidden>
              <span /><span /><span />
            </span>
            Хайде!
          </Link>
          <div className="topbar-links">
            <Link to="/method">Method</Link>
            <Link to="/settings" aria-label="Settings">⚙︎</Link>
          </div>
        </nav>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson/:id" element={<LessonPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/method" element={<Method />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </AppProvider>
  );
}
