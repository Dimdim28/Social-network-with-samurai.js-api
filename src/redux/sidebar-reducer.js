let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
