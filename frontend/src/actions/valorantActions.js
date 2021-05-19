import Axios from "axios";
import {
  VALORANT_CHAMP_LIST_FAIL,
  VALORANT_CHAMP_LIST_REQUEST,
  VALORANT_CHAMP_LIST_SUCCESS,
  VALORANT_CHAMP_DETAILS_REQUEST,
  VALORANT_CHAMP_DETAILS_SUCCESS,
  VALORANT_CHAMP_DETAILS_FAIL,
  VALORANT_CHAMP_CREATE_REQUEST,
  VALORANT_CHAMP_CREATE_SUCCESS,
  VALORANT_CHAMP_CREATE_FAIL,
} from "../constants/valorantConstants";

export const listValorantChamps = () => async (dispatch) => {
  dispatch({
    type: VALORANT_CHAMP_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/valorantChamps");
    dispatch({ type: VALORANT_CHAMP_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: VALORANT_CHAMP_LIST_FAIL, payload: error.message });
  }
};

export const detailsChamp = (valorantChampId) => async (dispatch) => {
  dispatch({ type: VALORANT_CHAMP_DETAILS_REQUEST, payload: valorantChampId });
  try {
    const { data } = await Axios.get(`/api/valorantChamps/${valorantChampId}`);
    dispatch({ type: VALORANT_CHAMP_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: VALORANT_CHAMP_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createValorantChamp =
  (name, nahled, zakladni, description) => async (dispatch, getState) => {
    dispatch({
      type: VALORANT_CHAMP_CREATE_REQUEST,
    });
    console.log(
      "name: " +
        name +
        ", nahled: " +
        nahled +
        ", zakladni: " +
        zakladni +
        ", desc: " +
        description
    );
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        "/api/valorantChamps",
        { name, nahled, zakladni, description },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: VALORANT_CHAMP_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: VALORANT_CHAMP_CREATE_FAIL,
        payload: message,
      });
    }
  };
