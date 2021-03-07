import { Redirect, Route } from "react-router";

export const WithPrivateRoute = (Com, isAuth) => {
  const MyPrivRoute = () => {
    if (isAuth) {
      return <Route path={"/dashboard"} component={Com} />
    } else {
      return <Redirect to={"/login"} />
    }
  };

  return MyPrivRoute;
};