import { connect } from "react-redux";
import { compose } from "redux";
import WithAuthRedirect from "../../hoc/AuthRedirect";

import { addMessageActionCreator } from "../../redux/dialogs/dialogs-reducer";
import { dialogsSelectors } from "../../redux/dialogs/dialogs-selectors";
import { Dialogs } from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogs: dialogsSelectors.getDialogs(state),
    messages: dialogsSelectors.getMessages(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (data) => {
      dispatch(addMessageActionCreator(data));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
