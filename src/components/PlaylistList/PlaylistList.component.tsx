import React, { useState, useEffect } from "react";

import classes from "./PlaylistList.module.scss";
import Playlist from "components/Playlist/Playlist.component";

import { ISpotifyError } from "interfaces/ISpotifyError.interface";
import { ISpotifyPlaylistSimple } from "interfaces/ISpotifyPlaylist.interface";
import { ISpotifyPaging } from "interfaces/ISpotifyPaging.interface";

interface IProps {
  getSimple: () => Promise<
    ISpotifyPaging<ISpotifyPlaylistSimple[]> | ISpotifyError | null
  >;
}

const PlaylistList: React.FC<IProps> = ({ getSimple }: IProps) => {
  const [playlists, setPlaylists] = useState<ISpotifyPaging<
    ISpotifyPlaylistSimple[]
  > | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const unfiltered = await getSimple();
      if (unfiltered) {
        if (!(unfiltered as ISpotifyError).status) {
          const featuredNew = unfiltered as ISpotifyPaging<
            ISpotifyPlaylistSimple[]
          >;
          if (!cancelled) {
            setPlaylists(featuredNew);
          }
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [getSimple]);
  return (
    <div className={classes.container}>
      {(playlists ? playlists.items : []).map(playlist => (
        <Playlist key={playlist.id} href={playlist.href} />
      ))}
    </div>
  );
};

export default PlaylistList;
