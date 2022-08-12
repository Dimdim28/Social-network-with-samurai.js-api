import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToPropsforRedirect = (state) => ({
  isAuth: state.authReducer.isAuth,
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
