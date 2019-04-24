import React, { useState, useEffect } from "react";

import classes from "./Featured.module.scss";
import Playlist from "components/Playlist/Playlist.component";

import { ISpotifyFeatured } from "interfaces/ISpotifyFeatured.interface";
import { ISpotifyError } from "interfaces/ISpotifyError.interface";
import { ISpotifyPlaylistFull } from "interfaces/ISpotifyPlaylist.interface";

interface IProps {
  getFeatured: () => Promise<ISpotifyFeatured | ISpotifyError | null>;
  getPlaylist: (
    url: string
  ) => Promise<ISpotifyPlaylistFull | ISpotifyError | null>;
}

const Featured: React.FC<IProps> = ({ getFeatured, getPlaylist }: IProps) => {
  const [featured, setFeatured] = useState<ISpotifyFeatured | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const unfiltered = await getFeatured();
      if (unfiltered) {
        if (!(unfiltered as ISpotifyError).status) {
          const featuredNew = unfiltered as ISpotifyFeatured;
          if (!cancelled) {
            setFeatured(featuredNew);
          }
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [getFeatured]);
  return (
    <div className={classes.container}>
      {(featured ? featured.playlists.items : []).map(playlist => (
        <Playlist key={playlist.id} load={() => getPlaylist(playlist.href)} />
      ))}
    </div>
  );
};

export default Featured;
