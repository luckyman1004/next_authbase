import React from 'react';
import LoginBtn from './Auth/LoginBtn';

export default function NotLogged() {
  return (
    <div>
      <h1>You are not logged in</h1>

      <p>Please login to access this page</p>
      <LoginBtn />
    </div>
  );
}
