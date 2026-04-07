import React from 'react';

/**
 * StatCard — tarjeta de métrica reutilizable.
 * @param {string} label   - Etiqueta descriptiva
 * @param {string} value   - Valor numérico a mostrar
 * @param {string} icon    - Emoji / ícono
 */
function StatCard({ label, value, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-card-body">
        <div>
          <p className="stat-card-label">{label}</p>
          <p className="stat-card-value">{value}</p>
        </div>
        <div className="stat-card-icon" aria-hidden="true">{icon}</div>
      </div>
    </div>
  );
}

export default StatCard;
