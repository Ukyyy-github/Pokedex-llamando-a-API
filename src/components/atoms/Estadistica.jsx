const nombresEstadisticas = {
  hp: 'Salud',
  attack: 'Ataque',
  defense: 'Defensa',
  'special-attack': 'Ataque especial',
  'special-defense': 'Defensa especial',
  speed: 'Velocidad',
}

function Estadistica({ nombre, valor }) {
  return (
    <div className="estadistica">
      <span>{nombresEstadisticas[nombre] || nombre}</span>
      <strong>{valor}</strong>
      <div className="barra">
        <span style={{ width: `${Math.min(valor / 2, 100)}%` }} />
      </div>
    </div>
  )
}

export default Estadistica