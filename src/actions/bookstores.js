import axios from "axios";

const baseUrl = "http://localhost:4000";

export const BOOKSTORES_FETCHED = "BOOKSTORES_FETCHED";

export function bookstores(bookstores) {
  return {
    type: BOOKSTORES_FETCHED,
    payload: bookstores
  };
}

export function loadBookStores() {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${baseUrl}/bookstore`);
      const { data } = response;

      const action = bookstores(data);
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
}
export const ONE_BOOKSTORE_SELECTED = "ONE_BOOKSTORE_SELECTED";

export function bookstore(bookstore) {
  return {
    type: ONE_BOOKSTORE_SELECTED,
    payload: bookstore
  };
}

export function selectBookStore(id) {
  return async function(dispatch, getState) {
    try {
      const response = await axios.get(`${baseUrl}/bookstore/${id}`);
      console.log("do i have my response?", response);
      dispatch(bookstore(response.data));
    } catch (error) {
      throw error;
    }
  };
}

export const BOOKSTORE_CREATE_SUCCESS = "BOOKSTORE_CREATE_SUCCESS";

function createBookStoreSuccess(bookstore) {
  return {
    type: BOOKSTORE_CREATE_SUCCESS,
    payload: {
      bookstore: bookstore
    }
  };
}

export const createBookStore = bookStoreDetails => {
  return async function(dispatch, getState) {
    const stateData = getState().auth.data;
    const token = stateData.token;
    console.log("my bookstore details", bookStoreDetails);

    const response = await axios({
      method: "POST",
      url: "http://localhost:4000/bookstore",
      headers: { authorization: `Bearer ${token}` },
      data: {
        bookStoreDetails
      }
    });

    console.log(response);
    dispatch(createBookStoreSuccess(response.data));
  };
};
