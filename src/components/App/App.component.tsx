import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import qs from "query-string";
import { useSelector } from "react-redux";

import classes from "./App.module.scss";

import Header from "components/Header/Header.component";
import Personal from "components/Personal/Personal.component";
import Featured from "components/Featured/Featured.component";
import Callback from "components/Callback/Callback.component";
import Player from "components/Player/Player.component";

import { ISpotifyTokenRequest } from "interfaces/ISpotifyTokenRequest.interface";

import { generateSpotifyAuthUrl } from "utils/generateSpotifyAuthUrl.util";

const App: React.FC = () => {
  const token = useSelector((state: any) => state[0].token);
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
      <Player />
    </Router>
  );
};

export default App;
