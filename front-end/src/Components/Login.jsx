// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import '../styles/login.css';
// import { AuthContext } from '../Authcontext';
// import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const { setLoggedIn, setToken , setUser  } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [loading, setLoading]= useState(false);
//   const [err, setErr]= useState(false);

//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     setLoading(true);

//     e.preventDefault();
//     try {

//       const response = await axios.post('https://green-mentor-asg.onrender.com/login', formData);
//       const { token } = response.data;
//       const { email } = formData;
//       console.log(response.data);
     
//       setToken(token);
//       setLoggedIn(true);
//       console.log(email);
//       setUser( email );
//       localStorage.setItem('userEmail',email);
       
//       alert('Login Succesfull✅  Redirect to home page ');
//       navigate('/'); 
//     }catch (error) {
//       setErr(true);
//       console.error('Error logging in:', error);
//     }
     
//       setLoading(false);

//   };
  

//   return (

//   <div style={{backgroundImage : "url('https://i.pinimg.com/originals/d9/af/b2/d9afb2f0c922f34cb6ae8ad219f53ca3.gif')" , backgroundRepeat : 'no-repeat', width :'100%',  backgroundSize: 'cover', height :'800px' , display: 'flex' , marginBottom:'-140px' }}>

//   <div class="wrapper" >

//     <form onSubmit={handleSubmit}>
//       <h1>Login {loading? 'log in ...' :  "" }</h1>

//       <div class="input-box">
//         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' required />
//         <i class='bx bxs-user'></i>
//       </div>

//       <div class="input-box">
//         <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' required />
//         <i class='bx bxs-lock-alt' ></i>
//       </div>

//       <div class="remember-forgot">
//         <label><input type="checkbox"/>Remember Me</label>
//         <a href="#">Forgot Password</a>
//       </div>

//       <button type="submit" class="btn">Login {loading? ' ... 🔃' :  "" }</button>
//        {err? <p style={{color :'red'}}>Wrong email or password</p>
//        : ""
//        }
//       <div class="register-link">
//         <p>Dont have an account?  <NavLink to="/signup" style={{color :'silver'}}>Register now</NavLink> </p>
//       </div>

//     </form> 
//   </div>

//          </div> 
 


//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/AuthReducer/action';
import '../styles/login.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(login(formData));
      setLoading(false);
      
      navigate('/list');
    }
    catch (error) {
      setErr(true);
      console.error('Error logging in:', error);
      setLoading(false);
    }
  };
  return (
    <div className="login-wrapper" style={{ backgroundImage: "url('https://i.pinimg.com/originals/d9/af/b2/d9afb2f0c922f34cb6ae8ad219f53ca3.gif')", backgroundRepeat: 'no-repeat', width: '100%', backgroundSize: 'cover', height: '800px', display: 'flex', marginBottom: '-140px' }}>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login {loading ? 'log in ...🔂' : ""}</h1>
          <div className="input-box">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember Me</label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="btn">Login {loading ? ' ... 🔃' : ""}</button>
          {err ? <p style={{ color: 'red' }}>Wrong email or password</p> : ""}
          <div className="register-link">
            <p>Don't have an account? <NavLink to="/signup" style={{ color: 'silver' }}>Register now</NavLink></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
