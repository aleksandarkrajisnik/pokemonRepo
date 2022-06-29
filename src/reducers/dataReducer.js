const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKEMON":
      return action.payload;
    case "LOADING":
      return (state.loading = false);
    default:
      return state;
  }
};

export default dataReducer;
