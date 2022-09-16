import { connect } from "react-redux";
import { compose } from "redux";
import WithAuthRedirect from "../../hoc/AuthRedirect";

import {
  addMessageActionCreator,
  setCurrentDialog,
} from "../../redux/dialogs/dialogs-reducer";
import { dialogsSelectors } from "../../redux/dialogs/dialogs-selectors";
import { Dialogs } from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogs: dialogsSelectors.getDialogs(state),
    messages: dialogsSelectors.getMessages(state),
    currentDialog: dialogsSelectors.getCurrentDialog(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (data) => {
      dispatch(addMessageActionCreator(data));
    },
    chooseDialog: (id) => {
      dispatch(setCurrentDialog(id));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
