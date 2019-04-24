import { ISpotifyExternalUrls } from "./ISpotifyExternalUrls.interface";
import { ISpotifyImage } from "./ISpotifyImage.interface";
import { ISpotifyArtistSimple } from "./ISpotifyArtist.interface";

export interface ISpotifyAlbumSimple {
  album_group?: string;
  album_type: string;
  artists: ISpotifyArtistSimple[];
  available_markets: string[];
  external_urls: ISpotifyExternalUrls;
  href: string;
  id: string;
  images: ISpotifyImage[];
  name: string;
  release_date: string;
  release_date_percision: string;
  restrictions: any;
  type: "album";
  uri: string;
}
