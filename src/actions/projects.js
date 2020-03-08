import axios from "axios";

const baseUrl = "http://localhost:4000";

export const PROJECTS_FETCHED = "PROJECTS_FETCHED";

export function projects(projects) {
  return {
    type: PROJECTS_FETCHED,
    payload: projects
  };
}

export function loadProjects() {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${baseUrl}/project`);
      const { data } = response;

      const action = projects(data);
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
}
export const ONE_PROJECT_SELECTED = "ONE_PROJECT_SELECTED";

export function project(project) {
  return {
    type: ONE_PROJECT_SELECTED,
    payload: project
  };
}

export function selectProject(id) {
  return async function(dispatch, getState) {
    try {
      const response = await axios.get(`${baseUrl}/project/${id}`);
      console.log("do i have my response?", response);
      dispatch(project(response.data));
    } catch (error) {
      throw error;
    }
  };
}

export const PROJECT_CREATE_SUCCESS = "PROJECT_CREATE_SUCCESS";

function createProjectSuccess(project) {
  return {
    type: PROJECT_CREATE_SUCCESS,
    payload: {
      project: 
    }
  };
}

export const createProject = projectDetails => {
  return async function(dispatch, getState) {
    const stateData = getState().auth.data;
    const token = stateData.token;
    console.log("my project details", projectDetails);

    const response = await axios({
      method: "POST",
      url: "http://localhost:4000/project",
      headers: { authorization: `Bearer ${token}` },
      data: {
        projectDetails
      }
    });

    console.log(response);
    dispatch(createProjectSuccess(response.data));
  };
};

export const PROJECT_FETCHED = "PROJECT_FETCHED";

export function projectFetch(project) {
  return {
    type: PROJECT_FETCHED,
    payload: project
  };
}

export function loadProject(projectId) {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${baseUrl}/project/${projectId}`);
      const { data } = response;

      const action = projectFetch(data);
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
}

export const MY_PROJECT_FETCHED = "MY_PROJECT_FETCHED";

export function myProjectFetch(project) {
  return {
    type: MY_PROJECT_FETCHED,
    payload: project
  };
}

export const loadMyProject = () => {
  return async function(dispatch, getState) {
    const stateData = getState().auth.data;
    const token = stateData.token;

    const response = await axios({
      method: "GET",
      url: "http://localhost:4000/myproject",
      headers: { authorization: `Bearer ${token}` }
    });

    console.log(response);
    dispatch(myProjectFetch(response.data));
  };
};

export const PROJECT_UPDATE_SUCCESS = "PROJECT_UPDATE_SUCCESS";

export function projectUpdateSuccess(project) {
  return {
    type: PROJECT_UPDATE_SUCCESS,
    payload: project
  };
}

export function updateProject(projectDetails, projectId) {
  console.log("do i have mt project id here????? ", projectId);

  return async function(dispatch, getState) {
    const response = await axios({
      method: "PATCH",
      url: `${baseUrl}/project/${projectId}`,
      projectId,

      data: {
        projectDetails
      }
    });

    console.log(response);
    dispatch(projectUpdateSuccess(response.data));
  };
}
