import {
  WORKSHOP_CREATE_SUCCESS,
  WORKSHOPS_FETCHED,
  ONE_WORKSHOP_SELECTED
} from "../actions/workshops";

const initialState = {
  allWorkshops: [],
  createdWorkshop: {},
  selectedWorkshop: {},
  currentWorkshop: {},
  myWorkshops: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case WORKSHOPS_FETCHED:
      return {
        ...state,
        allWorkshops: [...action.payload]
      };
    case WORKSHOP_CREATE_SUCCESS:
      return {
        ...state,
        allWorkshops: [...state.allWorkshops, action.payload],
        createdWorkshop: action.payload
      };
    case ONE_WORKSHOP_SELECTED:
      return {
        ...state,
        selectedWorkshop: action.payload
      };
    default:
      return state;
  }
}
