function ImagenPokemon({ pokemon, clase = '' }) {
  const imagen = pokemon.sprites.other['official-artwork'].front_default
    || pokemon.sprites.front_default

  return <img className={clase} src={imagen} alt={pokemon.name} />
}

export default ImagenPokemon