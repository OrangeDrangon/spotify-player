import { ISpotifyExternalId } from "./ISpotifyExternalId.interface";
import { ISpotifyExternalUrls } from "./ISpotifyExternalUrls.interface";
import { ISpotifyTrackLink } from "./ISpotifyTrackLink.interface";
import { ISpotifyAlbumSimple } from "./ISpotifyAlbum.interface";
import { ISpotifyArtistSimple } from "./ISpotifyArtist.interface";

export interface ISpotifyTrack {
  album: ISpotifyAlbumSimple;
  artists: ISpotifyArtistSimple;
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ISpotifyExternalId;
  external_urls: ISpotifyExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: ISpotifyTrackLink;
  restrictions: any;
  name: string;
  popularity: number;
  preview_url: string
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
}
