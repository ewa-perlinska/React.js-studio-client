import {
  STUDIO_CREATE_SUCCESS,
  STUDIOS_FETCHED,
  ONE_STUDIO_SELECTED,
  STUDIO_FETCHED
} from "../actions/studios";

const initialState = {
  allStudios: [],
  createdStudio: {},
  selectedStudio: {},
  currentStudio: {}
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

    case STUDIO_FETCHED:
      return {
        ...state,
        currentStudio: action.payload
      };
    default:
      return state;
  }
}
