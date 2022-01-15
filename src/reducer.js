import { GET_DATA_SUCCESS } from "./action";

const servicesReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default servicesReducer;
