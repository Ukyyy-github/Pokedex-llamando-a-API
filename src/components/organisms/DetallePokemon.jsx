import GrupoEstadisticas from '../molecules/GrupoEstadisticas'
import TipoPokemon from '../atoms/TipoPokemon'
import ImagenPokemon from '../atoms/ImagenPokemon'

function DetallePokemon({ pokemon, alCerrar }) {
  if (!pokemon) return null

  return (
    <div className="fondo-modal" onClick={alCerrar}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nombre-pokemon"
        onClick={(evento) => evento.stopPropagation()}
      >
        <button className="cerrar" type="button" onClick={alCerrar} aria-label="Cerrar">
          ×
        </button>
        <p className="numero">N.º {String(pokemon.id).padStart(3, '0')}</p>
        <h2 id="nombre-pokemon">{pokemon.name}</h2>
        <ImagenPokemon pokemon={pokemon} clase="imagen-modal" />
        <div className="tipos">
          {pokemon.types.map((dato) => (
            <TipoPokemon key={dato.type.name} tipo={dato.type.name} />
          ))}
        </div>
        <p className="medidas">
          Altura: {pokemon.height / 10} m <span>·</span> Peso: {pokemon.weight / 10} kg
        </p>
        <h3 className="titulo-estadisticas">Estadisticas</h3>
        <GrupoEstadisticas estadisticas={pokemon.stats} />
      </section>
    </div>
  )
}

export default DetallePokemon