const cursos = {
  // --- PRIMER SEMESTRE ---
  "Teoría de la Comunicación": {
    creditos: 3,
    desbloquea: ["Teoría y Métodos del Diseño 1"],
    requisitos: [],
    semestre: "1-1"
  },
  "Métodos y Técnicas de Investigación": {
    creditos: 3,
    desbloquea: ["Sociología y Desarrollo Humano", "Teoría y Métodos del Diseño 1", "Diseño Arquitectónico 1"],
    requisitos: [],
    semestre: "1-1"
  },
  "Fundamentos del Diseño": {
    creditos: 5,
    desbloquea: ["Teoría y Métodos del Diseño 1", "Diseño Arquitectónico 1"],
    requisitos: [],
    semestre: "1-1"
  },
  "Medios de Expresión": {
    creditos: 4,
    desbloquea: ["Diseño Arquitectónico 1", "Dibujo Natural"],
    requisitos: [],
    semestre: "1-1"
  },
  "Dibujo Geométrico": {
    creditos: 4,
    desbloquea: ["Diseño Arquitectónico 1", "Dibujo Técnico", "Dibujo Proyectual"],
    requisitos: [],
    semestre: "1-1"
  },
  "Geometria": {
    creditos: 4,
    desbloquea: ["Diseño Arquitectónico 1", "Dibujo Técnico", "Dibujo Proyectual"],
    requisitos: [],
    semestre: "1-1"
  },
  "Matemática 1": {
    creditos: 4,
    desbloquea: ["Matemática 2"],
    requisitos: [],
    semestre: "1-1"
  },
  
  // --- SEGUNDO SEMESTRE ---
  "Sociología y Desarrollo Humano": {
    creditos: 3,
    desbloquea: ["Ecología Humana"],
    requisitos: ["Métodos y Técnicas de Investigación"],
    semestre: "1-2"
  },
  "Teoría y Métodos del Diseño 1": {
    creditos: 3,
    desbloquea: ["Historia de la Arquitectura y el Arte 1", "Diseño Arquitectónico 2"],
    requisitos: ["Teoría de la Comunicación", "Métodos y Técnicas de Investigación", "Fundamentos del Diseño"],
    semestre: "1-2"
  },
  "Diseño Arquitectónico 1": {
    creditos: 6,
    desbloquea: ["Diseño Arquitectónico 2"],
    requisitos: ["Fundamentos del Diseño", "Métodos y Técnicas de Investigación", "Medios de Expresión", "Dibujo Geométrico", "Geometria"],
    semestre: "1-2"
  },
  "Dibujo Natural": {
    creditos: 4,
    desbloquea: ["Diseño Arquitectónico 2", "Presentación 1"],
    requisitos: ["Medios de Expresión"],
    semestre: "1-2"
  },
  "Dibujo Técnico": {
    creditos: 5,
    desbloquea: ["Diseño Arquitectónico 2", "Presentación 1", "Herramientas Digitales 1", "Topografía"],
    requisitos: ["Dibujo Geométrico", "Geometria"],
    semestre: "1-2"
  },
  "Dibujo Proyectual": {
    creditos: 4,
    desbloquea: ["Diseño Arquitectónico 2", "Presentación 1", "Herramientas Digitales 1", "Topografía"],
    requisitos: ["Dibujo Geométrico", "Geometria"],
    semestre: "1-2"
  },
  "Matemática 2": {
    creditos: 4,
    desbloquea: ["Topografía", "Física 1"],
    requisitos: ["Matemática 1"],
    semestre: "1-2"
  },
