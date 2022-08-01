import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { setUserProfile } from "../../redux/profile-reducer";
import ProFile from "./ProFile";

class ProFileContainer extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`
      )
      .then((res) => {
        this.props.setUserProfile(res.data);
      });
  }

  componentDidUpdate(prevProps) {
    const userId = this.props.userId;
    if (prevProps.userId !== userId) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then((res) => {
          this.props.setUserProfile(res.data);
        });
    }
  }

  render() {
    return <ProFile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
});

const WithRouterComponent = (props) => {
  const params = useParams();
  return (
    <ProFileContainer
      {...props} // Пропсы из mapStateToProps, {setUserProfile}
      userId={params.userId ? params.userId : "2"} // Если такого userId нету, то отобразить 2
    />
  );
};

export default connect(mapStateToProps, { setUserProfile })(
  WithRouterComponent
);
