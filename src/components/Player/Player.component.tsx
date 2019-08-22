import React, { useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
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

import { getNextRepeatState } from "utils/getNextRepeatState.util";
import { setDeviceId } from "redux/features/authFeature";

const SilderWithTooltip = createSliderWithTooltip(Slider);

const Player: React.FC = () => {
  const token = useSelector((state: any) => state[0].token);
  const deviceId = useSelector((state: any) => state[0].deviceId);
  const dispatch = useDispatch();
  const dispatchDeviceId = useCallback(
    (deviceId: string) => dispatch(setDeviceId({ deviceId })),
    [dispatch]
  );
  const [paused, setPaused] = useState(true);
  const [player, setPlayer] = useState<ISpotifyPlayer | null>(null);
  const [currentTrack, setCurrentTrack] = useState<any | null>(null);
  const [shuffled, setShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState<0 | 1 | 2>(0);
  const [progress, setProgress] = useState(0);

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
    setShuffled(!shuffled);
  }, [token, shuffled]);

  const cycleRepeat = useCallback(async () => {
    const [str, num] = getNextRepeatState(repeatMode);
    await fetch(`https://api.spotify.com/v1/me/player/repeat?state=${str}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    setRepeatMode(num);
  }, [token, repeatMode]);

  const slider = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (window.Spotify && token && !deviceId && !player) {
      const playerNew = new window.Spotify.Player({
        name: "Kyle's Spotify Player",
        volume: 1,
        getOAuthToken: callback => callback(token)
      });

      playerNew.addListener("ready", ({ device_id }) => {
        dispatchDeviceId(device_id);
      });

      playerNew.addListener("player_state_changed", data => {
        if (data) {
          setPaused(data.paused);
          setShuffled(data.shuffle);
          setRepeatMode(data.repeat_mode);
          if (data.track_window && data.track_window.current_track) {
            setCurrentTrack(data.track_window.current_track);
          }
          setProgress(data.position);
        }
      });

      playerNew.connect();

      setPlayer(playerNew);
    }
  }, [deviceId, token, dispatchDeviceId, player]);

  useEffect(() => {
    if (slider.current) {
      slider.current.value = (progress / 1000).toString();
    }
  }, [progress]);

  useEffect(() => {
    if (!paused && currentTrack) {
      const interval = setInterval(
        () => setProgress(progress => progress + 1000),
        1000
      );
      return () => {
        clearInterval(interval);
      };
    }
  }, [paused, currentTrack]);

  return (
    <div className={classes.container}>
      {player && deviceId ? (
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
              <button
                className={`styled-button ${classes.iconButton}`}
                onClick={() => cycleRepeat()}
              >
                <img
                  src={
                    repeatMode === 0
                      ? repeatInactive
                      : repeatMode === 1
                      ? repeatActive
                      : repeatOne
                  }
                  alt=""
                />
              </button>
            </div>
            {currentTrack ? (
              <div className={classes.slider}>
                <input
                  type="range"
                  min={0}
                  max={Math.floor(currentTrack.duration_ms / 1000)}
                  step={1}
                  ref={slider}
                  onChange={({ currentTarget }) =>
                    player.seek(Number(currentTarget.value) * 1000)
                  }
                />
                <div className={classes.time}>
                  {new Date(progress).getMinutes()}:
                  {new Date(progress).getSeconds() < 10
                    ? `0${new Date(progress).getSeconds()}`
                    : new Date(progress).getSeconds()}
                  /{new Date(currentTrack.duration_ms).getMinutes()}:
                  {new Date(currentTrack.duration_ms).getSeconds() < 10
                    ? `0${new Date(currentTrack.duration_ms).getSeconds()}`
                    : new Date(currentTrack.duration_ms).getSeconds()}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <SilderWithTooltip
            className={classes.volume}
            defaultValue={100}
            min={0}
            max={100}
            step={1}
            onChange={(v: number) => player.setVolume(v / 100)}
            tipFormatter={(v: number) => `${v}%`}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Player;
