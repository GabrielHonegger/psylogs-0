import { IdentificationDataForm, NavBar, PatientTable, Register, Login } from './components'
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Redirect, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/register' && <NavBar />}
      <Routes>
        <Route path='/register'element={<Register />}/>
        <Route path='/patients' element={<PatientTable />} />
        <Route path='*' element={<IdentificationDataForm />}/>
        <Route path='' element={<IdentificationDataForm />} />
      </Routes>
    </div>
  )
}

export default App
