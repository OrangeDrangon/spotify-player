/// <reference types="react-scripts" />

interface ISpotifyPlayerParams {
  name: string;
  getOAuthToken: (callback: (token: string) => void) => void;
  volume: number;
}

interface ISpotifyWebPlaybackTrack {
  uri: string;
  id: string | null;
  type: "track" | "episode" | "ad";
  media_type: "audio" | "video";
  name: string;
  is_playable: boolean;
  album: {
    uri: string;
    name: string;
    images: [{ url: string }];
  };
  artists: [{ uri: string; name: string }];
}

interface ISpotifyWebPlaybackState {
  context: {
    uri: string;
    metadata: any | null;
  };
  disallows: {
    pausing: boolean;
    peeking_next: boolean;
    peeking_prev: boolean;
    resuming: boolean;
    seeking: boolean;
    skipping_next: boolean;
    skipping_prev: boolean;
  };
  paused: boolean;
  position: number;
  repeat_mode: 0 | 1 | 2;
  shuffle: boolean;
  track_window: {
    current_track: WebPlaybackTrack;
    previous_tracks: WebPlaybackTrack[];
    next_tracks: WebPlaybackTrack[];
  };
}

interface ISpotifyWebPlaybackPlayer {
  device_id: string;
}

interface ISpotifyWebPlaybackError {
  message: string;
}

interface ISpotifyPlayerOptions extends ISpotifyPlayerParams {
  id: string;
}

interface ISpotifyPlayer {
  new(data: ISpotifyPlayerParams): ISpotifyPlayer;

  _options: ISpotifyPlayerOptions;

  connect(): Promise<boolean>;

  disconnect(): void;

  addListener(
    name: "ready" | "not_ready",
    callback: (data: ISpotifyWebPlaybackPlayer) => void
  ): boolean;

  addListener(
    name: "player_state_changed",
    callback: (data: ISpotifyWebPlaybackState) => void
  ): boolean;

  on(
    name:
      | "initialization_error"
      | "authentication_error"
      | "account_error"
      | "playback_error",
    data: ISpotifyWebPlaybackError
  ): void;

  removeListener(name, callback: () => void | Promise<void>);

  getCurrentState(): Promise<ISpotifyWebPlaybackState>;

  setName(name: string): Promise<void>;

  getVolume(): Promise<number>;

  setVolume(volume: number): Promise<void>;

  pause(): Promise<void>;

  resume(): Promise<void>;

  togglePlay(): Promise<void>;

  seek(position_ms: number): Promise<void>;

  previousTrack(): Promise<void>;

  nextTrack(): Promise<void>;
}

interface ISpotify {
  Player: ISpotifyPlayer
}

interface Window {
  Spotify: ISpotify | undefined;
}
