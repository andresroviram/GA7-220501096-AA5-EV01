import React from 'react';

function PlaceholderPage({ title }) {
  return (
    <div className="placeholder-page">
      <div className="placeholder-icon">🚧</div>
      <h2 className="placeholder-title">{title}</h2>
      <p className="placeholder-msg">Este módulo está en construcción.</p>
    </div>
  );
}

export default PlaceholderPage;
