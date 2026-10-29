function CampoTexto({ valor, alCambiar, textoAyuda }) {
  return (
    <input
      className="campo-busqueda"
      type="search"
      value={valor}
      onChange={alCambiar}
      placeholder={textoAyuda}
    />
  )
}

export default CampoTexto