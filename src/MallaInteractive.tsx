import React, { useState } from "react";
import {
  materias,
  creditosMinimosArea,
  creditosTotalesNecesarios,
  Area,
  Materia,
} from "./dataMaterias";
import "./MallaInteractive.css";

type MateriaSeleccionada = Record<string, boolean>;

const semestresArriba = [1, 2, 3, 4];
const semestresAbajo = [5, 6, 7, 8];

function creditosPorArea(materias: Materia[], seleccionadas: MateriaSeleccionada) {
  return Object.keys(creditosMinimosArea).reduce((acc, area) => {
    acc[area as Area] = materias
      .filter((m) => m.area === area && seleccionadas[m.nombre])
      .reduce((a, b) => a + b.creditos, 0);
    return acc;
  }, {} as Record<Area, number>);
}

function totalCreditos(materias: Materia[], seleccionadas: MateriaSeleccionada) {
  return materias.filter((m) => seleccionadas[m.nombre]).reduce((a, b) => a + b.creditos, 0);
}

export default function MallaInteractive() {
  const [materiasSeleccionadas, setMateriasSeleccionadas] = useState<MateriaSeleccionada>(
    materias.reduce(
      (acc, m) => ({ ...acc, [m.nombre]: m.obligatoria }),
      {} as MateriaSeleccionada
    )
  );
  const [mostrarCreditos, setMostrarCreditos] = useState(true);

  const handleMateriaClick = (nombre: string) => {
    const materia = materias.find(m => m.nombre === nombre);
    if (materia?.obligatoria) return; // No deseleccionar obligatorias
    setMateriasSeleccionadas((prev) => ({
      ...prev,
      [nombre]: !prev[nombre],
    }));
  };

  const creditosAreas = creditosPorArea(materias, materiasSeleccionadas);
  const creditosTotales = totalCreditos(materias, materiasSeleccionadas);

  const renderSemestre = (semestre: number) => (
    <div className="semestre-card" key={semestre}>
      <div className="semestre-titulo">Semestre {semestre}</div>
      <ul>
        {materias
          .filter((m) => m.semestre === semestre)
          .map((m) => (
            <li
              key={m.nombre}
              className={`ramo ${materiasSeleccionadas[m.nombre] ? "seleccionada" : ""} ${m.obligatoria ? "obligatoria-materia" : ""}`}
              onClick={() => handleMateriaClick(m.nombre)}
              title={`Área: ${m.area}${m.requisitos ? "\nRequisitos: " + m.requisitos : ""}`}
            >
              <span className="ramo-nombre">{m.nombre}</span>
              <span className="ramo-creditos">{m.creditos} cr</span>
              <span className="ramo-area">{m.area}</span>
              {m.obligatoria && <span className="obligatoria">Obligatoria</span>}
              {m.requisitos && <span className="requisitos">{m.requisitos}</span>}
            </li>
          ))}
      </ul>
    </div>
  );

  return (
    <div className="malla-container">
      <h2>Malla Interactiva - Contador Público</h2>
      <div className="creditos-toggle" onClick={() => setMostrarCreditos(!mostrarCreditos)}>
        <span>{mostrarCreditos ? "▼" : "▲"} Créditos y Áreas</span>
      </div>
      {mostrarCreditos && (
        <div className="creditos-total">
          <div>
            <strong>Créditos totales seleccionados:</strong> {creditosTotales} / {creditosTotalesNecesarios}
          </div>
          <table className="tabla-areas">
            <thead>
              <tr>
                <th>Área</th>
                <th>Seleccionados</th>
                <th>Requeridos</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(creditosMinimosArea).map(([area, min]) => (
                <tr key={area}>
                  <td>{area}</td>
                  <td>{creditosAreas[area as Area] || 0}</td>
                  <td>{min}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="semestres-grid">
        <div className="fila-superior">
          {semestresArriba.map(renderSemestre)}
        </div>
        <div className="fila-inferior">
          {semestresAbajo.map(renderSemestre)}
        </div>
      </div>
      <p className="ayuda">Haz clic en las materias opcionales para seleccionar/deseleccionar. Las obligatorias siempre están seleccionadas y no pueden desmarcarse.</p>
    </div>
  );
                                       }
