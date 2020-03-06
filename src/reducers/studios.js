import {
  STUDIO_CREATE_SUCCESS,
  STUDIOS_FETCHED,
  ONE_STUDIO_SELECTED
} from "../actions/studios";

const initialState = {
  allStudios: [],
  createdStudio: {},
  selectedStudio: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case STUDIOS_FETCHED:
      return {
        ...state,
        allStudios: [...action.payload]
      };
    case STUDIO_CREATE_SUCCESS:
      return {
        ...state,
        allStudios: [...state.allStudios, action.payload],
        createdStudio: action.payload
      };
    case ONE_STUDIO_SELECTED:
      return {
        ...state,
        selectedStudio: action.payload
      };

    default:
      return state;
  }
}
