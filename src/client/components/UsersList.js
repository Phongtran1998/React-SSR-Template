import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";

const renderUser = ({ users }) => {
  return users.map(user => {
    return <li key={user.id}>{user.name}</li>;
  });
};
const UsersList = props => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  return (
    <div>
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

export default connect(
  mapStateToProps,
  actions
)(UsersList);
