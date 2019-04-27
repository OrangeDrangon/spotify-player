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

  const getNext = useCallback(async () => {
    if (tracks.next) {
      if (cache[tracks.next]) {
        setTracks(cache[tracks.next]);
        return;
      }
      let response = await getUrl<ISpotifyPaging<ISpotifyPlaylistTrack[]>>(
        tracks.next,
        token
      );
      if (!(response as ISpotifyError).status) {
        response = response as ISpotifyPaging<ISpotifyPlaylistTrack[]>;
        setCache({ ...cache, [response.href]: response });
        setTracks(response);
      }
    }
  }, [tracks, token, cache]);

  const getPrevious = useCallback(async () => {
    if (tracks.previous) {
      if (cache[tracks.previous]) {
        setTracks(cache[tracks.previous]);
        return;
      }
      let response = await getUrl<ISpotifyPaging<ISpotifyPlaylistTrack[]>>(
        tracks.previous,
        token
      );
      if (!(response as ISpotifyError).status) {
        response = response as ISpotifyPaging<ISpotifyPlaylistTrack[]>;
        setCache({ ...cache, [response.href]: response });
        setTracks(response);
      }
    }
  }, [tracks, token, cache]);

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
            <button className="styled-button" onClick={getPrevious}>
              Previous
            </button>
          ) : (
            <button className="styled-button" disabled>
              Previous
            </button>
          )}
          {tracks.next ? (
            <button className="styled-button" onClick={getNext}>
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
