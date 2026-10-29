function Boton({ children, alHacerClic, desactivado = false }) {
  return (
    <button
      className="boton"
      type="button"
      onClick={alHacerClic}
      disabled={desactivado}
    >
      {children}
    </button>
  )
}

export default Boton