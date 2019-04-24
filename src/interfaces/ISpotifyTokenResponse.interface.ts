export interface ISpotifyTokenResponse {
  access_token: string;
  token_type: "Bearer";
  expires_in: string;
  state?: string;
}
