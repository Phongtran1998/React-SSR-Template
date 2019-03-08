import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Helmet } from "react-helmet";

const renderUser = ({ users }) => {
  return users.map(user => {
    return <li key={user.id}>{user.name}</li>;
  });
};
const head = props => {
  return (
    <Helmet>
      <title>{`${props.users.length} Users Loaded`}</title>
      <meta property="og:title" content="Users App" />
    </Helmet>
  );
};
const UsersList = props => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  return (
    <div>
      {head(props)}
      <Header as="h3" color="orange">
        Here is a big list of users:
      </Header>
      <ul>{renderUser(props)}</ul>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return { users };
};
const loadData = store => {
  return store.dispatch(actions.fetchUsers());
};
export default {
  loadData,
  component: connect(
    mapStateToProps,
    actions
  )(UsersList)
};
