import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import qs from "query-string";

import { ISpotifyTokenResponse } from "interfaces/ISpotifyTokenResponse.interface";

import { setToken } from "redux/features/authFeature";
import { Redirect } from "react-router";

const Callback: React.FC = () => {
  const dispatch = useDispatch();
  const dispatchToken = useCallback(
    (token: string | null) => dispatch(setToken({token})),
    [dispatch],
  )
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
        dispatchToken(spotifyResponse.access_token);
        timeoutId = setTimeout(
          () => dispatchToken(null),
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
  }, [dispatchToken]);
  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  } else {
    return <div>Redirecting...</div>;
  }
};

export default Callback;
