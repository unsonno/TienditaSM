import React, { useState } from 'react';
import { Post } from "./signinfetch/Post";

const LogIn = () => {
  

  return (
    <div>
      <h2>Log In</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="username" name="username" placeholder='Enter your new username'  required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" placeholder='Enter your new password'   required />
        </div>
        <button type="button"  >Log In</button>
      </form>
    </div>
  );
}

export default LogIn;