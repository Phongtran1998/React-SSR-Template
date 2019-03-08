import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import requireAuth from "../components/hocs/requireAuth";
const renderAdmins = ({ admins }) => {
  return admins.map(admin => {
    return <li key={admin.id}>{admin.name}</li>;
  });
};
const AdminsListPage = props => {
  useEffect(() => {
    props.fetchAdmins();
  }, []);

  return (
    <div>
      <h3>Protected List of Admins</h3>
      <ul>{renderAdmins(props)}</ul>
    </div>
  );
};

const mapStateToProps = ({ admins }) => {
  return { admins };
};

export default {
  component: connect(
    mapStateToProps,
    actions
  )(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(actions.fetchAdmins())
};
