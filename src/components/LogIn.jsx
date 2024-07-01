import React, { useState } from 'react';

const LogIn = () => {
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

  const handleSubmit = (e) => {
   e.preventDefault();//

    //datos del servido//

    console.log(formData);
  }; 

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="username" name="username" placeholder='Enter your new username' value={formData.user} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" placeholder='Enter your new password' value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;