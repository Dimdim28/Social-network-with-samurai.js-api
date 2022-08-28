export const dialogsSelectors = {
  getMessages(state) {
    return state.dialogsReducer.messages;
  },
  getDialogs(state) {
    return state.dialogsReducer.dialogs;
  },
};
