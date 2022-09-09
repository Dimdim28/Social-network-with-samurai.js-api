import { connect } from "react-redux";
import { compose } from "redux";
import { Friends } from "./Friends";
import { getLastUsers } from "../../../redux/sidebar/sidebar-reducer";
import { sidebarSelectors } from "../../../redux/sidebar/sidebar-selectors";

const mapStateToProps = (state) => {
  return {
    users: sidebarSelectors.getUsers(state),
  };
};

export const FriendsContainer = compose(
  connect(mapStateToProps, { getLastUsers })
)(Friends);
