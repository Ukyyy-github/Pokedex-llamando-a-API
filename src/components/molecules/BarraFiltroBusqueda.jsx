import CampoTexto from '../atoms/CampoTexto'

function BarraFiltroBusqueda({ busqueda, alCambiar }) {
  return (
    <label className="buscador">
      <span>Buscar Pokemon</span>
      <CampoTexto
        valor={busqueda}
        alCambiar={alCambiar}
        textoAyuda="Busca un Pokemon, quiza Haunter?"
      />
    </label>
  )
}

export default BarraFiltroBusqueda