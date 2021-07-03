import React from "react";
import { Route, Redirect } from "react-router-dom";

function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const loading = false;
  const signed = false;

  if (loading) {
    return (
      <div>
        <h1>CARREGANDO...</h1>
      </div>
    );
  }

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  } else if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

export default RouteWrapper;
