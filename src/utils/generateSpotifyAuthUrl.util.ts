import { ISpotifyTokenRequest } from "interfaces/ISpotifyTokenRequest.interface";

export const generateSpotifyAuthUrl = ({
  client_id,
  redirect_uri,
  response_type,
  scopes,
  show_dialog,
  state
}: ISpotifyTokenRequest): string => {
  // https://developer.spotify.com/documentation/general/guides/authorization-guide/
  // Implicit flow
  return `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(
    redirect_uri
  )}&scope=${
    scopes ? scopes.join(" ") : ""
  }&response_type=${response_type}&state=${state ? state : ""}&show_dialog=${
    show_dialog ? show_dialog : "false"
  }`;
};
