import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import User from './User/User';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import AddUsers from './components/AddUsers';
import Main from './components/Main/Main';
import Upadate from './components/Update/Upadate';

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element :  <Main></Main>,
      children : [
          {
              path : '/',
              element:<Home></Home>
          },
            {
              path : '/user/add',
              element : <AddUsers></AddUsers>
            },
            {
              path : '/users',
              loader : () => fetch('http://localhost:5000/users'),
              element : <User></User>
            }, 
            {
              path : '/update/:id',
              loader : ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
              element : <Upadate></Upadate>
            }
          
      ]
    }
   
  ])
  

  return (
    <div className="App">
      <RouterProvider router={router}>
        
      </RouterProvider>

    </div>
  );
}

export default App;
