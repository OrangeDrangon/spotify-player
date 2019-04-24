import React, { useState, useEffect, useCallback } from "react";

import qs from "query-string";

import Featured from "components/Featured/Featured.component";

import { ISpotifyTokenRequest } from "interfaces/ISpotifyTokenRequest.interface";
import { ISpotifyTokenResponse } from "interfaces/ISpotifyTokenResponse.interface";
import { ISpotifyFeatured } from "interfaces/ISpotifyFeatured.interface";
import { ISpotifyError } from "interfaces/ISpotifyError.interface";

import { generateSpotifyAuthUrl } from "utils/generateSpotifyAuthUrl.util";

// import classes from "./App.module.scss";

type Token = string | null;

const App: React.FC = () => {
  const [token, setToken] = useState<Token>(null);

  useEffect(() => {
    let cancelled = false;
    let timeoutId: NodeJS.Timeout | null = null;
    if (!token) {
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

        // If the effect has not been cancelled we set the state
        if (!cancelled) {
          setToken(spotifyResponse.access_token);
          timeoutId = setTimeout(
            () => setToken(null),
            Number(spotifyResponse.expires_in) * 1000
          );
        }
        // Removes tokens from the url
        window.location.hash = "";
      }
    }
    return () => {
      cancelled = true;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [token]);

  const getFeatured = useCallback(async (): Promise<
    ISpotifyFeatured | ISpotifyError | null
  > => {
    if (token) {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/browse/featured-playlists",
          {
            method: "GET",
            headers: [["Authorization", `Bearer ${token}`]]
          }
        );
        const json = await response.json();
        return response.status === 200
          ? (json as ISpotifyFeatured)
          : (json as ISpotifyError);
      } catch (error) {
        console.log(error);
      }
    }
    return null;
  }, [token]);

  return (
    <div>
      <Featured getFeatured={getFeatured} />
    </div>
  );
};

export default App;
