import Estadistica from '../atoms/Estadistica'

function GrupoEstadisticas({ estadisticas }) {
  return (
    <div>
      {estadisticas.map((dato) => (
        <Estadistica
          key={dato.stat.name}
          nombre={dato.stat.name}
          valor={dato.base_stat}
        />
      ))}
    </div>
  )
}

export default GrupoEstadisticas