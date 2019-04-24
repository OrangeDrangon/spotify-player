import { ISpotifyExternalUrls } from "./ISpotifyExternalUrls.interface";

export interface ISpotifyTrackLink {
  external_urls: ISpotifyExternalUrls;
  href: string;
  id: string;
  type: "track";
  uri: string;
}
