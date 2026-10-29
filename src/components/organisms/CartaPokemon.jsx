import ImagenPokemon from '../atoms/ImagenPokemon'

function CartaPokemon({ pokemon, alSeleccionar }) {
  return (
    <button
      className="tarjeta"
      type="button"
      aria-label={`Ver detalles de ${pokemon.name}`}
      onClick={() => alSeleccionar(pokemon)}
    >
      <ImagenPokemon pokemon={pokemon} clase="imagen-tarjeta" />
      <span className="nombre-pokemon">{pokemon.name}</span>
    </button>
  )
}

export default CartaPokemon