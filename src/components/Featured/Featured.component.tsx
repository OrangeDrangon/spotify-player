import React, { useState, useEffect } from "react";

import { ISpotifyFeatured } from "interfaces/ISpotifyFeatured.interface";
import { ISpotifyError } from "interfaces/ISpotifyError.interface";

interface IProps {
  getFeatured: () => Promise<ISpotifyFeatured | ISpotifyError | null>;
}

const Featured: React.FC<IProps> = ({ getFeatured }: IProps) => {
  const [featured, setFeatured] = useState<ISpotifyFeatured | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const unfiltered = await getFeatured();
      console.log(unfiltered);
      if (unfiltered) {
        if (!unfiltered.message) {
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
        ? featured.playlists.items.map(playlist => playlist.name)
        : "Not found"}
    </div>
  );
};

export default Featured;
