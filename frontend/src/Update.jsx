import React, { useState } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'


const Update = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //to pass the id we use the useSearchParams hook as below
    const {id} = useParams();
    const navigate = useNavigate();

     function handleSubmit(event){
      event.preventDefault();
      //here we use axios library to pass data
      axios.put('http://localhost:8081/update/'+id, {name,phone,email,password})
      //after which we print the result
      .then(res => {
        console.log(res)
        navigate('/')
        //else if an error occurs
      }).catch(err => console.log(err))
     }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <div className='bg-white p-3 rounded w-25'>
            <h2>Update</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
          <label htmlFor='name'><strong>Name:</strong></label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
           autoComplete='name'
           required
          onChange={e => setName(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label htmlFor='phone'><strong>Phone:</strong></label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            name="phone" 
           autoComplete='off'
           required
           onChange={e => setPhone(e.target.value)}/>
        </div>

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
        
                <button type='submit' className='btn btn-secondary w-100 rounded-0'>Update</button>
                Agree to terms and conditions
                <Link to={`/login`} className='btn btn-default border w-100 bg-info rounded-0 text-decoration-none'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Update