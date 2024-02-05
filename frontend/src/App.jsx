import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/css/styles.css';
import { RouterProvider } from 'react-router-dom';
import ProjectRouter from './components/router/ProjectRouter';
import { useEffect, useState } from 'react';
import PublicRouter from './components/router/PublicRouter';
import setupAxiosInterceptors from './AxiosInterceptor';
import axios from 'axios';

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if(localStorage.token != undefined){
      setAuth(true);
      // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`
    }
  }, []);

  useEffect(() => {
    // Panggil fungsi setupAxiosInterceptors di sini untuk menjalankan interceptor
    setupAxiosInterceptors();
  }, []);

  return (
    <>
        {
          auth 
          ? 
            <RouterProvider router={ProjectRouter}/>
          :
            <RouterProvider router={PublicRouter}/>
        }
    </>
  )
}

export default App