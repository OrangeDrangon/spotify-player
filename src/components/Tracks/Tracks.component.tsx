import React from "react";

import classes from "./Tracks.module.scss";

import Track from "components/Track/Track.component";

import { ISpotifyPaging } from "interfaces/ISpotifyPaging.interface";
import { ISpotifyPlaylistTrack } from "interfaces/ISpotifyPlaylistTrack.inerface";

interface IProps {
  tracks: ISpotifyPaging<ISpotifyPlaylistTrack[]>;
}

const Tracks: React.FC<IProps> = ({ tracks }: IProps) => {
  return (
    <table className={classes.table}>
      <thead className={classes.thead}>
        <tr className={classes.tr}>
          <th>Song</th>
          <th>Artist</th>
        </tr>
      </thead>
      <tbody className={classes.tbody}>
        {tracks.items.map(track => (
          <Track key={track.track.id + Math.random()} track={track.track} />
        ))}
      </tbody>
    </table>
  );
};

export default Tracks;
