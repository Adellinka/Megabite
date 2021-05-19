import Axios from "axios";
import {
  LOL_CHAMP_LIST_FAIL,
  LOL_CHAMP_LIST_REQUEST,
  LOL_CHAMP_LIST_SUCCESS,
  LOL_CHAMP_DETAILS_REQUEST,
  LOL_CHAMP_DETAILS_SUCCESS,
  LOL_CHAMP_DETAILS_FAIL,
  LOL_CHAMP_CREATE_REQUEST,
  LOL_CHAMP_CREATE_SUCCESS,
  LOL_CHAMP_CREATE_FAIL,
} from "../constants/lolConstants";

export const listChamps = () => async (dispatch) => {
  // zápis funkce: const nazev = () =>
  dispatch({
    type: LOL_CHAMP_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/lolChamps"); //Axios je pomocný program zařizující http requesty
    dispatch({ type: LOL_CHAMP_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOL_CHAMP_LIST_FAIL, payload: error.message });
  }
};

export const detailsChamp = (lolChampId) => async (dispatch) => {
  dispatch({ type: LOL_CHAMP_DETAILS_REQUEST, payload: lolChampId });
  try {
    const { data } = await Axios.get(`/api/lolChamps/${lolChampId}`);
    dispatch({ type: LOL_CHAMP_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LOL_CHAMP_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createLolChamp =
  (name, nahled, zakladni, skin, nadpis, description) =>
  async (dispatch, getState) => {
    dispatch({
      type: LOL_CHAMP_CREATE_REQUEST,
    });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        "/api/lolChamps",
        { name, nahled, zakladni, skin, nadpis, description },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: LOL_CHAMP_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: LOL_CHAMP_CREATE_FAIL,
        payload: message,
      });
    }
  };
