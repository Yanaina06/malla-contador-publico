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

export const materias: Materia[] = [
  // OBLIGATORIAS SEMESTRE 1
  { nombre: "Conceptos contables", creditos: 10, area: "Contabilidad e impuestos", semestre: 1, obligatoria: true },
  { nombre: "Administración y Gestión de las organizaciones 1", creditos: 10, area: "Administración", semestre: 1, obligatoria: true },
  { nombre: "Introducción a la microeconomía", creditos: 10, area: "Economía", semestre: 1, obligatoria: true },
  { nombre: "Calculo 1", creditos: 10, area: "Métodos cuantitativos", semestre: 1, obligatoria: true },

  // OBLIGATORIAS SEMESTRE 2
  { nombre: "Contabilidad General 1", creditos: 10, area: "Contabilidad e impuestos", semestre: 2, obligatoria: true, requisitos: "Conceptos contables" },
  { nombre: "Derecho Civil", creditos: 10, area: "Jurídica", semestre: 2, obligatoria: true },
  { nombre: "Economía descriptiva", creditos: 10, area: "Economía", semestre: 2, obligatoria: true },

  // OBLIGATORIAS SEMESTRE 3
  { nombre: "Introducción a la estadística", creditos: 10, area: "Economía", semestre: 3, obligatoria: true, requisitos: "Calculo 1" },
  { nombre: "Contabilidad General 2", creditos: 10, area: "Contabilidad e impuestos", semestre: 3, obligatoria: true, requisitos: "Contabilidad General 1" },
  { nombre: "Derecho Comercial", creditos: 10, area: "Jurídica", semestre: 3, obligatoria: true, requisitos: "Derecho Civil" },
  { nombre: "Procesos y Sistemas de información", creditos: 10, area: "Administración", semestre: 3, obligatoria: true, requisitos: "Administración y Gestión de las organizaciones 1" },

  // OBLIGATORIAS SEMESTRE 4
  { nombre: "Contabilidad General 3", creditos: 10, area: "Contabilidad e impuestos", semestre: 4, obligatoria: true, requisitos: "Contabilidad General 2" },
  { nombre: "Matematica financiera", creditos: 10, area: "Métodos cuantitativos", semestre: 4, obligatoria: true, requisitos: "Calculo 1" },
  { nombre: "Legislación laboral y seguridad social", creditos: 10, area: "Contabilidad e impuestos", semestre: 4, obligatoria: true, requisitos: "Conceptos contables y derecho Civil" },
  { nombre: "Derecho societario", creditos: 10, area: "Jurídica", semestre: 4, obligatoria: true, requisitos: "Derecho Civil" },

  // OBLIGATORIAS SEMESTRE 5
  { nombre: "Modelos y sistemas de costos", creditos: 10, area: "Contabilidad e impuestos", semestre: 5, obligatoria: true, requisitos: "Contabilidad General 3" },
  { nombre: "Derecho tributario", creditos: 10, area: "Jurídica", semestre: 5, obligatoria: true, requisitos: "10 créditos en el área jurídica" },
  { nombre: "Etica y ejercicio profesional", creditos: 5, area: "Actividades integradoras", semestre: 5, obligatoria: true, requisitos: "Contabilidad General 2 y derecho comercial" },

  // OBLIGATORIAS SEMESTRE 6
  { nombre: "Contabilidad superior 1", creditos: 10, area: "Contabilidad e impuestos", semestre: 6, obligatoria: true, requisitos: "50 créditos del área contable." },
  { nombre: "Control interno", creditos: 10, area: "Contabilidad e impuestos", semestre: 6, obligatoria: true, requisitos: "Procesos y Sistemas de información y 40 créditos en el área contable." },
  { nombre: "Contabilidad Gerencial", creditos: 10, area: "Contabilidad e impuestos", semestre: 6, obligatoria: true, requisitos: "160 créditos de avance de carrera, incluyendo Modelos y Sistemas de Costos y Matemática Financiera." },
  { nombre: "Tributaria 1", creditos: 10, area: "Contabilidad e impuestos", semestre: 6, obligatoria: true, requisitos: "Contabilidad General 3 y Derecho Tributario" },

  // OBLIGATORIAS SEMESTRE 7
  { nombre: "Auditoría 1", creditos: 10, area: "Contabilidad e impuestos", semestre: 7, obligatoria: true, requisitos: "160 créditos de avance de carrera que incluyen: Derecho Societario, Legislación Laboral y Seguridad Social, Control Interno y Contabilidad Superior" },
  { nombre: "Tributaria 2", creditos: 10, area: "Contabilidad e impuestos", semestre: 7, obligatoria: true, requisitos: "Tributaria 1" },
  { nombre: "Finanzas corporativas", creditos: 10, area: "Administración", semestre: 7, obligatoria: true, requisitos: "Administración y Gestión de las Organizaciones 1, Matemática Financiera, Introducción a la Estadística, 40 créditos en el Área de Contabilidad e Impuestos, 30 créditos en el Área de Economía y 180 créditos mínimos de avance en la carrera" },

  // OBLIGATORIAS SEMESTRE 8
  { nombre: "Informes profesionales de contador público", creditos: 10, area: "Contabilidad e impuestos", semestre: 8, obligatoria: true, requisitos: "Auditoría 1" },
  { nombre: "Práctica pericial en el ámbito Judicial", creditos: 5, area: "Actividades integradoras", semestre: 8, obligatoria: true, requisitos: "Contabilidad Superior, Derecho Comercial, Derecho Societario, Ética y Ejercicio Profesional" },
  { nombre: "Gestión financiera del estado", creditos: 10, area: "Administración", semestre: 8, obligatoria: true, requisitos: "30 créditos del área contable, 20 créditos del área administración, 15 créditos del área jurídica, 180 créditos de avance de Carrera" },

  // OPCIONALES SEMESTRE 2
  { nombre: "Administración y Gestión de las organizaciones 2", creditos: 10, area: "Administración", semestre: 2, obligatoria: false, requisitos: "Administración y Gestión de las organizaciones 1" },
  { nombre: "Ciencia Política", creditos: 10, area: "Ciencias sociales y humanísticas", semestre: 2, obligatoria: false },
  { nombre: "Desarrollo y Bienestar", creditos: 10, area: "Ciencias sociales y humanísticas", semestre: 2, obligatoria: false },
  { nombre: "Algebra lineal", creditos: 10, area: "Métodos cuantitativos", semestre: 2, obligatoria: false },

  // OPCIONALES SEMESTRE 3
  { nombre: "Macroeconomía 1", creditos: 10, area: "Economía", semestre: 3, obligatoria: false, requisitos: "Introducción a la Microeconomía" },
  { nombre: "Taller de iniciación a la investigación", creditos: 10, area: "Actividades integradoras", semestre: 3, obligatoria: false, requisitos: "40 créditos de avance" },

  // OPCIONALES SEMESTRE 4
  { nombre: "Economía Circular", creditos: 10, area: "Actividades integradoras", semestre: 4, obligatoria: false, requisitos: "100 créditos" },
  { nombre: "Administración de Recursos humanos", creditos: 10, area: "Administración", semestre: 4, obligatoria: false, requisitos: "Administración y Gestión de las organizaciones 2" },
  { nombre: "Sistemas de información", creditos: 10, area: "Administración", semestre: 4, obligatoria: false, requisitos: "Administración y Gestión de las organizaciones 1 y Contabilidad General 1" },
  { nombre: "sociología de la empresa y Management", creditos: 10, area: "Ciencias sociales y humanísticas", semestre: 4, obligatoria: false, requisitos: "80 créditos de avance de carrera que incluya Administración y Gestión 1 ó Introducción a la Microeconomía" },
  { nombre: "sociología contemporánea", creditos: 10, area: "Ciencias sociales y humanísticas", semestre: 4, obligatoria: false },
  { nombre: "sociología económica", creditos: 10, area: "Ciencias sociales y humanísticas", semestre: 4, obligatoria: false },

  // OPCIONALES SEMESTRE 5
  { nombre: "EFI Microcecea", creditos: 10, area: "Actividades integradoras", semestre: 5, obligatoria: false, requisitos: "Contar con 180 créditos aprobados" },
  { nombre: "Taller de ética y responsabilidad social", creditos: 5, area: "Actividades integradoras", semestre: 5, obligatoria: false, requisitos: "Procesos y sistemas de Información y Modelos y Sistemas de Costos" },
  { nombre: "EFI: Cooperativas de trabajo y colectivos autogestionados", creditos: 10, area: "Actividades integradoras", semestre: 5, obligatoria: false, requisitos: "180 créditos aprobados" },
  { nombre: "seguros de vida", creditos: 10, area: "Métodos cuantitativos", semestre: 5, obligatoria: false, requisitos: "Matemática Financiera e Introducción a la Estadística" },
  { nombre: "Marketing Básico", creditos: 10, area: "Administración", semestre: 5, obligatoria: false },
  { nombre: "Análisis de datos en administración", creditos: 10, area: "Métodos cuantitativos", semestre: 5, obligatoria: false, requisitos: "Introducción a la Estadística" },

  // OPCIONALES SEMESTRE 6
  { nombre: "Contabilidad de instituciones financieras no bancarias", creditos: 10, area: "Contabilidad e impuestos", semestre: 6, obligatoria: false, requisitos: "Tener aprobados 160 créditos de avance de carrera que incluyan Contabilidad General III y Derecho Comercial" },
  { nombre: "Derecho Público", creditos: 10, area: "Jurídica", semestre: 6, obligatoria: false },
  { nombre: "EFI - Costos para la Gestión de Emprendimientos Sociales y Comunitarios", creditos: 10, area: "Actividades integradoras", semestre: 6, obligatoria: false, requisitos: "Contabilidad Gerencial." },
  { nombre: "Marketing Estratégico", creditos: 10, area: "Administración", semestre: 6, obligatoria: false, requisitos: "Marketing Básico" },
  { nombre: "Comercio Internacional", creditos: 10, area: "Administración", semestre: 6, obligatoria: false, requisitos: "15 Créditos Área Jurídica Matemática financiera y Modelo y sistemas de costos" },
  { nombre: "Introd. al emprendedurismo", creditos: 10, area: "Administración", semestre: 6, obligatoria: false, requisitos: "240 créditos de avance de Carrera" },
  { nombre: "Economía y finanzas públicas", creditos: 10, area: "Economía", semestre: 6, obligatoria: false, requisitos: "Introducción a la Microeconomía y Economía Descriptiva" },
  { nombre: "Historia Económica del Uruguay", creditos: 10, area: "Ciencias sociales y humanísticas", semestre: 6, obligatoria: false, requisitos: "30 creditos en economia y Historia Economica Mundial" },
  { nombre: "Métodos Cuantitativos en Decisiones Gerenciales", creditos: 10, area: "Métodos cuantitativos", semestre: 6, obligatoria: false, requisitos: "Matemática Financiera. Introducción a la Estadística y 160 creditos de avance en la carrera" },
  { nombre: "Derecho Digital", creditos: 10, area: "Jurídica", semestre: 6, obligatoria: false, requisitos: "150 créditos de avance de carrera que incluyan Derecho Comercial y Derecho Societario." },
  { nombre: "Modelos de Comportamiento Estratégico", creditos: 10, area: "Métodos cuantitativos", semestre: 6, obligatoria: false, requisitos: "Introducción a la Estadística" },

  // OPCIONALES SEMESTRE 7
  { nombre: "Contabilidad Bancaria", creditos: 10, area: "Contabilidad e impuestos", semestre: 7, obligatoria: false, requisitos: "50 Créditos del Área Contable" },
  { nombre: "Práctica Profesional Inicial", creditos: 10, area: "Actividades integradoras", semestre: 7, obligatoria: false, requisitos: "100 créditos del Área Contable Tributaria 1" },
  { nombre: "EFI - Emprendimientos productivos en contexto de encierro", creditos: 10, area: "Actividades integradoras", semestre: 7, obligatoria: false, requisitos: "180 créditos aprobados" },
  { nombre: "Contabilidad Superior 2", creditos: 10, area: "Contabilidad e impuestos", semestre: 7, obligatoria: false, requisitos: "Contabilidad Superior 1" },
  { nombre: "Marketing de Servicios", creditos: 10, area: "Administración", semestre: 7, obligatoria: false, requisitos: "Marketing Estratégico" },
  { nombre: "Marketing Digital", creditos: 10, area: "Administración", semestre: 7, obligatoria: false, requisitos: "Marketing Estratégico" },
  { nombre: "Comportamiento Organizacional", creditos: 10, area: "Administración", semestre: 7, obligatoria: false, requisitos: "170 créditos de avance" },
  { nombre: "Contabilidad Social y Ambiental", creditos: 10, area: "Contabilidad e impuestos", semestre: 7, obligatoria: false, requisitos: "Contabilidad Gerencial" },
  { nombre: "Contabilidad Gerencial Avanzada", creditos: 10, area: "Contabilidad e impuestos", semestre: 7, obligatoria: false, requisitos: "Contabilidad Gerencial" },
  { nombre: "Blockchain y Contabilidad", creditos: 5, area: "Actividades integradoras", semestre: 7, obligatoria: false, requisitos: "180 créditos totales, incluyendo 60 créditos de contabilidad e impuestos." },
  { nombre: "Modelización y Automatización Robótica de Procesos", creditos: 10, area: "Actividades integradoras", semestre: 7, obligatoria: false, requisitos: "180 créditos totales, incluyendo 60 créditos de contabilidad e impuestos." },

  // OPCIONALES SEMESTRE 8
  { nombre: "Contabilidades Especiales", creditos: 10, area: "Contabilidad e impuestos", semestre: 8, obligatoria: false, requisitos: "270 créditos de avance en la carrera que incluya: Contabilidad Superior I y Auditoría I" },
  { nombre: "Costos y Gestión de Actividades", creditos: 10, area: "Contabilidad e impuestos", semestre: 8, obligatoria: false, requisitos: "Contabilidad Gerencial o Costo para la toma de decisiones" },
  { nombre: "Tributaria III", creditos: 10, area: "Contabilidad e impuestos", semestre: 8, obligatoria: false, requisitos: "Derecho Tributario,Tributaria I y Tributaria II" },
  { nombre: "Auditoría Interna", creditos: 10, area: "Contabilidad e impuestos", semestre: 8, obligatoria: false, requisitos: "Control Interno y Auditoría I" },
  { nombre: "Logística y Cadena de Suministros", creditos: 10, area: "Contabilidad e impuestos", semestre: 8, obligatoria: false, requisitos: "Contabilidad Gerencial" },
  { nombre: "Contabilidad en Sistemas Integrados de Gestión (SIG/ERP)", creditos: 10, area: "Actividades integradoras", semestre: 8, obligatoria: false, requisitos: "180 créditos totales, incluyendo 60 créditos de contabilidad e impuestos." },
  { nombre: "Información Analítica para la Gestión", creditos: 10, area: "Actividades integradoras", semestre: 8, obligatoria: false, requisitos: "180 créditos totales, incluyendo 60 créditos de contabilidad e impuestos." },
  { nombre: "EFI: CCEEmprende", creditos: 10, area: "Actividades integradoras", semestre: 8, obligatoria: false, requisitos: "Administración y Gestión de las Organizaciones I, Matemática Financiera, Introducción a la Estadística. 40 créditos en el Área de Contabilidad e Impuestos, 30 créditos en el Área de Economía y 180 créditos mínimos de avance" },
  { nombre: "Mercados Financieros", creditos: 10, area: "Administración", semestre: 8, obligatoria: false, requisitos: "Finanzas Corporativas 270 créditos aprobados" },
  { nombre: "Proyectos de Inversión", creditos: 10, area: "Administración", semestre: 8, obligatoria: false, requisitos: "Finanzas Corporativas 30 créditos en Economía 270 créditos en el avance de la carrera" },
  { nombre: "Economía y Gestión de Organizaciones de Salud", creditos: 10, area: "Administración", semestre: 8, obligatoria: false, requisitos: "Un mínimo de 20 créditos en el Área de Administración. Un mínimo de 100 créditos aprobados" },
  { nombre: "Auditoría de Sistemas de Información", creditos: 10, area: "Contabilidad e impuestos", semestre: 8, obligatoria: false },
];
