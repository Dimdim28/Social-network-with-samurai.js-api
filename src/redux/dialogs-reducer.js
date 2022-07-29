const types = {
  AM: "ADD-MESSAGE",
  UNMT: "UPDATE-NEW-MESSAGE-TEXT",
};

let initialState = {
  messages: [
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
    {
      message: "How are you?",
      id: 2,
      person: "first",
      avatar:
        "https://fs-prod-cdn.nintendo-europe.com/media/images/06_screenshots/games_5/nintendo_switch_download_software_2/nswitchds_warface/NSwitchDS_Warface_03.jpg",
    },
    {
      message: "Good, thanks =)",
      id: 3,
      person: "second",
      avatar:
        "https://i.pinimg.com/originals/f6/40/ef/f640ef2855c53f086ecbec6dfc86449d.png",
    },
    {
      message: "Do you know that`s Billy had birdthday yesterday?)",
      id: 4,
      person: "first",
      avatar:
        "https://fs-prod-cdn.nintendo-europe.com/media/images/06_screenshots/games_5/nintendo_switch_download_software_2/nswitchds_warface/NSwitchDS_Warface_03.jpg",
    },
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
  newMessageText: "",
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AM: {
      const newMessage = {
        id: state.messages.length,
        message: state.newMessageText,
        person: "second",
        avatar:
          "https://i.pinimg.com/originals/f6/40/ef/f640ef2855c53f086ecbec6dfc86449d.png",
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };
    }

    case types.UNMT: {
      return {
        ...state,
        newMessageText: action.newText,
      };
    }

    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: types.AM });
export const updateNewMessageActionCreator = (text) => ({
  type: types.UNMT,
  newText: text,
});

export default dialogsReducer;
