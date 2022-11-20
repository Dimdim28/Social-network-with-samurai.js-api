import { usersAPI } from "../../api/api";

const types = {
  SLU: "SET_LAST_USERS",
};

let initialState = {
  users: [
    {
      key: 0,
      name: "Andrew",
    },
    {
      key: 1,
      name: "Valentin",
    },
    {
      key: 2,
      name: "Evgen",
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SLU: {
      return { ...state, users: [...action.users] };
    }

    default:
      return state;
  }
};

const setLastUsers = (users) => ({ type: types.SLU, users });

export const getLastUsers = () => async (dispatch) => {
  try {
    const lastUsers = await usersAPI.getUsers(1, 3);
    const lastUsersNames = lastUsers.items.map((user, ind) => ({
      name: user.name,
      key: ind,
    }));

    dispatch(setLastUsers(lastUsersNames));
  } catch (err) {
    console.log(err);
  }
};
export default sidebarReducer;
