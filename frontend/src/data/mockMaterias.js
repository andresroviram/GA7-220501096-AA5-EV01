// ─── Mock de Materias ─────────────────────────────────────────────────────────

export const materias = [
  { id: 'MAT001', nombre: 'Matemáticas',    departamento: 'Ciencias Exactas', creditos: 5, docente: 'Dr. Juan Pérez',      grupos: ['1A', '3A'], estado: 'Activo' },
  { id: 'MAT002', nombre: 'Historia',       departamento: 'Humanidades',      creditos: 4, docente: 'Prof. Carlos López',  grupos: ['1A', '2B'], estado: 'Activo' },
  { id: 'MAT003', nombre: 'Ciencias',       departamento: 'Ciencias Nat.',    creditos: 5, docente: 'Dra. María García',   grupos: ['2B'],       estado: 'Activo' },
  { id: 'MAT004', nombre: 'Literatura',     departamento: 'Humanidades',      creditos: 3, docente: 'Lic. Ana Martínez',   grupos: ['2B', '1C'], estado: 'Activo' },
  { id: 'MAT005', nombre: 'Física',         departamento: 'Ciencias Exactas', creditos: 5, docente: 'Dra. Laura Torres',   grupos: ['3A'],       estado: 'Activo' },
  { id: 'MAT006', nombre: 'Geografía',      departamento: 'Ciencias Soc.',    creditos: 3, docente: 'Prof. Carlos López',  grupos: ['2A'],       estado: 'Activo' },
  { id: 'MAT007', nombre: 'Filosofía',      departamento: 'Humanidades',      creditos: 3, docente: 'Prof. Roberto Silva', grupos: ['1C'],       estado: 'Activo' },
  { id: 'MAT008', nombre: 'Química',        departamento: 'Ciencias Nat.',    creditos: 5, docente: '',                   grupos: [],           estado: 'Inactivo' },
];

export const DEPARTAMENTOS_LIST = ['Ciencias Exactas', 'Humanidades', 'Ciencias Nat.', 'Ciencias Soc.'];
export const ESTADOS_LIST       = ['Activo', 'Inactivo'];

export const materiasPorDepto = [
  { departamento: 'Ciencias Exactas', total: 2 },
  { departamento: 'Humanidades',      total: 3 },
  { departamento: 'Ciencias Nat.',    total: 2 },
  { departamento: 'Ciencias Soc.',    total: 1 },
];
