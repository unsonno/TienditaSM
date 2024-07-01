import { Button } from '@radix-ui/themes';
import React, { useState } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //datos del servidor//


    console.log(formData);
 

  return (
    <div>
      <h2>Sign In</h2>
      <form >
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;