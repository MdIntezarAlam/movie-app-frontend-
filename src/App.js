import React from 'react'
import Header from './component/Header'
import { Router, Routes, Route } from 'react-router-dom'
import { Movies, Admin, HomePages, Auth } from './component/index'
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </>
  )
}

export default App