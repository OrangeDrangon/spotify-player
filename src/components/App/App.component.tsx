import React, { useState, useEffect } from "react";
import qs from "query-string";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import classes from "./App.module.scss";

import Header from "components/Header/Header.component";
import Personal from "components/Personal/Personal.component";
import Featured from "components/Featured/Featured.component";

import { ISpotifyTokenRequest } from "interfaces/ISpotifyTokenRequest.interface";
import { ISpotifyTokenResponse } from "interfaces/ISpotifyTokenResponse.interface";

import { generateSpotifyAuthUrl } from "utils/generateSpotifyAuthUrl.util";

import { headerCatagories } from "constants/headerCatagories.constant";

import { IState } from "redux/reducers/root.reducer";
import { setToken } from "redux/actions/setToken.action";

interface IProps {
  token: string | null;
  setToken: (
    token: string | null
  ) => {
    type: string;
    payload: string | null;
  };
}

const ConnectedApp: React.FC<IProps> = ({ token, setToken }: IProps) => {
  const [selected, setSelected] = useState(headerCatagories.featured);

  useEffect(() => {
    let cancelled = false;
    let timeoutId: NodeJS.Timeout | null = null;
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
          ]
        };
        window.location.assign(generateSpotifyAuthUrl(requestContents));
      } else {
        // We know it is this type at this point so we cast to it
        const spotifyResponse = (params as unknown) as ISpotifyTokenResponse;

        // If the effect has not been cancelled we set the state
        if (!cancelled) {
          setToken(spotifyResponse.access_token);
          timeoutId = setTimeout(
            () => setToken(null),
            Number(spotifyResponse.expires_in) * 1000
          );
        }
        // Removes tokens from the url
        window.location.hash = "";
      }
    }
    return () => {
      cancelled = true;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [token, setToken]);

  return (
    <React.Fragment>
      <Header setSelected={setSelected} />
      <div className={classes.page}>
        <section
          className={classes.section}
          style={
            selected === headerCatagories.featured ? {} : { display: "none" }
          }
        >
          <Featured />
        </section>
        <section
          className={classes.section}
          style={
            selected === headerCatagories.personal ? {} : { display: "none" }
          }
        >
          <Personal />
        </section>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ token }: IState) => {
  return { token };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return { setToken: (token: string | null) => dispatch(setToken(token)) };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedApp);

export default App;
