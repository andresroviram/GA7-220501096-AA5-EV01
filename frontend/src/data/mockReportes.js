// ─── Mock de Reportes ─────────────────────────────────────────────────────────

export const reportesRecientes = [
  { id: 1, tipo: 'Calificaciones',  descripcion: 'Reporte general de calificaciones',      fecha: '2025-05-20', generadoPor: 'Admin', formato: 'PDF' },
  { id: 2, tipo: 'Estudiantes',     descripcion: 'Listado de estudiantes activos',          fecha: '2025-05-18', generadoPor: 'Admin', formato: 'Excel' },
  { id: 3, tipo: 'Docentes',        descripcion: 'Historial de docentes por departamento',  fecha: '2025-05-15', generadoPor: 'Admin', formato: 'PDF' },
  { id: 4, tipo: 'Asistencia',      descripcion: 'Reporte de asistencia Grupo 3A',          fecha: '2025-05-10', generadoPor: 'Admin', formato: 'PDF' },
];

export const tiposReporte = [
  { key: 'calificaciones', label: 'Calificaciones',  descripcion: 'Reporte general de notas por grupo o materia',    icon: '📝' },
  { key: 'estudiantes',    label: 'Estudiantes',     descripcion: 'Listado de estudiantes registrados con estadísticas', icon: '👨‍🎓' },
  { key: 'docentes',       label: 'Docentes',        descripcion: 'Historial y estado del personal docente',          icon: '👩‍🏫' },
  { key: 'horarios',       label: 'Horarios',        descripcion: 'Distribución de horarios por grupo y aula',        icon: '📅' },
  { key: 'asistencia',     label: 'Asistencia',      descripcion: 'Registro de asistencia por estudiante o grupo',    icon: '✅' },
  { key: 'rendimiento',    label: 'Rendimiento',     descripcion: 'Indicadores de rendimiento académico general',     icon: '📊' },
];
