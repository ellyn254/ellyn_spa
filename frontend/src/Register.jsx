import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/register', values)
        .then(res => {
           if(res.data.Status === "Success") {
            navigate('/login')
           } else {
            alert("Error");
           }
        })
        .then(err => console.log(err));
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
          <label>Name:</label>
          <input
            type="name"
            className="form-control"
            id="name"
            name="name"
           required
           onChange={e => setValues({...values, name: e.target.value})} 
          />
        </div>
        <div className="mb-3">
          <label>Phone:</label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            name="phone"
           required
           onChange={e => setValues({...values, phone: e.target.value})} 
          />
        </div>
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
        
                <button type='submit' className='btn btn-primary w-100 rounded-0'>Register</button>
                <checkbox>Agree to terms and conditions</checkbox>
                <Link to={`/login`} className='btn btn-default border w-100 bg-info rounded-0 text-decoration-none'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Register