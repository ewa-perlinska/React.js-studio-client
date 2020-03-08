import axios from "axios";

const baseUrl = "http://localhost:4000";

export const STUDIOS_FETCHED = "STUDIOS_FETCHED";

export function studios(studios) {
  return {
    type: STUDIOS_FETCHED,
    payload: studios
  };
}

export function loadStudios() {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${baseUrl}/studio`);
      const { data } = response;

      const action = studios(data);
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
}
export const ONE_STUDIO_SELECTED = "ONE_STUDIO_SELECTED";

export function studio(studio) {
  return {
    type: ONE_STUDIO_SELECTED,
    payload: studio
  };
}

export function selectStudio(id) {
  return async function(dispatch, getState) {
    try {
      const response = await axios.get(`${baseUrl}/studio/${id}`);
      console.log("do i have my response?", response);
      dispatch(studio(response.data));
    } catch (error) {
      throw error;
    }
  };
}

export const STUDIO_CREATE_SUCCESS = "STUDIO_CREATE_SUCCESS";

function createStudioSuccess(studio) {
  return {
    type: STUDIO_CREATE_SUCCESS,
    payload: {
      studio: studio
    }
  };
}

export const createStudio = studioDetails => {
  return async function(dispatch, getState) {
    const stateData = getState().auth.data;
    const token = stateData.token;
    console.log("my studio details", studioDetails);

    const response = await axios({
      method: "POST",
      url: "http://localhost:4000/studio",
      headers: { authorization: `Bearer ${token}` },
      data: {
        studioDetails
      }
    });

    console.log(response);
    dispatch(createStudioSuccess(response.data));
  };
};

export const STUDIO_FETCHED = "STUDIO_FETCHED";

export function studioFetch(studio) {
  return {
    type: STUDIO_FETCHED,
    payload: studio
  };
}

export function loadStudio(studioId) {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${baseUrl}/studio/${studioId}`);
      const { data } = response;

      const action = studioFetch(data);
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
}

export const MY_STUDIO_FETCHED = "MY_STUDIO_FETCHED";

export function myStudioFetch(studio) {
  return {
    type: MY_STUDIO_FETCHED,
    payload: studio
  };
}

export const loadMyStudio = () => {
  return async function(dispatch, getState) {
    const stateData = getState().auth.data;
    const token = stateData.token;

    const response = await axios({
      method: "GET",
      url: "http://localhost:4000/mystudio",
      headers: { authorization: `Bearer ${token}` }
    });

    console.log(response);
    dispatch(myStudioFetch(response.data));
  };
};

export const STUDIO_UPDATE_SUCCESS = "STUDIO_UPDATE_SUCCESS";

export function studioUpdateSuccess(studio) {
  return {
    type: STUDIO_UPDATE_SUCCESS,
    payload: studio
  };
}

export function updateStudio(studioDetails, studioId) {
  console.log("do i have mt studio id here????? ", studioId);

  return async function(dispatch, getState) {
    const response = await axios({
      method: "PATCH",
      url: `${baseUrl}/studio/${studioId}`,
      studioId,

      data: {
        studioDetails
      }
    });

    console.log(response);
    dispatch(studioUpdateSuccess(response.data));
  };
}
