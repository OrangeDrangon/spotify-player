import { ISpotifyExternalUrls } from "./ISpotifyExternalUrls.interface";
import { ISpotifyFollowers } from "./ISpotifyFollowers.interface";
import { ISpotifyImage } from "./ISpotifyImage.interface";

export interface ISpotifyUserPublic {
  display_name: string;
  external_urls: ISpotifyExternalUrls;
  followers: ISpotifyFollowers;
  href: string;
  id: string;
  images: ISpotifyImage[];
  type: "user";
  uri: "string";
}
