import profileReducer, {
  addPostActionCreator,
  deletePostActionCreator,
} from "./profile-reducer";

const initialPostsState = {
  posts: [
    { message: "Hello everyone", likes: 16, id: 0 },
    { message: "Hi!", likes: 5, id: 1 },
    { message: " =)", likes: 0, id: 2 },
  ],
};

it("posts count should be incremented", () => {
  const action = addPostActionCreator({ newText: "newPost" });
  const newState = profileReducer(initialPostsState, action);
  expect(newState.posts.length).toBe(4);
});

it("new post must have right id", () => {
  const action = addPostActionCreator({ newText: "newPost" });
  const newState = profileReducer(initialPostsState, action);
  expect(newState.posts[3].id).toBe(3);
});

it("new post must have right message", () => {
  const action = addPostActionCreator({ newText: "newPost" });
  const newState = profileReducer(initialPostsState, action);
  expect(newState.posts[3].message).toBe("newPost");
});

it("after deleting length of posts should be decremented", () => {
  const action = deletePostActionCreator({ id: 1 });
  const newState = profileReducer(initialPostsState, action);
  expect(newState.posts.length).toBe(2);
});

it("after deleting length of posts should not  be decremented if id is incorrect", () => {
  const action = deletePostActionCreator({ id: 50 });
  const newState = profileReducer(initialPostsState, action);
  expect(newState.posts.length).toBe(3);
});
