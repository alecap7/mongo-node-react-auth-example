import React from "react";
import { connect } from "react-redux";

const Profile = ({ auth }) => {
  return <h3>Welcome {auth.userId}!</h3>;
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
