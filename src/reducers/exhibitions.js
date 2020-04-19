import {
  EXHIBTION_CREATE_SUCCESS,
  EXHIBTIONS_FETCHED,
  ONE_EXHIBTION_SELECTED
} from "../actions/exhitbitions";

const initialState = {
  allExhibitions: [],
  createdExhibition: {},
  selectedExhibition: {},
  currentExhibition: {},
  myExhibitions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EXHIBTIONS_FETCHED:
      return {
        ...state,
        allExhibitions: [...action.payload]
      };
    case EXHIBTION_CREATE_SUCCESS:
      return {
        ...state,
        allExhibitions: [...state.allExhibitions, action.payload],
        createdExhibition: action.payload
      };
    case ONE_EXHIBTION_SELECTED:
      return {
        ...state,
        selectedExhibition: action.payload
      };
    default:
      return state;
  }
}
