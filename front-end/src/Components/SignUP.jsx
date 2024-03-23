import React, { useState } from 'react';
import axios from 'axios';
import '../styles/login.css';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const[loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setFormData(true);
    e.preventDefault();
    try {
      const response = await axios.post('https://green-mentor-asg.onrender.com/signup', formData);
      console.log(response.data);
      setFormData({ name: '', email: '', password: '' });
      alert('Account Created ✅  Login now ');
      navigate('/login'); // Redirect to login page
    }
    catch (error) {
      console.error('Error signing up:', error);
    }
    setLoading(false);
  };
 
  return (
    <div style={{backgroundImage: "url('https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg')", backgroundRepeat: 'no-repeat', width: '100%', backgroundSize: 'cover', height: '800px', display: 'flex', marginBottom: '-140px' }}>
      <div class="wrapper"  >
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div class="input-box">
            <input type="name" name="name" value={formData.name} onChange={handleChange} placeholder='name' required />
            <i class='bx bxs-user'></i>
          </div>
          <div class="input-box">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' required />
            <i class='bx bxs-user'></i>
          </div>
          <div class="input-box">
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' required />
            <i class='bx bxs-lock-alt' ></i>
          </div>
          <div class="remember-forgot">
            <label><input type="checkbox"/>Remember Me</label>
            
          </div>
          <button type="submit" class="btn">Sign UP {loading? ' ... 🔃' :  "" }</button>
          <div class="register-link">
        <p>Already  have an account?  <NavLink to="/login" style={{color :'silver'}}>login now</NavLink> </p>
          </div>

        </form> 
      </div>
      </div>

  );
};

export default SignUp;
