import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './MainLayout.jsx'
import MainPage from './pages/MainPage.jsx'
import AboutUs from './pages/AboutUs.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      	<Route exact path='/' element={<MainLayout/>}>
      		<Route exact path='/' element={<MainPage/>}/>
      		<Route exact path='/about-us' element={<AboutUs/>}/>
    		</Route>
   		</Routes>
		</BrowserRouter>
  )
}

export default App
