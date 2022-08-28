import dialogsReducer, { addMessageActionCreator } from "./dialogs-reducer";

const initialState = {
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
};

it("posts count should be incremented", () => {
  const action = addMessageActionCreator({ newText: "new post" });
  const newState = dialogsReducer(initialState, action);
  expect(newState.messages.length).toBe(6);
});

it("Added posh should have correct id", () => {
  const action = addMessageActionCreator({ newText: "new post" });
  const newState = dialogsReducer(initialState, action);
  expect(newState.messages[5].id).toBe(5);
});

it("Added posh should have correct message", () => {
  const action = addMessageActionCreator({ newText: "new message" });
  const newState = dialogsReducer(initialState, action);
  expect(newState.messages[5].message).toBe("new message");
});
