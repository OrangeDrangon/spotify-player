import React, { useState, useEffect, useCallback } from "react";

import qs from "query-string";

import Playlists from "components/Playlists/Playlists.component";

import { ISpotifyTokenRequest } from "interfaces/ISpotifyTokenRequest.interface";
import { ISpotifyTokenResponse } from "interfaces/ISpotifyTokenResponse.interface";
import { ISpotifyFeatured } from "interfaces/ISpotifyFeatured.interface";
import {
  ISpotifyPlaylistFull,
  ISpotifyPlaylistSimple
} from "interfaces/ISpotifyPlaylist.interface";

import { generateSpotifyAuthUrl } from "utils/generateSpotifyAuthUrl.util";
import { getUrl } from "utils/getUrl.util";
import { ISpotifyPaging } from "interfaces/ISpotifyPaging.interface";
import { ISpotifyError } from "interfaces/ISpotifyError.interface";

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
            "user-read-private",
            "playlist-read-private"
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

  const getFeatured = useCallback(async () => {
    const response = await getUrl<ISpotifyFeatured>(
      "https://api.spotify.com/v1/browse/featured-playlists",
      token
    );
    return response
      ? !(response as ISpotifyError).status
        ? (response as ISpotifyFeatured).playlists
        : (response as ISpotifyError)
      : null;
  }, [token]);

  const getPlaylist = useCallback(
    async (url: string) => {
      return await getUrl<ISpotifyPlaylistFull>(url, token);
    },
    [token]
  );

  const getMyPlaylists = useCallback(async () => {
    return await getUrl<ISpotifyPaging<ISpotifyPlaylistSimple[]>>(
      "https://api.spotify.com/v1/me/playlists",
      token
    );
  }, [token]);

  return (
    <div>
      <Playlists key="a" getSimple={getFeatured} getFull={getPlaylist} />
      <Playlists key="b" getSimple={getMyPlaylists} getFull={getPlaylist} />
    </div>
  );
};

export default App;
