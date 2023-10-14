import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/css/styles.css';
import { RouterProvider } from 'react-router-dom';
import ProjectRouter from './components/router/ProjectRouter';
import { useState } from 'react';
import PublicRouter from './components/router/PublicRouter';

function App() {
  const [auth, setAuth] = useState(false);

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