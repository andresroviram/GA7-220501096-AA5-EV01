import React, { useState } from 'react';
import authService from '../services/authService';

function LoginForm({ onLoginSuccess, onShowRegister }) {
  const [username, setUsername]         = useState('');
  const [password, setPassword]         = useState('');
  const [remember, setRemember]         = useState(false);
  const [fieldErrors, setFieldErrors]   = useState({});
  const [generalError, setGeneralError] = useState('');
  const [loading, setLoading]           = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    setGeneralError('');

    const errors = {};
    if (!username.trim()) errors.username = 'El correo es requerido.';
    if (!password.trim()) errors.password = 'La contraseña es requerida.';
    if (Object.keys(errors).length > 0) { setFieldErrors(errors); return; }

    setLoading(true);
    try {
      await authService.login(username, password);
      onLoginSuccess();
    } catch (err) {
      if (err.response?.status === 401) {
        setFieldErrors({ password: 'Contraseña incorrecta' });
      } else if (err.response?.status === 400) {
        setGeneralError('Datos inválidos. Revisa los campos.');
      } else {
        setGeneralError('Error de conexión. Verifica que el servidor esté activo.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      {/* ── Panel izquierdo: marca ─────────────────────────── */}
      <div className="login-left" aria-hidden="true">
        <div className="login-brand-circle">
          <span className="login-brand-text">Sistema<br/>Integral</span>
        </div>
      </div>

      {/* ── Panel derecho: formulario ──────────────────────── */}
      <div className="login-right">
        {/* Círculo decorativo superior derecho */}
        <div className="login-deco login-deco--top" aria-hidden="true" />
        {/* Círculo decorativo inferior derecho */}
        <div className="login-deco login-deco--bottom" aria-hidden="true" />

        <div className="login-form-container">
          <h1 className="login-title">Accede a tu cuenta</h1>
          <p className="login-subtitle">¡Bienvenido! Por favor, ingresa tus datos.</p>

          <form onSubmit={handleSubmit} noValidate>

            {/* Correo */}
            <div className="form-group">
              <label htmlFor="username" className="form-label">Correo Electrónico</label>
              <div className="input-wrapper">
                <span className="input-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <input
                  type="text"
                  id="username"
                  className={`form-input${fieldErrors.username ? ' form-input--error' : ''}`}
                  value={username}
                  onChange={(e) => { setUsername(e.target.value); setFieldErrors((p) => ({ ...p, username: '' })); }}
                  placeholder="johndoe@gmail.com"
                  disabled={loading}
                  autoComplete="username"
                  autoFocus
                />
                {fieldErrors.username && (
                  <span className="input-error-icon" aria-hidden="true">!</span>
                )}
              </div>
            </div>

            {/* Contraseña */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <div className="input-wrapper">
                <span className="input-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <input
                  type="password"
                  id="password"
                  className={`form-input${fieldErrors.password ? ' form-input--error' : ''}`}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setFieldErrors((p) => ({ ...p, password: '' })); }}
                  placeholder="ingresar contraseña"
                  disabled={loading}
                  autoComplete="current-password"
                />
                {fieldErrors.password && (
                  <span className="input-error-icon" aria-hidden="true">!</span>
                )}
              </div>
              {fieldErrors.password && (
                <p className="field-error-msg" role="alert">{fieldErrors.password}</p>
              )}
            </div>

            {/* Opciones extra */}
            <div className="login-options">
              <label className="login-remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  disabled={loading}
                />
                <span>Recordar por 30 días</span>
              </label>
              <button type="button" className="login-forgot">Olvidé mi contraseña</button>
            </div>

            {/* Error general (conexión / 400) */}
            {generalError && (
              <div className="error-alert" role="alert">
                <span aria-hidden="true">⚠️</span> {generalError}
              </div>
            )}

            {/* Botón principal — Iniciar sesión */}
            <button
              type="submit"
              className="login-button login-button--primary"
              disabled={loading}
            >
              {loading ? (
                <span className="loading-text">
                  <span className="spinner" aria-hidden="true" />
                  Verificando...
                </span>
              ) : (
                'Iniciar Sesión'
              )}
            </button>

            {/* Botón secundario — Registrarse */}
            <button
              type="button"
              className="login-button login-button--secondary"
              disabled={loading}
              onClick={onShowRegister}
            >
              Registrarme
            </button>

          </form>

          {/* Punto decorativo */}
          <div className="login-dot" aria-hidden="true" />

          {/* Versión */}
          <p className="login-version">v 1.0.0</p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
