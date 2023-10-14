import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [input, setInput] =useState({});

  const handleInput = (e) => {
    setInput(prevState => ({...prevState, [e.target.name] : e.target.value}));
  }

  return (
    <div className='bg-light d-flex justify-content-center align-items-center vh-100'>
        <div className="card p-4 w-25">
          <h1 className="card-title text-center">Login</h1>
          <form>
              <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" className="form-control" required />
              </div>
              <div className="mb-3">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" id="password" name="password" className="form-control" required />
              </div>
              <div className="mb-3">
                  <button type="submit" className="btn btn-success w-100">Login</button>
              </div>
          </form>
      </div>
    </div>
  )
}

export default Login