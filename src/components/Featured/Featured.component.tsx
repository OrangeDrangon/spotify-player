import React, { useState, useEffect } from "react";

import { ISpotifyFeatured } from "interfaces/ISpotifyFeatured.interface";
import { ISpotifyError } from "interfaces/ISpotifyError.interface";
import { ISpotifyPlaylistFull } from "interfaces/ISpotifyPlaylist.interface";
import Playlist from "components/Playlist/Playlist.component";

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
    <div>
      {featured
        ? featured.playlists.items.map(playlist => (
            <Playlist load={() => getPlaylist(playlist.href)} />
          ))
        : "Not found"}
    </div>
  );
};

export default Featured;
