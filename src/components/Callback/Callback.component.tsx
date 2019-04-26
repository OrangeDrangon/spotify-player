import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import qs from "query-string";

import { ISpotifyTokenResponse } from "interfaces/ISpotifyTokenResponse.interface";

import { setToken } from "redux/actions/setToken.action";
import { Redirect } from "react-router";

interface IProps {
  token: string | null;
  setToken: (
    token: string | null
  ) => {
    type: string;
    payload: string | null;
  };
}

const CallbackConnected: React.FC<IProps> = ({ setToken }: IProps) => {
  const [redirectTo, setRedirectTo] = useState<string | null>(null);
  useEffect(() => {
    let cancelled = false;
    let timeoutId: NodeJS.Timeout | null = null;
    const params = qs.parse(window.location.hash);
    if (params.access_token) {
      // We know it is this type at this point so we cast to it
      const spotifyResponse = (params as unknown) as ISpotifyTokenResponse;

      // If the effect has not been cancelled we set the state
      if (!cancelled) {
        setToken(spotifyResponse.access_token);
        timeoutId = setTimeout(
          () => setToken(null),
          Number(spotifyResponse.expires_in) * 1000
        );
      }
      // Removes tokens from the url
      if (spotifyResponse.state) {
        setRedirectTo(spotifyResponse.state);
      }
    }
    return () => {
      cancelled = true;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [setToken]);
  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  } else {
    return <div>Redirecting...</div>;
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return { setToken: (token: string | null) => dispatch(setToken(token)) };
};

const Callback = connect(
  null,
  mapDispatchToProps
)(CallbackConnected);

export default Callback;
