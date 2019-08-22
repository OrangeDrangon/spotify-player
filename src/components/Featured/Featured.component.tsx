import React, { useCallback } from "react";

import { getUrl } from "utils/getUrl.util";

import PlaylistList from "components/PlaylistList/PlaylistList.component";

import { ISpotifyFeatured } from "interfaces/ISpotifyFeatured.interface";
import { ISpotifyError } from "interfaces/ISpotifyError.interface";
import { useSelector } from "react-redux";


const Featured: React.FC = () => {
  const token = useSelector((state: any) => state[0].token);
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

  return <PlaylistList getSimple={getFeatured} />;
};

export default Featured;
