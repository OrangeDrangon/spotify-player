import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import qs from "query-string";
import { connect } from "react-redux";

import classes from "./App.module.scss";

import Header from "components/Header/Header.component";
import Personal from "components/Personal/Personal.component";
import Featured from "components/Featured/Featured.component";
import Callback from "components/Callback/Callback.component";

import { ISpotifyTokenRequest } from "interfaces/ISpotifyTokenRequest.interface";

import { generateSpotifyAuthUrl } from "utils/generateSpotifyAuthUrl.util";

import { IState } from "redux/reducers/root.reducer";

interface IProps {
  token: string | null;
}

const ConnectedApp: React.FC<IProps> = ({ token }: IProps) => {
  if (window.Spotify && token) {
    const player = new window.Spotify.Player({
      name: Math.random().toString(),
      volume: 1,
      getOAuthToken: callback => callback(token)
    });

    player.connect().then(success => {
      console.log(success, "success");
    });
    const play = ({
      spotify_uri,
      playerInstance: {
        _options: { getOAuthToken, id }
      }
    }: {
      spotify_uri: string;
      playerInstance: ISpotifyPlayer;
    }) => {
      getOAuthToken(access_token => {
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
          method: "PUT",
          body: JSON.stringify({ uris: [spotify_uri] }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`
          }
        });
      });
    };

    player.addListener("ready", () => {
      play({
        playerInstance: player,
        spotify_uri: "spotify:track:7xGfFoTpQ2E7fRF5lN10tr"
      });
    });
  }
  useEffect(() => {
    if (!token) {
      const params = qs.parse(window.location.hash);
      if (!params.access_token) {
        const requestContents: ISpotifyTokenRequest = {
          client_id: process.env.REACT_APP_CLIENT_ID || "",
          redirect_uri: process.env.REACT_APP_REDIRECT_URI || "",
          response_type: "token",
          scopes: [
            "streaming",
            "user-read-birthdate",
            "user-read-email",
            "user-read-private",
            "playlist-read-private",
            "user-modify-playback-state"
          ],
          state: window.location.pathname
        };
        window.location.assign(generateSpotifyAuthUrl(requestContents));
      }
    }
  }, [token]);

  return (
    <Router>
      <Header />
      <div className={classes.page}>
        <Route exact path="/" render={() => <Redirect to="/featured" />} />
        <Route path="/personal" component={Personal} />
        <Route path="/featured" component={Featured} />
        <Route path="/callback" component={Callback} />
      </div>
    </Router>
  );
};

const mapStateToProps = ({ token }: IState) => {
  return { token };
};

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
