export interface ISpotifyTokenRequest {
  client_id: string;
  response_type: "token";
  redirect_uri: string;
  state?: string;
  scopes?: string[];
  show_dialog?: boolean;
}
