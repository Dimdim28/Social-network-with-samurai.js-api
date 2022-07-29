import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
  renderTree() {
    console.log("this method will be replaced soon =)");
  },

  state: {
    profilePage: {
      posts: [
        { message: "Hello everyone", likes: 16, id: 0 },
        { message: "Hi!", likes: 5, id: 1 },
        { message: " =)", likes: 0, id: 2 },
      ],
      newPostText: "",
    },

    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        {
          key: 0,
          name: "Andrew",
          image:
            "https://thypix.com/wp-content/uploads/2021/10/anime-avatar-profile-picture-thypix-55-700x700.jpg",
        },
        {
          key: 1,
          name: "Valentin",
          image:
            "https://www.sabonews.org/wp-content/uploads/2021/09/ANIME-GIRL-CUTE.jpg",
        },
        {
          key: 2,
          name: "Evgen",
          image: "https://wallpapercave.com/uwp/uwp553105.png",
        },
      ],
    },
  },

  getState() {
    return this.state;
  },

  subscribe(observer) {
    this.renderTree = observer;
  },

  dispatch(action) {
    this.state.profilePage = profileReducer(this.state.profilePage, action);
    this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action);
    this.state.sidebar = sidebarReducer(this.state.sidebar, action);
    this.renderTree(this.state);
  },
};

export default store;
