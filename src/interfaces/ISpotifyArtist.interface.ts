import { ISpotifyExternalUrls } from "./ISpotifyExternalUrls.interface";

export interface ISpotifyArtistSimple {
  external_urls: ISpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
}
