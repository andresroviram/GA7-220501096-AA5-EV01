import React from 'react';
import authService from '../services/authService';

/**
 * Topbar — barra superior del layout principal.
 * Muestra el título de la página activa, controles de notificaciones,
 * modo oscuro (visual) y la info del usuario logueado.
 */
function Topbar({ title = 'Dashboard', onLogout }) {
  const username = authService.getCurrentUser() || 'Carlos Pérez';

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="topbar-menu-btn" aria-label="Menú">☰</button>
        <h2 className="topbar-title">{title}</h2>
      </div>

      <div className="topbar-right">
        {/* Modo oscuro — solo visual por ahora */}
        <button className="topbar-icon-btn" aria-label="Modo oscuro">🌙</button>

        {/* Notificaciones */}
        <button className="topbar-icon-btn" aria-label="Notificaciones">🔔</button>

        {/* Usuario */}
        <div className="topbar-user">
          <div className="topbar-user-info">
            <span className="topbar-user-name">{username}</span>
            <span className="topbar-user-role">Administrador</span>
          </div>
          <button
            className="topbar-avatar"
            onClick={onLogout}
            title="Cerrar sesión"
            aria-label="Cerrar sesión"
          >
            {username.charAt(0).toUpperCase()}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
