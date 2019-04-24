import React, { useState, useEffect } from "react";

import classes from "./Playlist.module.scss";

import { ISpotifyPlaylistFull } from "interfaces/ISpotifyPlaylist.interface";
import { ISpotifyError } from "interfaces/ISpotifyError.interface";

interface IProps {
  load: () => Promise<ISpotifyPlaylistFull | ISpotifyError | null>;
}

const Playlist: React.FC<IProps> = ({ load }: IProps) => {
  const [data, setData] = useState<ISpotifyPlaylistFull | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const unfiltered = await load();
      if (unfiltered) {
        if (!(unfiltered as ISpotifyError).status) {
          const dataNew = unfiltered as ISpotifyPlaylistFull;
          if (!cancelled) {
            setData(dataNew);
          }
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [load]);

  return (
      <div
        className={classes.cover}
        style={
          data
            ? {
                backgroundImage: `url(${data.images[0].url})`
              }
            : { }
        }
        onClick={() => console.log(data)}
      />
  );
};

export default Playlist;
