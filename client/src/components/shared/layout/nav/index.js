import React, { Fragment } from "react";
import { List, ListItem, RightListItem, Link } from "./styles";
import { connect } from "react-redux";
import * as actions from "../../../../redux/actions";

const Nav = ({ auth, invalidateAuth }) => (
  <nav>
    <List>
      {auth ? (
        <Fragment>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/users/profile">Profile</Link>
          </ListItem>
          <RightListItem>
            <Link to="/users/signin" onClick={invalidateAuth}>
              Logout
            </Link>
          </RightListItem>
        </Fragment>
      ) : (
        <Fragment>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/users/signin">Signin</Link>
          </ListItem>
        </Fragment>
      )}
    </List>
  </nav>
);

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(Nav);
