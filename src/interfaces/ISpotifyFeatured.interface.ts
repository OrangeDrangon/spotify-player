import { ISpotifyPaging } from "./ISpotifyPaging.interface";
import { ISpotifyPlaylistSimple } from "./ISpotifyPlaylist.interface";

export interface ISpotifyFeatured {
  message: string;
  playlists: ISpotifyPaging<ISpotifyPlaylistSimple>;
}
