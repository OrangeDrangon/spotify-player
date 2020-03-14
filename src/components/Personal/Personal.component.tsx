import React, { useCallback } from "react";
import { connect } from "react-redux";

import { getUrl } from "utils/getUrl.util";

import PlaylistList from "components/PlaylistList/PlaylistList.component";

import { IState } from "redux/reducers/root.reducer";

import { ISpotifyPaging } from "interfaces/ISpotifyPaging.interface";
import { ISpotifyPlaylistSimple } from "interfaces/ISpotifyPlaylist.interface";

interface IProps {
  token: string | null;
}

const PersonalConnected: React.FC<IProps> = ({ token }: IProps) => {
  const getPlaylistList = useCallback(async () => {
    return await getUrl<ISpotifyPaging<ISpotifyPlaylistSimple[]>>(
      "https://api.spotify.com/v1/me/playlists",
      token
    );
  }, [token]);
  return <PlaylistList getSimple={getPlaylistList} />;
};

const mapStateToProps = ({ token }: IState) => {
  return { token };
};

const Personal = connect(mapStateToProps)(PersonalConnected);

export default Personal;
