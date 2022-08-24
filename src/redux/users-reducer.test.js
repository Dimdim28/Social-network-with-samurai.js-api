import usersReducer, {
  setIsFetching,
  setUsers,
  setUsersTotalCount,
  setCurrentPage,
} from "./users-reducer";

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProgress: [],
};

const usersData = [
  {
    name: "Natalie Danilchenkofff",
    id: 22,
    uniqueUrlName: null,
    photos: {
      small:
        "https://social-network.samuraijs.com/activecontent/images/users/22/user-small.jpg?v=1",
      large:
        "https://social-network.samuraijs.com/activecontent/images/users/22/user.jpg?v=1",
    },
    status: "Hello",
    followed: false,
  },
  {
    name: "Дмитрий Долидов",
    id: 10,
    uniqueUrlName: null,
    photos: {
      small:
        "https://social-network.samuraijs.com/activecontent/images/users/10/user-small.jpg?v=1",
      large:
        "https://social-network.samuraijs.com/activecontent/images/users/10/user.jpg?v=1",
    },
    status: "frontend разработчик",
    followed: true,
  },
  {
    name: "Jak Zigil`man",
    id: 9,
    uniqueUrlName: null,
    photos: {
      small:
        "https://social-network.samuraijs.com/activecontent/images/users/9/user-small.jpg?v=1",
      large:
        "https://social-network.samuraijs.com/activecontent/images/users/9/user.jpg?v=1",
    },
    status: "верните мой 2007",
    followed: true,
  },
  {
    name: "Nastya",
    id: 8,
    uniqueUrlName: null,
    photos: {
      small:
        "https://social-network.samuraijs.com/activecontent/images/users/8/user-small.jpg?v=1",
      large:
        "https://social-network.samuraijs.com/activecontent/images/users/8/user.jpg?v=1",
    },
    status: "аап",
    followed: true,
  },
  {
    name: "tinirait",
    id: 7,
    uniqueUrlName: null,
    photos: {
      small: null,
      large: null,
    },
    status: null,
    followed: true,
  },
  {
    name: "mareena",
    id: 6,
    uniqueUrlName: null,
    photos: {
      small: null,
      large: null,
    },
    status: null,
    followed: true,
  },
  {
    name: "essedger",
    id: 5,
    uniqueUrlName: null,
    photos: {
      small: null,
      large: null,
    },
    status: null,
    followed: false,
  },
  {
    name: "marina",
    id: 4,
    uniqueUrlName: null,
    photos: {
      small: null,
      large: null,
    },
    status: null,
    followed: true,
  },
  {
    name: "AlexanderKhodaryonok",
    id: 3,
    uniqueUrlName: null,
    photos: {
      small: null,
      large: null,
    },
    status: "qwerty",
    followed: false,
  },
  {
    name: "samurai dimych",
    id: 2,
    uniqueUrlName: null,
    photos: {
      small:
        "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=1",
      large:
        "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=1",
    },
    status: "ghgdddsdsd sd123ывdsdsыввы",
    followed: true,
  },
];

it("after setting users data array length must be equal pageSize", () => {
  const action = setUsers(usersData);
  const newState = usersReducer(initialState, action);
  expect(newState.users.length).toBe(initialState.pageSize);
});

it("fetching status should be able to be changed correctly", () => {
  const startFetchingAction = setIsFetching(true);
  const newState = usersReducer(initialState, startFetchingAction);
  expect(newState.isFetching).toBe(true);
  const stopFetchingAction = setIsFetching(false);
  const anotherOneState = usersReducer(newState, stopFetchingAction);
  expect(anotherOneState.isFetching).toBe(false);
});

it("usersTotalCount should be able to  be updated correctly", () => {
  const firstAction = setUsersTotalCount(666);
  const firstState = usersReducer(initialState, firstAction);
  expect(firstState.totalUsersCount).toBe(666);
  const secondAction = setUsersTotalCount(30);
  const secondState = usersReducer(firstState, secondAction);
  expect(secondState.totalUsersCount).toBe(30);
});

const currentPageState = {
  currentPage: 22,
};

it("currentPage should be able to  be updated correctly", () => {
  const firstAction = setCurrentPage(40);
  const firstState = usersReducer(currentPageState, firstAction);
  expect(firstState.currentPage).toBe(40);
  const secondAction = setCurrentPage(30);
  const secondState = usersReducer(firstState, secondAction);
  expect(secondState.currentPage).toBe(30);
});
