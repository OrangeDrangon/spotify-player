import React, { useState, useEffect, useCallback } from "react";

import classes from "./Playlist.module.scss";

import Card from "components/Card/Card.component";
import Modal from "components/Modal/Modal.component";

import { ISpotifyPlaylistFull } from "interfaces/ISpotifyPlaylist.interface";
import { ISpotifyError } from "interfaces/ISpotifyError.interface";

interface IProps {
  href: string;
  load: (url: string) => Promise<ISpotifyPlaylistFull | ISpotifyError | null>;
}

const Playlist: React.FC<IProps> = ({ href, load }: IProps) => {
  const [data, setData] = useState<ISpotifyPlaylistFull | null>(null);
  const [open, setOpen] = useState(false);

  const getData = useCallback(async () => {
    return await load(href);
  }, [href, load]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const unfiltered = await getData();
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
  }, [getData]);

  return (
    <React.Fragment>
      <div
        className={classes.cover}
        onClick={() => setOpen(true)}
        style={
          data
            ? {
                backgroundImage: `url(${data.images[0].url})`
              }
            : {}
        }
      />
      <Modal open={open} onBackdropClick={() => setOpen(false)}>
        <Card>
          {data ? data.name : "Loading!"}
        </Card>
      </Modal>
    </React.Fragment>
  );
};

export default Playlist;