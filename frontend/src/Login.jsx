import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

   function handleSubmit(event){
    event.preventDefault();
    //here we use axios library to pass data
    axios.post('http://localhost:8081/login', {email,password})
    //after which we print the result
    .then(res => {
      console.log(res)
      navigate('/home')
      //else if an error occurs
    }).catch(err => console.log(err))
   }
  return (
    
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-info p-3 rounded w-25'>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor='email'><strong>Email:</strong></label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
           autoComplete='off'
           required
           onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label htmlFor='password'><strong>Password:</strong></label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
           autoComplete='off'
           required
           onChange={e => setPassword(e.target.value)}/>
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