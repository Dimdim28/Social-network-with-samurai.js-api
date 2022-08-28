import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "../redux/auth-selectors";

const mapStateToPropsforRedirect = (state) => ({
  isAuth: authSelectors.getIsAuth(state),
});

function WithAuthRedirect(Component) {
  function redirectCompoennt(props) {
    if (!props.isAuth) return <Navigate to={"/login"} />;
    return <Component {...props} />;
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsforRedirect)(
    redirectCompoennt
  );

  return ConnectedAuthRedirectComponent;
}

export default WithAuthRedirect;
