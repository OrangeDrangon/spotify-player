import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Slider, { createSliderWithTooltip } from "rc-slider";

import classes from "./Player.module.scss";

import next from "assets/icons/skip_next.svg";
import previous from "assets/icons/skip_previous.svg";
import shuffleActive from "assets/icons/shuffle_active.svg";
import shuffleInactive from "assets/icons/shuffle_inactive.svg";
import play from "assets/icons/play.svg";
import pause from "assets/icons/pause.svg";
import repeatInactive from "assets/icons/repeat_inactive.svg";
import repeatOne from "assets/icons/repeat_one.svg";
import repeatActive from "assets/icons/repeat_active.svg";

import { IState } from "redux/reducers/root.reducer";
import { setDeviceId } from "redux/actions/setDeviceId.action";

interface IProps {
  token: string | null;
  device_id: string | null;
  setDeviceId: (
    device_id: string | null
  ) => {
    type: string;
    payload: string | null;
  };
}

const SilderWithTooltip = createSliderWithTooltip(Slider);

const ConnectedPlayer: React.FC<IProps> = ({
  token,
  device_id,
  setDeviceId
}: IProps) => {
  const [paused, setPaused] = useState(true);
  const [player, setPlayer] = useState<ISpotifyPlayer | null>(null);
  const [currentTrack, setCurrentTrack] = useState<any | null>(null);
  const [shuffled, setShuffled] = useState(false);

  const toggleShuffle = useCallback(async () => {
    await fetch(
      `https://api.spotify.com/v1/me/player/shuffle?state=${!shuffled}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    );
  }, [token, shuffled]);

  const cycleRepeat = useCallback(async () => {
    await fetch(
      `https://api.spotify.com/v1/me/player/shuffle?state=${!shuffled}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    );
  }, [token, shuffled]);

  useEffect(() => {
    if (window.Spotify && token && !device_id && !player) {
      const playerNew = new window.Spotify.Player({
        name: "Drangon's Web Player",
        volume: 1,
        getOAuthToken: callback => callback(token)
      });

      playerNew.addListener("ready", ({ device_id }) => {
        setDeviceId(device_id);
      });

      playerNew.addListener("player_state_changed", data => {
        setPaused(data.paused);
        setShuffled(data.shuffle);
        if (data.track_window && data.track_window.current_track) {
          setCurrentTrack(data.track_window.current_track);
        }
        console.log(data);
      });

      playerNew.connect();

      setPlayer(playerNew);
    }
  }, [device_id, token, setDeviceId, player]);

  return (
    <div className={classes.container}>
      {player && device_id ? (
        <div className={classes.controls}>
          {currentTrack ? (
            <div className={classes.information}>
              <img src={currentTrack.album.images[1].url} alt="" />
              <div className={classes.words}>
                <div className={classes.trackName}>{currentTrack.name}</div>
                <div className={classes.artist}>
                  {currentTrack.artists[0].name}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className={classes.nowPlaying}>
            <div className={classes.buttons}>
              <button
                className={`styled-button ${classes.iconButton}`}
                onClick={toggleShuffle}
              >
                <img src={shuffled ? shuffleActive : shuffleInactive} alt="" />
              </button>
              <button
                className={`styled-button ${classes.iconButton}`}
                onClick={() => player.previousTrack()}
              >
                <img src={previous} alt="" />
              </button>
              <button
                className={`styled-button ${classes.iconButton}`}
                onClick={() => {
                  player.togglePlay();
                }}
              >
                <img src={paused ? play : pause} alt="" />
              </button>
              <button
                className={`styled-button ${classes.iconButton}`}
                onClick={() => player.nextTrack()}
              >
                <img src={next} alt="" />
              </button>{" "}
              <button className={`styled-button ${classes.iconButton}`}>
                <img src={repeatOne} alt="" />
              </button>
            </div>
            <SilderWithTooltip />
          </div>
          <SilderWithTooltip
            defaultValue={100}
            min={0}
            max={100}
            step={1}
            onChange={(v: number) => player.setVolume(v / 100)}
            tipFormatter={(v: number) => `${v}%`}
            style={{ width: 100 }}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

const mapStateToProps = ({ token, device_id }: IState) => {
  return { token, device_id };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setDeviceId: (device_id: string | null) => dispatch(setDeviceId(device_id))
  };
};
const Player = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedPlayer);

export default Player;
