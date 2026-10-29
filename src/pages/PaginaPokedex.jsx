import { useEffect, useState } from 'react'
import PlantillaPokedex from '../components/templates/PlantillaPokedex'
import { obtenerListaPokemon } from '../services/PokeApi'

const CANTIDAD_POR_PAGINA = 12

function PaginaPokedex() {
  const [listaPokemon, setListaPokemon] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [pagina, setPagina] = useState(0)
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function cargarPokemones() {
      setCargando(true)
      setError('')

      try {
        const datos = await obtenerListaPokemon(
          CANTIDAD_POR_PAGINA,
          pagina * CANTIDAD_POR_PAGINA,
        )
        setListaPokemon(datos)
      } catch {
        setError('No se pudieron cargar los Pokemon.')
      } finally {
        setCargando(false)
      }
    }

    cargarPokemones()
  }, [pagina])

  const pokemonesFiltrados = []

  for (let i = 0; i < listaPokemon.length; i++) {
    const nombrePokemon = listaPokemon[i].name.toLowerCase()

    if (nombrePokemon.includes(busqueda.toLowerCase())) {
      pokemonesFiltrados.push(listaPokemon[i])
    }
  }

  return (
    <PlantillaPokedex
      pokemones={pokemonesFiltrados}
      busqueda={busqueda}
      alCambiarBusqueda={(evento) => setBusqueda(evento.target.value)}
      alSeleccionar={setPokemonSeleccionado}
      pokemonSeleccionado={pokemonSeleccionado}
      alCerrarDetalle={() => setPokemonSeleccionado(null)}
      cargando={cargando}
      error={error}
      pagina={pagina}
      alCambiarPagina={setPagina}
    />
  )
}

export default PaginaPokedex