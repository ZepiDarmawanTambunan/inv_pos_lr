import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Constants from '../../../Constants';

const Login = () => {
  const [input, setInput] =useState({email: '', password: ''});
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setInput(prevState => ({...prevState, [e.target.name] : e.target.value}));
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(`${Constants.BASE_URL}/login`, input);
      localStorage.email = res.data.email
      localStorage.name = res.data.name
      localStorage.photo = res.data.photo
      localStorage.phone = res.data.phone
      localStorage.token = res.data.token
      window.location.reload();
    } catch (error) {
      if(error.response.status == 422){
        setErrors(error.response.data.errors);
      }
    }finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if(localStorage.token != undefined){
      navigate('/');
    }
  });

  return (
    <div className='bg-light d-flex justify-content-center align-items-center vh-100'>
        <div className="card p-4 w-25">
          <h1 className="card-title text-center">Login</h1>
          <form onSubmit={handleLogin}>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-control"
                    value={input.email}
                    onChange={handleInput}
                    required />
                    <small className='text-danger '>
                      {errors.email != undefined ? errors.email[0] : null}
                    </small>
              </div>
              <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    className="form-control" 
                    value={input.password}
                    onChange={handleInput}
                    required />
                    <small className='text-danger'>
                      {errors.password != undefined ? errors.password[0] : null}
                    </small>
              </div>
              <div className="mb-3">
                {
                  isLoading ?
                  (
                    <button className="btn btn-success w-100" type="button" disabled>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Loading...
                    </button>
                  )
                  : 
                  <button type="submit" className="btn btn-success w-100">Login</button>
                }
              </div>
          </form>
      </div>
    </div>
  )
}

export default Login