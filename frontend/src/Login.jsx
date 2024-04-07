import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {

  const [values, setValues] = useState({
    email: '',
    password: ''
})
const navigate = useNavigate()
const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login', values)
    .then(res => {
       if(res.data.Status === "Success") {
        navigate('/')
       } else {
        alert(res.data.Error);
       }
    })
    .then(err => console.log(err));
}

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
           required
           onChange={e => setValues({...values, email: e.target.value})} 
          />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
           required
           onChange={e => setValues({...values, password: e.target.value})} 
          />
        </div>
                <button type='submit' className='btn btn-primary w-100 rounded-0'>Login</button>
                <p>Agree to terms and conditions</p>
                <Link to={`/register`} className='btn btn-default border w-100 bg-info rounded-0 text-decoration-none'>Create Account</Link>
        </form>
        </div>
    </div>
  )
}

export default Login