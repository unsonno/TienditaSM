import { Button } from '@radix-ui/themes';
import React, { useState } from 'react';
import { Post } from "./signinfetch/Post";


const SignIn = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const List= async()=> {
     const obj = {
      username : user,
      password : pass,
      state: false
     }
    await Post(obj) 
  } 
  return (
    <div>
      <h2>Sign In</h2>
      <form >
        <div>
          <label>Username:</label>
          <input type="text" name="username" onChange={(e) => setUser(e.target.value)}  required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" onChange={(e)=> setPass(e.target.value)} required />
        </div>
        <Button type="button" onClick={List}>Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;