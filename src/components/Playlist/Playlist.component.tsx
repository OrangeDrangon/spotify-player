import React, { useState, useEffect } from "react";
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
    <div>
      {data ? (
        <div
          style={{
            backgroundImage: `url(${data.images[0].url})`,
            height: `${data.images[0].height}px`,
            width: `${data.images[0].width}px`
          }}
        />
      ) : (
        "Not found"
      )}
    </div>
  );
};

export default Playlist;
