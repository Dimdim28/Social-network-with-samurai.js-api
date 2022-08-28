import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import dialogsReducer from "./dialogs/dialogs-reducer";
import profileReducer from "./profile/profile-reducer";
import sidebarReducer from "./sidebar/sidebar-reducer";
import usersReducer from "./users/users-reducer";
import authReducer from "./auth/auth-reducer";
import appReducer from "./app/app-reducer";
import thunkMiddleware from "redux-thunk";
let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer,
  usersReducer,
  authReducer,
  appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;
export default store;
