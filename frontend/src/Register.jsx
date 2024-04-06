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
                <div className='mb-3'>
                    <label><strong>Name:</strong>
                    <input type='text' placeholder='Enter Name' name='name' autoComplete='off' required 
                    onChange={e => setValues({...values, name: e.target.value})}
                    className='form-control rounded-0'/></label>
                </div>
                <div className='mb-3'>
                    <label><strong>Phone No::</strong>
                    <input type='phone' placeholder='Enter Phone number' name='phone' autoComplete='off' required
                    onChange={e => setValues({...values, phone: e.target.value})} 
                    className='form-control rounded-0'/></label>
                </div>
                <div className='mb-3'>
                    <label><strong>Email:</strong>
                    <input type='email' placeholder='Enter Email' name='email' autoComplete='off' required
                    onChange={e => setValues({...values, email: e.target.value})}
                    className='form-control rounded-0'/></label>
                </div>
                <div className='mb-3'>
                    <label><strong>Password:</strong>
                    <input type='password' placeholder='Enter Password' name='password' autoComplete='off' required
                    onChange={e => setValues({...values, password: e.target.value})}
                    className='form-control rounded-0'/></label>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
                <p>Agree to terms and conditions</p>
                <Link to={`/login`} className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Register