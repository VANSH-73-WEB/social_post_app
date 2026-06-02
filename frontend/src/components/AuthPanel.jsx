import React from "react";
function AuthPanel({ authMode, authForm, onModeChange, onFormChange, onSubmit }) {
  return (
    <section className="auth-panel">
      <div className="mode-switch">
        <button className={authMode === "login" ? "selected" : ""} onClick={() => onModeChange("login")}>
          Login
        </button>
        <button
          className={authMode === "signup" ? "selected" : ""}
          onClick={() => onModeChange("signup")}
        >
          Signup
        </button>
      </div>
      <form onSubmit={onSubmit} className="stack-form">
        {authMode === "signup" ? (
          <input
            value={authForm.username}
            onChange={(event) => onFormChange({ ...authForm, username: event.target.value })}
            placeholder="Username"
            minLength="2"
            required
          />
        ) : null}
        <input
          value={authForm.email}
          onChange={(event) => onFormChange({ ...authForm, email: event.target.value })}
          placeholder="Email address"
          type="email"
          required
        />
        <input
          value={authForm.password}
          onChange={(event) => onFormChange({ ...authForm, password: event.target.value })}
          placeholder="Password"
          type="password"
          minLength="6"
          required
        />
        <button className="primary-button" type="submit">
          {authMode === "signup" ? "Create account" : "Login"}
        </button>
      </form>
    </section>
  );
}

export default AuthPanel;
