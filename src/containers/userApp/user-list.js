import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../../actions';

class UserList extends Component {
  renderList() {
    return this.props.users.map(user => (
      <li key={user.id} onClick={() => this.props.selectUser(user)} >
        {user.first} {user.last}
      </li>
    ));
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = {
  selectUser,
};
// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
