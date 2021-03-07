import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../reducers/user.types";
import { WithLoading } from "./loading.layout";

export const WithAuth = (Component) => {
  const MyAuth = () => {
    const isAuth = useSelector((state) => state.userReducer.IsAuth);
    const accessToken = useSelector((state) => state.userReducer.AccessToken);
    const loading = useSelector((state) => state.userReducer.IsLoading);
    const loaded = useSelector((state) => state.userReducer.Loaded);

    const dispatch = useDispatch();

    useEffect(() => {
      if (!loaded) {
        dispatch({ type: types.USER_LS });

        setTimeout(() => {
          dispatch({
            type: types.USER_LO,
            payload: { User: { Name: "Boss" } },
          });
        }, 5000);
      }

      // Cleanup
      return () => {};
    }, [loaded, accessToken, isAuth, dispatch]);

    const ComponentWithLoader = WithLoading(Component, loading);
    return (
        <ComponentWithLoader />
    )
  };

  return MyAuth;
};
