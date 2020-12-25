import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { IRootReducer } from 'redux-app/reducer';

type RouteProps = {
  layout: any,
  component: any,
  path: string,
  exact: boolean
}

const RouteWithLayout: FunctionComponent<RouteProps> = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;
  const isLoggedIn = useSelector((state: IRootReducer)=>state.auth.isAuthenticated);
  return (
    <Route
      {...rest}
      render={matchProps => isLoggedIn ? (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      ) : (<Redirect to={{ pathname: '/login', state: { from: matchProps.location } }} />)}
    />
  );
}
export default RouteWithLayout;
