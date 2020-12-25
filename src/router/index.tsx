import React, { lazy, Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { Loading } from "components";
import RouteWithLayout from "layouts/components/RouteWithLayout";
import { Main as MainLayout } from "layouts";
import { useDispatch, useSelector } from "react-redux";
import { IRootReducer } from "redux-app/reducer";
import HomeView from "views/home/home";
import LoginView from "views/login/login";
import NotFoundView from "views/not-found/not-found";
import logoutView from "views/logout/logout";
import { authCheckState } from "redux-app/auth/actions";

const DashboardView = lazy(() => import("views/dashboard/dashboard"));
const TableView = lazy(() => import("views/table-view/table-view"));

export const Router = () => {
  const [isAuth, setIsAuth] = React.useState<boolean | undefined>();
  const { isAuthenticated } = useSelector((state: IRootReducer) => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(authCheckState());
  }, [dispatch]);
  React.useEffect(() => {
    setIsAuth(isAuthenticated);
  }, [isAuthenticated]);

  if (isAuth === undefined) {
    return <></>;
  }

  if (!isAuthenticated) {
    return (
      <Switch>
        <Route exact path="/" component={HomeView}></Route>
        <Route exact path="/login" component={LoginView}></Route>
        <Route exact path="/not-found" component={NotFoundView}></Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Redirect from="/login" to="/" />
        <RouteWithLayout
          component={DashboardView}
          exact
          layout={MainLayout}
          path="/"
        />
        <RouteWithLayout
          component={TableView}
          exact={false}
          layout={MainLayout}
          path="/items"
        />
        <RouteWithLayout
          component={TableView}
          exact={true}
          layout={logoutView}
          path="/logout"
        />
        <Route exact path="/not-found" component={NotFoundView} />
        <Redirect to="/not-found" />
      </Switch>
    </Suspense>
  );
};
