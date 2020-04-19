import axios from "axios";

const baseUrl = "http://localhost:4000";

export const WORKSHOPS_FETCHED = "WORKSHOPS_FETCHED";

export function workshops(workshops) {
  return {
    type: WORKSHOPS_FETCHED,
    payload: workshops
  };
}

export function loadWorkshops() {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${baseUrl}/workshop`);
      const { data } = response;

      const action = workshops(data);
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
}
export const ONE_WORKSHOP_SELECTED = "ONE_WORKSHOP_SELECTED";

export function workshop(workshop) {
  return {
    type: ONE_WORKSHOP_SELECTED,
    payload: workshop
  };
}

export function selectWorkshop(id) {
  return async function(dispatch, getState) {
    try {
      const response = await axios.get(`${baseUrl}/workshop/${id}`);
      console.log("do i have my response?", response);
      dispatch(workshop(response.data));
    } catch (error) {
      throw error;
    }
  };
}

export const WORKSHOP_CREATE_SUCCESS = "WORKSHOP_CREATE_SUCCESS";

function createWorkshopSuccess(workshop) {
  return {
    type: WORKSHOP_CREATE_SUCCESS,
    payload: {
      workshop: workshop
    }
  };
}

export const createWorkshop = workshopDetails => {
  return async function(dispatch, getState) {
    const stateData = getState().auth.data;
    const token = stateData.token;
    console.log("my studio details", workshopDetails);

    const response = await axios({
      method: "POST",
      url: "http://localhost:4000/workshop",
      headers: { authorization: `Bearer ${token}` },
      data: {
        workshopDetails
      }
    });

    console.log(response);
    dispatch(createWorkshopSuccess(response.data));
  };
};
