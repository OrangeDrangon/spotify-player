import React, { useCallback, useState } from "react";
import { connect } from "react-redux";

import classes from "./Tracks.module.scss";

import Track from "components/Track/Track.component";

import { ISpotifyPaging } from "interfaces/ISpotifyPaging.interface";
import { ISpotifyPlaylistTrack } from "interfaces/ISpotifyPlaylistTrack.inerface";

import { IState } from "redux/reducers/root.reducer";
import { getUrl } from "utils/getUrl.util";
import { ISpotifyError } from "interfaces/ISpotifyError.interface";

interface IProps {
  tracks: ISpotifyPaging<ISpotifyPlaylistTrack[]>;
  token: string | null;
}

const ConnectedTracks: React.FC<IProps> = ({
  token,
  tracks: initalTracks
}: IProps) => {
  const [tracks, setTracks] = useState(initalTracks);
  const [cache, setCache] = useState({
    [tracks.href]: tracks
  });

  const handlePaging = useCallback(
    async (key: "next" | "previous") => {
      const link = tracks[key];
      if (link) {
        const cached = cache[link];
        if (cached) {
          setTracks(cached);
          return;
        }
        let response = await getUrl<ISpotifyPaging<ISpotifyPlaylistTrack[]>>(
          link,
          token
        );
        if (!(response as ISpotifyError).status) {
          response = response as ISpotifyPaging<ISpotifyPlaylistTrack[]>;
          setCache({ ...cache, [response.href]: response });
          setTracks(response);
        }
      }
    },
    [tracks, token, cache]
  );

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
      {tracks.next || tracks.previous ? (
        <div className={classes.buttons}>
          {tracks.previous ? (
            <button
              className="styled-button"
              onClick={() => handlePaging("previous")}
            >
              Previous
            </button>
          ) : (
            <button className="styled-button" disabled>
              Previous
            </button>
          )}
          {tracks.next ? (
            <button
              className="styled-button"
              onClick={() => handlePaging("next")}
            >
              Next
            </button>
          ) : (
            <button className="styled-button" disabled>
              Next
            </button>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = ({ token }: IState) => {
  return { token };
};

const Tracks = connect(mapStateToProps)(ConnectedTracks);

export default Tracks;
