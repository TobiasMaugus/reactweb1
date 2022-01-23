import { useAuth } from "hooks/auth";
import React, { useCallback, useEffect, useState } from "react";
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom";

interface PrivateRouteParams extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

export function PrivateRoute({
  component: Component,
  ...rest
}: PrivateRouteParams) {
  const { token, loadUserStorageData } = useAuth();

  const fetchData = useCallback(async () => {
    await loadUserStorageData();;
  }, [loadUserStorageData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
        <Route
          {...rest}
          render={(props) =>
            token ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            )
          }
        />
    </>
  );
}