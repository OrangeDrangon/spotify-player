import React, { useCallback } from "react";
import { useSelector } from "react-redux";

import classes from "./Track.module.scss";

import { ISpotifyTrack } from "interfaces/ISpotiftyTrack.interface";


interface IProps {
  track: ISpotifyTrack;
  playlistUri: string;
}

interface ISpotifyPlayBody {
  context_uri?: string;
  uris?: string[];
  offset: { position: number } | { uri: string };
  position_ms?: string;
}

const Track: React.FC<IProps> = ({
  track,
  playlistUri,
}: IProps) => {
  const token = useSelector((state: any) => state[0].token);
  const deviceId = useSelector((state: any) => state[0].deviceId);
  const play = useCallback(async () => {
    if (deviceId && token) {
      const body: ISpotifyPlayBody = {
        context_uri: playlistUri,
        offset: { uri: track.uri }
      };
      await fetch(
        `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
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
  }, [token, track, playlistUri, deviceId]);
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

export default Track;
