type Pokemon = {
  nombre: string;
  tipo: string;
};

type Move = {
  nombre: string;
  tipo: string;
};

type Respuesta<T> = {
  data: T;
  ok: boolean;
  error?: string;
};

async function obtenerPokemon(nombre: string): Promise<Respuesta<Pokemon>> {
  return (await fetch(
    `https://pokeapi.co/api/v2/pokemon/${nombre}`,
  ).then()) as Respuesta<Pokemon>;
}

async function obtenerMove(nombre: string): Promise<Respuesta<Move>> {
  return (await fetch(
    `https://pokeapi.co/api/v2/move/${nombre}`,
  ).then()) as Respuesta<Move>;
}
