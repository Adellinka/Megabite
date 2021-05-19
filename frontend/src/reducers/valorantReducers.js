import {
  VALORANT_CHAMP_CREATE_FAIL,
  VALORANT_CHAMP_CREATE_REQUEST,
  VALORANT_CHAMP_CREATE_RESET,
  VALORANT_CHAMP_CREATE_SUCCESS,
  VALORANT_CHAMP_DETAILS_FAIL,
  VALORANT_CHAMP_DETAILS_REQUEST,
  VALORANT_CHAMP_DETAILS_SUCCESS,
  VALORANT_CHAMP_LIST_FAIL,
  VALORANT_CHAMP_LIST_REQUEST,
  VALORANT_CHAMP_LIST_SUCCESS,
} from "../constants/valorantConstants";

export const valorantChampListReducer = (
  state = { loading: true, valorantChamps: [] },
  action
) => {
  switch (action.type) {
    case VALORANT_CHAMP_LIST_REQUEST:
      return { loading: true };
    case VALORANT_CHAMP_LIST_SUCCESS:
      return { loading: false, valorantChamps: action.payload };
    case VALORANT_CHAMP_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const valorantChampDetailsReducer = (
  state = { loading: true },
  action
) => {
  switch (action.type) {
    case VALORANT_CHAMP_DETAILS_REQUEST:
      return { loading: true };
    case VALORANT_CHAMP_DETAILS_SUCCESS:
      return { loading: false, valorantChamp: action.payload };
    case VALORANT_CHAMP_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const valorantChampCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case VALORANT_CHAMP_CREATE_REQUEST:
      return { loading: true };
    case VALORANT_CHAMP_CREATE_SUCCESS:
      return { loading: false, success: true, valorantChamp: action.payload };
    case VALORANT_CHAMP_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case VALORANT_CHAMP_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
