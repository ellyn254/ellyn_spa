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
    <div className="d-flex align-items-center justify-content-center vh-100">
      
      <div className='bg-info p-3 rounded w-50'>
      
      <form onSubmit={handleSubmit}>
      <h2>Contact Page</h2>
        <div className="mb-3">
          <label><strong>Email:</strong></label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
            autoComplete='off'
          />
        </div>

        <div className="mb-3">
          <label><strong>Message:</strong></label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            required
            autoComplete='off'
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default BootstrapContactForm;
