import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import Loading from "../components/Loading";

function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  } else if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

export default RouteWrapper;
