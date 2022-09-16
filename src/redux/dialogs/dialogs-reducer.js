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
        avatar:
          "https://fs-prod-cdn.nintendo-europe.com/media/images/06_screenshots/games_5/nintendo_switch_download_software_2/nswitchds_warface/NSwitchDS_Warface_03.jpg",
      },
      {
        message: "Hello",
        id: 1,
        person: "second",
        avatar:
          "https://i.pinimg.com/originals/f6/40/ef/f640ef2855c53f086ecbec6dfc86449d.png",
      },
    ],
    [
      {
        message: "How are you?",
        id: 0,
        person: "first",
        avatar:
          "https://fs-prod-cdn.nintendo-europe.com/media/images/06_screenshots/games_5/nintendo_switch_download_software_2/nswitchds_warface/NSwitchDS_Warface_03.jpg",
      },
    ],
    [
      {
        message: "Good, thanks =)",
        id: 0,
        person: "second",
        avatar:
          "https://i.pinimg.com/originals/f6/40/ef/f640ef2855c53f086ecbec6dfc86449d.png",
      },
      {
        message: "Do you know that`s Billy had birdthday yesterday?)",
        id: 1,
        person: "first",
        avatar:
          "https://fs-prod-cdn.nintendo-europe.com/media/images/06_screenshots/games_5/nintendo_switch_download_software_2/nswitchds_warface/NSwitchDS_Warface_03.jpg",
      },
    ],
  ],
  dialogs: [
    {
      name: "Dima",
      isActive: true,
      id: 0,
      avatar:
        "https://fs-prod-cdn.nintendo-europe.com/media/images/06_screenshots/games_5/nintendo_switch_download_software_2/nswitchds_warface/NSwitchDS_Warface_03.jpg",
    },
    {
      name: "Valera",
      isActive: false,
      id: 1,
      avatar: "https://www.ixbt.com/img/n1/news/2022/2/2/stalker.JPG",
    },
    {
      name: "Sergey",
      isActive: false,
      id: 2,
      avatar: "https://7themes.su/_ph/57/517143448.jpg",
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
        avatar:
          "https://i.pinimg.com/originals/f6/40/ef/f640ef2855c53f086ecbec6dfc86449d.png",
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
