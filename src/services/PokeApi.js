const URL_BASE = import.meta.env.VITE_API_BASE_URL;

export const obtenerListaPokemon = async (cantidad = 20, desplazamiento = 0) => {
  const respuesta = await fetch(`${URL_BASE}/pokemon?limit=${cantidad}&offset=${desplazamiento}`);
  if (!respuesta.ok) throw new Error('Error al obtener la lista de Pokemon');
  const datos = await respuesta.json();
  const detallesPokemon = [];

  for (const pokemon of datos.results) {
    const respuestaPokemon = await fetch(pokemon.url);
    if (!respuestaPokemon.ok) throw new Error('Error al obtener un Pokemon');
    const detallePokemon = await respuestaPokemon.json();
    detallesPokemon.push(detallePokemon);
  }

  return detallesPokemon;
};