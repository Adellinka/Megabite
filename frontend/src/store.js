import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { mapListReducer, pubgMapDetailsReducer } from "./reducers/pubgReducers";
import {
  champListReducer,
  lolChampCreateReducer,
  lolChampDetailsReducer,
} from "./reducers/lolReducers";
import {
  valorantChampListReducer,
  valorantChampDetailsReducer,
  valorantChampCreateReducer,
} from "./reducers/valorantReducers";
import {
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducers";

//příkaz na to, že když se přihlásím a vypnu prohlížeč, zůstanu přihlášená
const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")) // ? je if, : je else
      : null,
  },
};

const reducer = combineReducers({
  champsList: champListReducer, //v champsList jsou uložené ID champů
  lolChampCreate: lolChampCreateReducer,
  mapsList: mapListReducer,
  lolChampDetails: lolChampDetailsReducer,
  pubgMapDetails: pubgMapDetailsReducer,
  valorantChampList: valorantChampListReducer,
  valorantChampDetails: valorantChampDetailsReducer,
  valorantChampCreate: valorantChampCreateReducer,

  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
