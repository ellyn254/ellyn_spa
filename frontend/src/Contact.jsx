// import React, { useState } from 'react';
// import './Contact.css'

// const Contact = () => {
//   const [values, setValues] = useState({
//     email: '',
//     message: ''
//   });

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform further actions here, such as sending the form data to a server
//     console.log(values);
//     // Clear the form after submission
//     setValues({
//       email: '',
//       message: ''
//     });
//   };

//   return (
//     <div className='d-flex justify-content-center text-black vh-100'>
//         <div className='bg-white p-3 rounded w-25 '>
// <h2>THIS IS A CONTACT PAGE</h2>
//       <form onSubmit={handleSubmit}>
//       <div className='mb-3'>
//                     <label><strong>Email:</strong>
//                     <input type='email' placeholder='Enter Email' name='email' autoComplete='off' required
//                     onChange={e => setValues({...values, email: e.target.value})}
//                     className='form-control rounded-0'/></label>
//                 </div>
//                 <div className='mb-3'>
//                     <label><strong>Message:</strong>
//                     <textarea type='message' placeholder='Enter message' name='message' autoComplete='off' required
//                     onChange={e => setValues({...values, message: e.target.value})}
//                     className='form-control rounded-0'/></label>
//                 </div>
//                 <button type='submit' className='btn btn-success w-100 rounded-0'>Send</button>
        
//               </form>
//               </div>
//               </div>
    
//   );
// };

// export default Contact;

import React, { useState } from 'react';

const BootstrapContactForm = () => {
  const [values, setValues] = useState({
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({
      email: '',
      message: ''
    });
  };

  return (
    <div className="container mt-5 p-3 rounded bg-white w-25 justify-content-center ">
      <h2>This is a Contact Page</h2>
      <form onSubmit={handleSubmit}>
      
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default BootstrapContactForm;
