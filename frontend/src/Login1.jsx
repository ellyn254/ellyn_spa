// import React, {useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios';

// const Login1 = () => {

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     function handleSubmit(event) {
//       event.preventDefault();
//       axios.post('http://localhost:8081/login', {email, password}){
//         .then(res) => {
//                   console.log(res);
//                   navigate("/home");
//                   //else if an error occurs
//                 })
//                 .catch((err) => console.log(err));
//       }


      
//     }
//   return (
//     <div className='d-flex justify-content-center align-items-center vh-100'>
//         <div className='p-3 w-25 rounded bg-white'>

//            <form onSubmit={handleSubmit}>
//             <div className='mb-3'> 
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" placeholder="Enter email" className='form-control' 
//                 onChange={e => setEmail(e.target.value)} />
//             </div>

//             <div className='mb-3'> 
//                 <label htmlFor="password">Password:</label>
//                 <input type="password" placeholder="Enter password" className='form-control' 
//                 onChange={e => setPassword(e.target.value)} />
//             </div>
//             <button type="submit" className="btn btn-primary w-100">LOGIN</button>
//            </form>
//        </div>
//     </div>
//   )
// }

// export default Login1