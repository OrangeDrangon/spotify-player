/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect, useCallback } from "react";

import classes from "./Playlist.module.scss";

import close from "assets/icons/close.svg";

import Card from "components/Card/Card.component";
import Modal from "components/Modal/Modal.component";
import Tracks from "components/Tracks/Tracks.component";

import { ISpotifyPlaylistFull } from "interfaces/ISpotifyPlaylist.interface";
import { ISpotifyError } from "interfaces/ISpotifyError.interface";

import { htmlDecode } from "utils/htmlDecode.util";
import { getUrl } from "utils/getUrl.util";
import { useSelector } from "react-redux";

interface IProps {
  href: string;
}

const Playlist: React.FC<IProps> = ({ href }: IProps) => {
  const token = useSelector((state: any) => state[0].token);
  const [data, setData] = useState<ISpotifyPlaylistFull | null>(null);
  const [open, setOpen] = useState(false);

  const getData = useCallback(async () => {
    return await getUrl<ISpotifyPlaylistFull>(href, token);
  }, [href, token]);

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
      {open ? (
        <Modal open={open} onBackdropClick={() => setOpen(false)}>
          <Card containerClass={classes.card}>
            <img
              src={close}
              alt=""
              className={classes.close}
              onClick={() => setOpen(false)}
            />
            {data ? (
              <div className={classes.wrapper}>
                <header className={classes.header}>
                  <h1 className={classes.title}>{data.name}</h1>
                  <div className={classes.createdBy}>
                    Created by{" "}
                    <span className={classes.author}>
                      {data.owner.display_name}
                    </span>
                  </div>
                  <div className={classes.description}>
                    {htmlDecode(data.description ? data.description : "")}
                  </div>
                </header>
                <div className={classes.lineBreak} />
                <section className={classes.section}>
                  <Tracks tracks={data.tracks} playlistUri={data.uri} />
                </section>
              </div>
            ) : (
              "Loading..."
            )}
          </Card>
        </Modal>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default Playlist;
