import { ISpotifyExternalUrls } from "./ISpotifyExternalUrls.interface";
import { ISpotifyImage } from "./ISpotifyImage.interface";
import { ISpotifyUserPublic } from "./ISpotifyUser.interface";
import { ISpotifyPaging } from "./ISpotifyPaging.interface";
import { ISpotifyPlaylistTrack } from "./ISpotifyPlaylistTrack.inerface";
import { ISpotifyFollowers } from "./ISpotifyFollowers.interface";

export interface ISpotifyPlaylistSimple {
  collaborative: boolean,
  external_urls: ISpotifyExternalUrls;
  href: string;
  id: string;
  images : ISpotifyImage[];
  name: string;
  owner : ISpotifyUserPublic;
  public: boolean | null;
  snapshot_id: string,
  tracks: {
    href: string;
    total: number;
  }
  type: "playlist";
  uri: string;
}


export interface ISpotifyPlaylistFull {
  collaborative: boolean,
  external_urls: ISpotifyExternalUrls;
  followers: ISpotifyFollowers;
  href: string;
  id: string;
  images : ISpotifyImage[];
  name: string;
  owner : ISpotifyUserPublic;
  public: boolean | null;
  snapshot_id: string,
  tracks: ISpotifyPaging<ISpotifyPlaylistTrack[]>
  type: "playlist";
  uri: string;
}
