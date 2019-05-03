import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IState } from "redux/reducers/root.reducer";
import { setDeviceId } from "redux/actions/setDeviceId.action";

interface IProps {
  token: string | null;
  device_id: string | null;
  setDeviceId: (
    device_id: string | null
  ) => {
    type: string;
    payload: string | null;
  };
}

const ConnectedPlayer: React.FC<IProps> = ({
  token,
  device_id,
  setDeviceId
}: IProps) => {
  useEffect(() => {
    if (window.Spotify && token && !device_id) {
      const playerNew = new window.Spotify.Player({
        name: "Drangon's Web Player",
        volume: 1,
        getOAuthToken: callback => callback(token)
      });

      playerNew.addListener("ready", ({ device_id }) => {
        setDeviceId(device_id);
      });

      playerNew.connect();
    }
  }, [device_id, token, setDeviceId]);
  return <div>{device_id ? device_id : "loading"}</div>;
};

const mapStateToProps = ({ token, device_id }: IState) => {
  return { token, device_id };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setDeviceId: (device_id: string | null) => dispatch(setDeviceId(device_id))
  };
};
const Player = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedPlayer);

export default Player;
