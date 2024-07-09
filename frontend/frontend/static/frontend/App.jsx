import { IdentificationDataForm, NavBar, PatientTable } from './components'
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/patients' element={<PatientTable />} />
        <Route path='*' element={<IdentificationDataForm />}/>
        <Route path='' element={<IdentificationDataForm />} />
      </Routes>
    </div>
  )
}

export default App
