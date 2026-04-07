import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/dashboard',          label: 'Dashboard',        icon: '⊞' },
  { to: '/estudiantes',        label: 'Estudiantes',      icon: '🎓' },
  { to: '/docentes',           label: 'Docentes',         icon: '👥' },
  { to: '/grupos',             label: 'Grupos y horarios',icon: '📅' },
  { to: '/materias',           label: 'Materias',         icon: '📋' },
  { to: '/calificaciones',     label: 'Calificaciones',   icon: '✅' },
  { to: '/reportes',           label: 'Reportes',         icon: '📊' },
  { to: '/configuraciones',    label: 'Configuraciones',  icon: '⚙️' },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo / Marca */}
      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">🎓</div>
        <div>
          <p className="sidebar-brand-name">Sistema Integral</p>
          <p className="sidebar-brand-sub">Académico</p>
        </div>
      </div>

      {/* Navegación */}
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              'sidebar-nav-item' + (isActive ? ' sidebar-nav-item--active' : '')
            }
          >
            <span className="sidebar-nav-icon" aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
