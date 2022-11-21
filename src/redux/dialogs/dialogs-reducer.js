import firstAvatar from "../../assets/images/ava1.jpeg";
import secondAvatar from "../../assets/images/ava2.jpg";
import thirdAvatar from "../../assets/images/ava3.jpeg";
import fourthAvatar from "../../assets/images/ava4.jpg";

const types = {
  AM: "ADD-MESSAGE",
  SCD: "SET-CURRENT-DIALOG",
};

const initialState = {
  messages: [
    [
      {
        message: "Hi",
        id: 0,
        person: "first",
        avatar: firstAvatar,
      },
      {
        message: "Hello",
        id: 1,
        person: "second",
        avatar: secondAvatar,
      },
    ],
    [
      {
        message: "Hello",
        id: 0,
        person: "first",
        avatar: firstAvatar,
      },
    ],
    [
      {
        message: "Hi =)",
        id: 0,
        person: "second",
        avatar: secondAvatar,
      },
      {
        message: "Hello)",
        id: 1,
        person: "first",
        avatar: firstAvatar,
      },
    ],
  ],
  dialogs: [
    {
      name: "Dima",
      isActive: true,
      id: 0,
      avatar: firstAvatar,
    },
    {
      name: "Valera",
      isActive: false,
      id: 1,
      avatar: thirdAvatar,
    },
    {
      name: "Sergey",
      isActive: false,
      id: 2,
      avatar: fourthAvatar,
    },
  ],
  currentDialog: 0,
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AM: {
      const currentDialog = state.currentDialog;
      const newMessage = {
        id: state.messages[currentDialog].length,
        message: action.newText,
        person: "second",
        avatar: secondAvatar,
      };
      const updatedDialog = [...state.messages[currentDialog], newMessage];

      const messages = [...state.messages];
      messages[currentDialog] = updatedDialog;
      return {
        ...state,
        messages,
      };
    }

    case types.SCD: {
      const previousDialog = state.currentDialog;
      const currentDialog = action.id;
      const dialogs = [...state.dialogs];
      const newDialog = { ...dialogs[currentDialog] };
      const prevDialog = { ...dialogs[previousDialog] };

      newDialog.isActive = true;
      prevDialog.isActive = false;

      dialogs[previousDialog] = prevDialog;
      dialogs[currentDialog] = newDialog;

      return {
        ...state,
        currentDialog: action.id,
        dialogs: dialogs,
      };
    }

    default:
      return state;
  }
};

export const addMessageActionCreator = (data) => ({
  type: types.AM,
  newText: data.newText,
});

export const setCurrentDialog = (id) => ({
  type: types.SCD,
  id,
});

export default dialogsReducer;
