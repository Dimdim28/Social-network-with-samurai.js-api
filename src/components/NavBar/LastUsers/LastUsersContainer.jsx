import { connect } from "react-redux";
import { compose } from "redux";
import { LastUsers } from "./LastUsers";
import { getLastUsers } from "../../../redux/sidebar/sidebar-reducer";
import { sidebarSelectors } from "../../../redux/sidebar/sidebar-selectors";

const mapStateToProps = (state) => {
  return {
    users: sidebarSelectors.getUsers(state),
  };
};

export const LastUsersContainer = compose(
  connect(mapStateToProps, { getLastUsers })
)(LastUsers);
