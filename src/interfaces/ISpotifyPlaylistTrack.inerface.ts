import { ISpotifyUserPublic } from "./ISpotifyUser.interface";
import { ISpotifyTrack } from "./ISpotiftyTrack.interface";

export interface ISpotifyPlaylistTrack {
  added_at: string;
  added_by: ISpotifyUserPublic;
  is_local: boolean;
  track: ISpotifyTrack;
}
