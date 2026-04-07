// ─── Datos mock del Dashboard ─────────────────────────────────────────────────
// Todos los datos de la vista principal están centralizados aquí.
// Cuando se conecte el backend, solo se reemplaza este archivo por llamadas API.

export const stats = [
  { id: 1, label: 'Estudiantes Registrados', value: '1.653', icon: '🎓' },
  { id: 2, label: 'Docentes Activos',        value: '89',    icon: '👥' },
  { id: 3, label: 'Materias Activas',        value: '156',   icon: '📋' },
  { id: 4, label: 'Grupos Activos',          value: '42',    icon: '📅' },
];

export const topStudents = [
  { id: 1, name: 'Ana García',       group: 'Grupo 3A', score: 9.8 },
  { id: 2, name: 'Carlos López',     group: 'Grupo 2B', score: 9.6 },
  { id: 3, name: 'María Rodríguez',  group: 'Grupo 3A', score: 9.5 },
  { id: 4, name: 'Juan Pérez',       group: 'Grupo 1C', score: 9.3 },
  { id: 5, name: 'Laura Martínez',   group: 'Grupo 2A', score: 9.2 },
];

export const groupAverages = [
  { grupo: 'Grupo 1A', promedio: 8.2 },
  { grupo: 'Grupo 1B', promedio: 8.5 },
  { grupo: 'Grupo 1C', promedio: 8.8 },
  { grupo: 'Grupo 2A', promedio: 8.1 },
  { grupo: 'Grupo 2B', promedio: 8.1 },
  { grupo: 'Grupo 3A', promedio: 7.5 },
  { grupo: 'Grupo 3B', promedio: 9.1 },
  { grupo: 'Grupo 3C', promedio: 8.7 },
  { grupo: 'Grupo 4A', promedio: 9.0 },
];

export const academicPerformance = [
  { grupo: '1A', promedio: 7.8 },
  { grupo: '1B', promedio: 8.2 },
  { grupo: '1C', promedio: 8.5 },
  { grupo: '2A', promedio: 7.9 },
  { grupo: '2B', promedio: 8.0 },
  { grupo: '3A', promedio: 7.4 },
  { grupo: '3B', promedio: 8.9 },
  { grupo: '3C', promedio: 8.6 },
  { grupo: '4A', promedio: 9.0 },
];

export const gradeDistribution = [
  { name: '1er Grado', value: 72,  color: '#2A9D6F' },
  { name: '2do Grado', value: 68,  color: '#4DD4A8' },
  { name: '3er Grado', value: 65,  color: '#1A6B4A' },
  { name: '4to Grado', value: 37,  color: '#E63946' },
];
