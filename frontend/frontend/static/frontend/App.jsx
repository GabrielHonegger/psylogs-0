import { IdentificationDataForm, NavBar, PatientTable, Register, Login } from './components'
import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Redirect, useLocation, Navigate } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch('/api/check-authentication', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.authenticated) {
            setAuthenticated(true);
          } else {
            setAuthenticated(false);
          }
        } else {
          throw new Error('Failed to check authentication');
        }
        
      } catch (error) {
        console.error('Error during authentication check:', error)
      }
    };

    checkAuthentication();
  }, []);

  return (
    <div>
      {location.pathname !== '/register' && <NavBar />}
      <Routes>
        <Route path='/register' element={!authenticated ? <Register /> : <Navigate to='/' replace />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/patients' element={authenticated ? <PatientTable /> : <Navigate to='/register' replace />} />
        <Route path='' element={authenticated ? <IdentificationDataForm /> : <Navigate to='/register' replace />} />
        <Route path='*' element={authenticated ? <IdentificationDataForm /> : <Navigate to='/register' replace />}/>
      </Routes>
    </div>
  )
}

export default App
