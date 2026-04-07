// ─── Mock de Docentes ────────────────────────────────────────────────────────

export const docentes = [
  { id: 1, nombre: 'Dr. Juan Pérez',      cedula: '123456789', departamento: 'Matemáticas',  email: 'juan.perez@escuela.edu',    telefono: '+52 555-0101', estado: 'Activo',   fechaIngreso: '2020-08-15', materias: ['Álgebra', 'Cálculo'] },
  { id: 2, nombre: 'Dra. María García',   cedula: '234567890', departamento: 'Ciencias',     email: 'maria.garcia@escuela.edu',  telefono: '+52 555-0102', estado: 'Activo',   fechaIngreso: '2019-09-01', materias: ['Biología', 'Química'] },
  { id: 3, nombre: 'Prof. Carlos López',  cedula: '345678901', departamento: 'Humanidades',  email: 'carlos.lopez@escuela.edu',  telefono: '+52 555-0103', estado: 'Activo',   fechaIngreso: '2021-02-10', materias: ['Historia', 'Filosofía'] },
  { id: 4, nombre: 'Lic. Ana Martínez',   cedula: '456789012', departamento: 'Idiomas',      email: 'ana.martinez@escuela.edu',  telefono: '+52 555-0104', estado: 'Inactivo', fechaIngreso: '2018-03-20', materias: ['Inglés'] },
  { id: 5, nombre: 'Prof. Roberto Silva', cedula: '567890123', departamento: 'Edu. Física',  email: 'roberto.silva@escuela.edu', telefono: '+52 555-0105', estado: 'Activo',   fechaIngreso: '2022-01-15', materias: ['Ética'] },
  { id: 6, nombre: 'Dra. Laura Torres',   cedula: '67890123',  departamento: 'Matemáticas',  email: 'laura.torres@escuela.edu',  telefono: '+52 555-0106', estado: 'Activo',   fechaIngreso: '2020-11-05', materias: ['Ciencias naturales', 'Trigonometría', 'Historia'] },
];

export const docentesPorDepartamento = [
  { departamento: 'Matemáticas',  total: 5 },
  { departamento: 'Ciencias',     total: 2 },
  { departamento: 'Humanidades',  total: 3 },
  { departamento: 'Idiomas',      total: 1 },
  { departamento: 'Edu. Física',  total: 2 },
];

export const estadisticasDocentes = {
  total:             90,
  activos:           89,
  inactivos:          1,
  promedioMaterias:  2.0,
};

export const departamentos = ['Matemáticas', 'Historia', 'Ciencias', 'Humanidades', 'Idiomas', 'Edu. Física'];
export const estados        = ['Activo', 'Inactivo'];
export const materias = [
  'Álgebra', 'Cálculo', 'Geometría', 'Estadísticas',
  'Biología', 'Química', 'Física', 'Geografía',
  'Filosofía', 'Ética', 'Historia', 'Literatura',
  'Ciencias naturales', 'Trigonometría', 'Inglés',
];
