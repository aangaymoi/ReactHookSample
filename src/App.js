import logo from "./logo.svg";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import LoginPage from "./pages/login";
import FourZeroFour from "./pages/404";
import { WithPrivateRoute } from "./components/private.route";
import { WithAuth } from "./components/auth";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={HomePage} exact={true} />
        <Route path={"/login"} component={LoginPage} />
        <Route
          path={"/dashboard"}
          component={WithPrivateRoute(DashboardPage, true)}
        />
        <Route component={FourZeroFour} />
      </Switch>
    </BrowserRouter>
  );
};

export default WithAuth(App);
