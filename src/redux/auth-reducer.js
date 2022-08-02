export const types = {
  SUD: "SET_USER_DATA",
  SIF: "SET_IS_FETCHING",
};

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUD: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => ({
  type: types.SUD,
  data: { id, email, login },
});

export default authReducer;
