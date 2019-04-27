import React from "react";

import classes from "./Track.module.scss";

import { ISpotifyTrack } from "interfaces/ISpotiftyTrack.interface";

interface IProps {
  track: ISpotifyTrack;
}

const Track: React.FC<IProps> = ({ track }: IProps) => {
  return (
    <div className={classes.row}>
      <div className={classes.elm}>{track.name}</div>
      <div className={classes.elm}>{track.artists[0].name}</div>
    </div>
  );
};

export default Track;
