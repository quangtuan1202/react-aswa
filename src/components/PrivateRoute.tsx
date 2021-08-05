import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const auth = true;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
