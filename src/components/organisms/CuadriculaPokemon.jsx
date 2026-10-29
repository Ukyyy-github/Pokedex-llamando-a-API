import CartaPokemon from './CartaPokemon'

function CuadriculaPokemon({ pokemones, alSeleccionar }) {
  return (
    <div className="rejilla">
      {pokemones.map((pokemon) => (
        <CartaPokemon
          key={pokemon.id}
          pokemon={pokemon}
          alSeleccionar={alSeleccionar}
        />
      ))}
    </div>
  )
}

export default CuadriculaPokemon