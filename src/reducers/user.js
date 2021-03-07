import _, { omitAll } from "lodash/fp";
import * as types from "./user.types";

const initialUserState = {
  AccessToken: window.localStorage.getItem("AccessToken") || ``,
  RefreshToken: window.localStorage.getItem("RefreshToken") || ``,
  IsAuth: false,
  User: {
    Name: `Guest`,
    Email: ``,
  },
  IsLoading: false,
  Loaded: false
};

const userReducer = (state = initialUserState, { type, payload }) => {
  switch (type) {
    case types.USER_LS:
      return _.merge(state, {
        IsLoading: true,
      });

    case types.USER_LO:
      return _.merge(state, {
        IsAuth: true,
        Loaded: true,
        User: payload.User,
        IsLoading: false,
      });

    default:
      return state;
  }
};

export default userReducer;
