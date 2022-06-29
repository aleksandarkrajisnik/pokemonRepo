import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dataReducer from "./dataReducer";

const mainReducer = combineReducers({
  authToken: authReducer,
  pokemonData: dataReducer,
});

export default mainReducer;
