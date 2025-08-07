export type Area =
  | "Economía"
  | "Métodos cuantitativos"
  | "Contabilidad e impuestos"
  | "Ciencias sociales y humanísticas"
  | "Jurídica"
  | "Actividades integradoras"
  | "Administración";

export interface Materia {
  nombre: string;
  creditos: number;
  area: Area;
  semestre: number;
  obligatoria: boolean;
  requisitos?: string;
}

// Créditos mínimos por área
export const creditosMinimosArea: Record<Area, number> = {
  Economía: 30,
  "Métodos cuantitativos": 40,
  "Contabilidad e impuestos": 130,
  "Ciencias sociales y humanísticas": 10,
  Jurídica: 40,
  "Actividades integradoras": 20,
  Administración: 50,
};

export const creditosTotalesNecesarios = 360;

// Lista completa de materias (obligatorias y opcionales)
export const materias: Materia[] = [
  // OBLIGATORIAS
  { nombre: "Conceptos contables", creditos: 10, area: "Contabilidad e impuestos", semestre: 1, obligatoria: true },
  { nombre: "Administración y Gestión de las organizaciones 1", creditos: 10, area: "Administración", semestre: 1, obligatoria: true },
  { nombre: "Introducción a la microeconomía", creditos: 10, area: "Economía", semestre: 1, obligatoria: true },
  { nombre: "Calculo 1", creditos: 10, area: "Métodos cuantitativos", semestre: 1, obligatoria: true },

  { nombre: "Contabilidad General 1", creditos: 10, area: "Contabilidad e impuestos", semestre: 2, obligatoria: true, requisitos: "Conceptos contables" },
  { nombre: "Derecho Civil", creditos: 10, area: "Jurídica", semestre: 2, obligatoria: true },
  { nombre: "Economía descriptiva", creditos: 10, area: "Economía", semestre: 2, obligatoria: true },

  { nombre: "Introducción a la estadística", creditos: 10, area: "Economía", semestre: 3, obligatoria: true, requisitos: "Calculo 1" },
  { nombre: "Contabilidad General 2", creditos: 10, area: "Contabilidad e impuestos", semestre: 3, obligatoria: true, requisitos: "Contabilidad General 1" },
  { nombre: "Derecho Comercial", creditos: 10, area: "Jurídica", semestre: 3, obligatoria: true, requisitos: "Derecho Civil" },
  { nombre: "Procesos y Sistemas de información", creditos: 10, area: "Administración", semestre: 3, obligatoria: true, requisitos: "Administración y Gestión de las organizaciones 1" },

  { nombre: "Contabilidad General 3", creditos: 10, area: "Contabilidad e impuestos", semestre: 4, obligatoria: true, requisitos: "Contabilidad General 2" },
  { nombre: "Matematica financiera", creditos: 10, area: "Métodos cuantitativos", semestre: 4, obligatoria: true, requisitos: "Calculo 1" },
  { nombre: "Legislación laboral y seguridad social", creditos: 10, area: "Contabilidad e impuestos", semestre: 4, obligatoria: true, requisitos: "Conceptos contables y derecho Civil" },
  { nombre: "Derecho societario", creditos: 10, area: "Jurídica", semestre: 4, obligatoria: true, requisitos: "Derecho Civil" },

  { nombre: "Modelos y sistemas de costos", creditos: 10, area: "Contabilidad e impuestos", semestre: 5, obligatoria: true, requisitos: "Contabilidad General 3" },
  { nombre: "Derecho tributario", creditos: 10, area: "Jurídica", semestre: 5, obligatoria: true, requisitos: "10 créditos en el área jurídica" },
  { nombre: "Etica y ejercicio profesional", creditos: 5, area: "Actividades integradoras", semestre: 5, obligatoria: true, requisitos: "Contabilidad General 2 y derecho comercial" },

  { nombre: "Contabilidad superior 1", creditos: 10, area: "Contabilidad e impuestos", semestre: 6, obligatoria: true, requisitos: "50 créditos del área contable." },
  { nombre: "Control interno", creditos: 10, area: "Contabilidad e impuestos", semestre: 6, obligatoria: true, requisitos: "Procesos y Sistemas de información y 40 créditos en el área contable." },
  { nombre: "Contabilidad Gerencial", creditos: 10, area: "Contabilidad e impuestos", semestre: 6, obligatoria: true, requisitos: "160 créditos de avance de carrera, incluyendo Modelos y Sistemas de Costos y Matemática Financiera." },
  { nombre: "Tributaria 1", creditos: 10, area: "Contabilidad e impuestos", semestre: 6, obligatoria: true, requisitos: "Contabilidad General 3 y Derecho Tributario" },

  { nombre: "Auditoría 1", creditos: 10, area: "Contabilidad e impuestos", semestre: 7, obligatoria: true, requisitos: "160 créditos de avance de carrera que incluyen: Derecho Societario, Legislación Laboral y Seguridad Social, Control Interno y Contabilidad Superior" },
  { nombre: "Tributaria 2", creditos: 10, area: "Contabilidad e impuestos", semestre: 7, obligatoria: true, requisitos: "Tributaria 1" },
  { nombre: "Finanzas corporativas", creditos: 10, area: "Administración", semestre: 7, obligatoria: true, requisitos: "Administración y Gestión de las Organizaciones 1, Matemática Financiera, Introducción a la Estadística, 40 créditos en el Área de Contabilidad e Impuestos, 30 créditos en el Área de Economía y 180 créditos mínimos de avance en la carrera" },

  { nombre: "Informes profesionales de contador público", creditos: 10, area: "Contabilidad e impuestos", semestre: 8, obligatoria: true, requisitos: "Auditoría 1" },
  { nombre: "Práctica pericial en el ámbito Judicial", creditos: 5, area: "Actividades integradoras", semestre: 8, obligatoria: true, requisitos: "Contabilidad Superior, Derecho Comercial, Derecho Societario, Ética y Ejercicio Profesional" },
  { nombre: "Gestión financiera del estado", creditos: 10, area: "Administración", semestre: 8, obligatoria: true, requisitos: "30 créditos del área contable, 20 créditos del área administración, 15 créditos del área jurídica, 180 créditos de avance de Carrera" },

  // OPCIONALES (EJEMPLOS; agrega el resto según tu necesidad)
  { nombre: "Administración y Gestión de las organizaciones 2", creditos: 10, area: "Administración", semestre: 2, obligatoria: false, requisitos: "Administración y Gestión de las organizaciones 1" },
  { nombre: "Ciencia Política", creditos: 10, area: "Ciencias sociales y humanísticas", semestre: 2, obligatoria: false },
  { nombre: "Desarrollo y Bienestar", creditos: 10, area: "Ciencias sociales y humanísticas", semestre: 2, obligatoria: false },
  { nombre: "Algebra lineal", creditos: 10, area: "Métodos cuantitativos", semestre: 2, obligatoria: false },
  // ...continúa agregando todas las opcionales del listado que diste
];
