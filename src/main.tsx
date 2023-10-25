//---------> Configs
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

//---------> Alerts
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />

    {/* This component aloows the alerts handler in the system */}
    <ToastContainer 
      position ={"bottom-right"}
      autoClose={2000}
      hideProgressBar={false}
      closeOnClick={true}
      draggable={true}
      pauseOnHover={false}
      theme= "light"
    />
  </React.StrictMode>
)
