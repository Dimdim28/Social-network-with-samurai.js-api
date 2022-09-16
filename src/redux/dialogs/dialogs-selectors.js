export const dialogsSelectors = {
  getMessages(state) {
    return state.dialogsReducer.messages[state.dialogsReducer.currentDialog];
  },
  getDialogs(state) {
    return state.dialogsReducer.dialogs;
  },
  getCurrentDialog(state) {
    return state.dialogsReducer.currentDialog;
  },
};
