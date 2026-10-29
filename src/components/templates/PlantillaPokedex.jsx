import BarraFiltroBusqueda from '../molecules/BarraFiltroBusqueda'
import CuadriculaPokemon from '../organisms/CuadriculaPokemon'
import DetallePokemon from '../organisms/DetallePokemon'
import Cargando from '../atoms/Cargando'
import Boton from '../atoms/Boton'

function PlantillaPokedex({
  pokemones,
  busqueda,
  alCambiarBusqueda,
  alSeleccionar,
  pokemonSeleccionado,
  alCerrarDetalle,
  cargando,
  error,
  pagina,
  alCambiarPagina,
}) {
  return (
    <main className="pagina">
      <header className="encabezado">
        <h1>Pokedex</h1>
        <BarraFiltroBusqueda busqueda={busqueda} alCambiar={alCambiarBusqueda} />
      </header>

      <section className="contenido" aria-live="polite">
        {cargando && <Cargando />}
        {error && <p className="mensaje error">{error}</p>}
        {!cargando && !error && pokemones.length === 0 && (
          <p className="mensaje">No encontramos Pokemon con ese nombre.</p>
        )}
        {!cargando && !error && pokemones.length > 0 && (
          <CuadriculaPokemon
            pokemones={pokemones}
            alSeleccionar={alSeleccionar}
          />
        )}

        <nav className="paginacion" aria-label="Paginas de Pokemon">
          <Boton
            alHacerClic={() => alCambiarPagina(pagina - 1)}
            desactivado={pagina === 0 || cargando}
          >
            Anterior
          </Boton>
          <span>Pagina {pagina + 1}</span>
          <Boton alHacerClic={() => alCambiarPagina(pagina + 1)} desactivado={cargando}>
            Siguiente
          </Boton>
        </nav>
      </section>

      <DetallePokemon pokemon={pokemonSeleccionado} alCerrar={alCerrarDetalle} />
    </main>
  )
}

export default PlantillaPokedex