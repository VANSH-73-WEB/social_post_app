import { Home, LogOut, Sparkles, UserRound } from "lucide-react";
import React from "react";
function Layout({ children, session, onLogout }) {
  return (
    <main className="app-shell">
      <aside className="rail">
        <div className="brand-mark">
          <Sparkles size={22} />
        </div>
        <button className="rail-button active" title="Social feed" aria-label="Social feed">
          <Home size={22} />
        </button>
        <button className="rail-button" title="Profile" aria-label="Profile">
          <UserRound size={22} />
        </button>
      </aside>

      <section className="phone-frame">
        <header className="topbar">
          <div>
            <p className="eyebrow">TaskPlanet Social</p>
            <h1>Community Feed</h1>
          </div>
          {session ? (
            <button className="icon-button" onClick={onLogout} title="Logout" aria-label="Logout">
              <LogOut size={19} />
            </button>
          ) : null}
        </header>

        {children}
      </section>
    </main>
  );
}

export default Layout;
