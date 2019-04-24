import React, { useState, useEffect, useCallback } from "react";

import qs from "query-string";

import { ISpotifyTokenRequest } from "interfaces/ISpotifyTokenRequest.interface";
import { ISpotifyTokenResponse } from "interfaces/ISpotifyTokenResponse.interface";

import { generateSpotifyAuthUrl } from "utils/generateSpotifyAuthUrl.util";
import { setTokenExpiresAt } from "utils/setTokenExpiresAt.util";
import { isTokenValid } from "utils/isTokenValid.util";

// import classes from "./App.module.scss";

type Token = string | null;

const App: React.FC = () => {
  const [token, setToken] = useState<Token>(null);

  useEffect(() => {
    let cancelled = false;
    if (!token) {
      (async () => {
        const params = qs.parse(window.location.hash);
        if (!params.access_token) {
          const requestContents: ISpotifyTokenRequest = {
            client_id: process.env.REACT_APP_CLIENT_ID || "",
            redirect_uri: process.env.REACT_APP_REDIRECT_URI || "",
            response_type: "token",
            scopes: [
              "streaming",
              "user-read-birthdate",
              "user-read-email",
              "user-read-private"
            ]
          };
          window.location.assign(generateSpotifyAuthUrl(requestContents));
        } else {
          // We know it is this type at this point so we cast to it
          const spotifyResponse = (params as unknown) as ISpotifyTokenResponse;

          setTokenExpiresAt(Number(spotifyResponse.expires_in));

          // If the effect has not been cancelled we set the state
          if (!cancelled) {
            setToken(spotifyResponse.access_token);
          }
          // Removes tokens from the url
          window.location.hash = "";
        }
      })();
    }
    return () => {
      cancelled = true;
    };
  }, [token]);

  const getFeatured = useCallback(async () => {
    if (token && isTokenValid()) {
      try {
        const unparsed = await fetch(
          "https://api.spotify.com/v1/browse/featured-playlists",
          {
            method: "GET",
            headers: [["Authorization", `Bearer ${token}`]]
          }
        );
        const json = await unparsed.json();
        return json;
      } catch (error) {
        console.log(error);
      }
    } else {
      if (!token) {
        setToken(null);
      }
    }
  }, [token]);

  return <div>{token}</div>;
};

export default App;
