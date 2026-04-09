import React, { use, useContext } from 'react'
import { RouterProvider } from 'react-router'
import router from './app.routes';
import { AppContext } from './Context';

const App = () => {
  const { loading } = useContext(AppContext);

  if(loading){
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <RouterProvider router={router} />
  )
}

export default App;