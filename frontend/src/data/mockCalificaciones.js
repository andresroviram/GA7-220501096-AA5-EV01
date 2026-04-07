// ─── Mock de Calificaciones ──────────────────────────────────────────────────

export const calificaciones = [
  { id: 1, estudiante: 'Ana García',      materia: 'Matemáticas', grupo: '3A', calificacion: 8.5, fecha: '2025-05-15' },
  { id: 2, estudiante: 'Carlos López',    materia: 'Historia',    grupo: '2B', calificacion: 9,   fecha: '2025-05-16' },
  { id: 3, estudiante: 'María Rodríguez', materia: 'Ciencias',    grupo: '3A', calificacion: 7.5, fecha: '2025-05-17' },
  { id: 4, estudiante: 'Juan Pérez',      materia: 'Literatura',  grupo: '1C', calificacion: 8,   fecha: '2025-05-18' },
  { id: 5, estudiante: 'Sofía Torres',    materia: 'Matemáticas', grupo: '2A', calificacion: 9.2, fecha: '2025-05-19' },
  { id: 6, estudiante: 'Luis Mendoza',    materia: 'Física',      grupo: '4B', calificacion: 7,   fecha: '2025-05-20' },
];

export const promediosPorGrupo = [
  { grupo: '1A', promedio: 8.2 },
  { grupo: '1B', promedio: 8.5 },
  { grupo: '2B', promedio: 8.8 },
  { grupo: '3A', promedio: 9.1 },
  { grupo: '4A', promedio: 8.3 },
  { grupo: '4C', promedio: 9.2 },
  { grupo: '5B', promedio: 8.5 },
  { grupo: '5B', promedio: 8.1 },
  { grupo: '6A', promedio: 8.1 },
];

export const materias = [
  'Matemáticas', 'Historia', 'Ciencias', 'Literatura',
  'Física', 'Química', 'Geografía', 'Filosofía', 'Ética',
];

export const grupos = [
  'Grupo 1A', 'Grupo 1B', 'Grupo 2A', 'Grupo 2B',
  '1A', '1B', '1C', '2A', '2B', '3A', '3B', '4A', '4B', '4C', '5B', '6A',
];

export const gruposSelect = ['Grupo 1A', 'Grupo 1B', 'Grupo 2A', 'Grupo 2B'];
