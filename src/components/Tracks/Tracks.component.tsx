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
    <div className={classes.table}>
      <div className={classes.header}>
        <div className={classes.title}>Song</div>
        <div className={classes.title}>Artist</div>
      </div>
      <div className={classes.content}>
        {tracks.items.map(track =>
          track.track ? (
            <Track key={track.track.id + Math.random()} track={track.track} />
          ) : (
            <div key={Math.random()}>Loading...</div>
          )
        )}
      </div>
    </div>
  );
};

export default Tracks;
