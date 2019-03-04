import React from 'react';
import UserList from '../../containers/userApp/user-list';
import UserDetails from '../../containers/userApp/user-detail';

const App = () => (
  <div>
    <h2>User List</h2>
    <UserList />
    <hr />
    <h2>User Details</h2>
    <UserDetails />
  </div>
);

export default App;
