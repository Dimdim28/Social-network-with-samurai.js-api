//import React from "react";
import { connect } from "react-redux";

import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogs-reducer";
//import StoreContext from "../../StoreContext";
import { Dialogs } from "./Dialogs";

/*const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        const onChangeMessage = (body) => {
          store.dispatch(updateNewMessageActionCreator(body));
        };

        return (
          <Dialogs
            updateNewMessageBody={onChangeMessage}
            sendMessage={addMessage}
            dialogsPage={state.dialogsReducer}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
*/
const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageActionCreator(body));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

const SuperDialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default SuperDialogsContainer;
//export default DialogsContainer;
