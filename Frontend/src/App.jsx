import React, { use, useContext } from 'react'
import { RouterProvider } from 'react-router'
import router from './app.routes';
import { AppContext } from './Context';
import EnquiryForm from './components/EnquiryForm/EnquiryForm';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const { loading, popUpForm } = useContext(AppContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {popUpForm && <EnquiryForm />}
      <RouterProvider router={router} />
    </>
  )
}

export default App;