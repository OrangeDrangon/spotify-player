import React from "react";

import classes from "./Track.module.scss";

import { ISpotifyTrack } from "interfaces/ISpotiftyTrack.interface";


interface IProps {
  track: ISpotifyTrack;
}

const Track: React.FC<IProps> = ({ track }: IProps) => {
  return (
    <tr className={classes.row}>
      <td className={classes.elm}>{track.name}</td>
      <td>{track.artists[0].name}</td>
    </tr>
  );
};

export default Track;
