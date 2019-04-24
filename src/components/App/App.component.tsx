import React, { useState, useEffect, useCallback } from "react";

import qs from "query-string";

import { generateSpotifyAuthUrl } from "utils/generateSpotifyAuthUrl.util";
import { ISpotifyTokenRequest } from "interfaces/ISpotifyTokenRequest.interface";
import { ISpotifyTokenResponse } from "interfaces/ISpotifyTokenResponse.interface";

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
            client_id: "7ff4c2742b1d4e91b297c2ef6bf8d041",
            redirect_uri: "http://localhost:3000",
            response_type: "token",
            scopes: [
              "streaming",
              "user-read-birthdate",
              "user-read-email",
              "user-read-private"
            ]
          };
          window.location.href = generateSpotifyAuthUrl(requestContents);
        } else {
          // We know it is this type at this point so we cast to it
          const spotifyResponse = (params as unknown) as ISpotifyTokenResponse;

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
  }, [token]);

  return <div>{token}</div>;
};

export default App;
