//import React from "react";
//import StoreContext from "../../../StoreContext";
import { connect } from "react-redux";
import { compose } from "redux";
import { Friends } from "./Friends";

//store.state

/*export const FriendsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => <Friends state={store.getState()} />}
    </StoreContext.Consumer>
  );
};
*/
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export const FriendsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Friends);
