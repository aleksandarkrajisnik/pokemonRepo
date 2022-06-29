import axios from "axios";

export const pokeFn = (arrayOfPokemon) => {
  return {
    type: "GET_POKEMON",
    payload: arrayOfPokemon,
  };
};

export const loading = () => {
  return {
    type: "LOADING",
  };
};

export const getPokemon = () => {
  return async (dispatch, getState) => {
    dispatch(loading);
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    dispatch(pokeFn(response.data.results));
  };
};
