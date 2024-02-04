import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homes from './components/Homes'
import Header from './components/Header/Header'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homes />} />
      </Routes>
    </>
  )
}

export default App
