import React, { useCallback } from "react";
import { connect } from "react-redux";

import classes from "./Track.module.scss";

import { ISpotifyTrack } from "interfaces/ISpotiftyTrack.interface";

import { IState } from "redux/reducers/root.reducer";

interface IProps {
  track: ISpotifyTrack;
  token: string | null;
  playlistUri: string;
  device_id: string | null;
}

interface ISpotifyPlayBody {
  context_uri?: string;
  uris?: string[];
  offset: { position: number } | { uri: string };
  position_ms?: string;
}

const ConnectedTrack: React.FC<IProps> = ({
  track,
  token,
  playlistUri,
  device_id
}: IProps) => {
  const play = useCallback(async () => {
    if (device_id && token) {
      const body: ISpotifyPlayBody = {
        context_uri: playlistUri,
        offset: { uri: track.uri }
      };
      await fetch(
        `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
        {
          method: "PUT",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );
    }
  }, [token, track, playlistUri, device_id]);
  return (
    <div className={classes.row}>
      <div className={classes.elm}>
        <div className={classes.artist} onClick={play}>
          {track.name}
        </div>
      </div>
      <div className={classes.elm}>{track.artists[0].name}</div>
    </div>
  );
};

const mapStateToProps = ({ token, device_id }: IState) => {
  return { token, device_id };
};

const Track = connect(mapStateToProps)(ConnectedTrack);

export default Track;
