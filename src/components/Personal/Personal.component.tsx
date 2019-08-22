import React, { useCallback } from "react";

import { getUrl } from "utils/getUrl.util";

import PlaylistList from "components/PlaylistList/PlaylistList.component";

import { ISpotifyPaging } from "interfaces/ISpotifyPaging.interface";
import { ISpotifyPlaylistSimple } from "interfaces/ISpotifyPlaylist.interface";
import { useSelector } from "react-redux";

interface IProps {
  token: string | null;
}

const Personal: React.FC<IProps> = () => {
  const token = useSelector((state: any) => state[0].token);
  const getPlaylistList = useCallback(async () => {
    return await getUrl<ISpotifyPaging<ISpotifyPlaylistSimple[]>>(
      "https://api.spotify.com/v1/me/playlists",
      token
    );
  }, [token]);
  return <PlaylistList getSimple={getPlaylistList} />;
};

export default Personal;
