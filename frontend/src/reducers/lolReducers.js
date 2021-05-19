import {
  LOL_CHAMP_CREATE_FAIL,
  LOL_CHAMP_CREATE_REQUEST,
  LOL_CHAMP_CREATE_RESET,
  LOL_CHAMP_CREATE_SUCCESS,
  LOL_CHAMP_DETAILS_FAIL,
  LOL_CHAMP_DETAILS_REQUEST,
  LOL_CHAMP_DETAILS_SUCCESS,
  LOL_CHAMP_LIST_FAIL,
  LOL_CHAMP_LIST_REQUEST,
  LOL_CHAMP_LIST_SUCCESS,
} from "../constants/lolConstants";

export const champListReducer = (
  state = { loading: true, lolChamps: [] },
  action
) => {
  switch (action.type) {
    case LOL_CHAMP_LIST_REQUEST:
      return { loading: true };
    case LOL_CHAMP_LIST_SUCCESS:
      return { loading: false, lolChamps: action.payload };
    case LOL_CHAMP_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const lolChampDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case LOL_CHAMP_DETAILS_REQUEST:
      return { loading: true };
    case LOL_CHAMP_DETAILS_SUCCESS:
      return { loading: false, lolChamp: action.payload };
    case LOL_CHAMP_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const lolChampCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case LOL_CHAMP_CREATE_REQUEST:
      return { loading: true };
    case LOL_CHAMP_CREATE_SUCCESS:
      return { loading: false, success: true, lolChamp: action.payload };
    case LOL_CHAMP_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case LOL_CHAMP_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
