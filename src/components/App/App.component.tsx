import React, { useEffect } from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
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
            "playlist-read-private"
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
        <Route path="/featured" component={Featured} />
        <Route path="/personal" component={Personal} />
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
