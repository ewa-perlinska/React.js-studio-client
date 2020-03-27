import axios from "axios";

const baseUrl = "http://localhost:4000";

export const EXHIBTIONS_FETCHED = "EXHIBTIONS_FETCHED";

export function exhibitions(exhibitions) {
  return {
    type: EXHIBTIONS_FETCHED,
    payload: exhibitions
  };
}

export function loadExhibitions() {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${baseUrl}/exhibtion`);
      const { data } = response;

      const action = exhibitions(data);
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
}
export const ONE_EXHIBTION_SELECTED = "ONE_EXHIBTION_SELECTED";

export function exhibition(exhibition) {
  return {
    type: ONE_EXHIBTION_SELECTED,
    payload: exhibition
  };
}

export function selectExhibition(id) {
  return async function(dispatch, getState) {
    try {
      const response = await axios.get(`${baseUrl}/exhibtion/${id}`);
      console.log("do i have my response?", response);
      dispatch(exhibition(response.data));
    } catch (error) {
      throw error;
    }
  };
}

export const EXHIBTION_CREATE_SUCCESS = "EXHIBTION_CREATE_SUCCESS";

function createExhibitionSuccess(exhibition) {
  return {
    type: EXHIBTION_CREATE_SUCCESS,
    payload: {
      exhibition: exhibition
    }
  };
}

export const createExhibition = exhibitionDetails => {
  return async function(dispatch, getState) {
    const stateData = getState().auth.data;
    const token = stateData.token;
    console.log("my studio details", exhibitionDetails);

    const response = await axios({
      method: "POST",
      url: "http://localhost:4000/exhibtion",
      headers: { authorization: `Bearer ${token}` },
      data: {
        exhibitionDetails
      }
    });

    console.log(response);
    dispatch(createExhibitionSuccess(response.data));
  };
};
