import React, { useCallback } from "react";
import { connect } from "react-redux";

import { getUrl } from "utils/getUrl.util";

import PlaylistList from "components/PlaylistList/PlaylistList.component";

import { IState } from "redux/reducers/root.reducer";

import { ISpotifyFeatured } from "interfaces/ISpotifyFeatured.interface";
import { ISpotifyError } from "interfaces/ISpotifyError.interface";

interface IProps {
  token: string | null;
}

const FeaturedConnected: React.FC<IProps> = ({ token }: IProps) => {
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

const mapStateToProps = ({ token }: IState) => {
  return { token };
};

const Featured = connect(mapStateToProps)(FeaturedConnected);

export default Featured;
