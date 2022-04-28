import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './MainLayout.jsx'
import MainPage from './pages/MainPage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Privacy from './pages/Privacy.jsx'
import ApiLayout from './layouts/ApiLayout.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      	<Route exact path='/' element={<MainLayout/>}>
     	    <Route exact path='/' element={<MainPage/>}/>
          <Route exact path='/about-us' element={<AboutUs/>}/>
          <Route exact path='/privacy' element={<Privacy/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
        <Route exact path="/api/" element={<ApiLayout/>}>
        	<Route exact path="./" element={<Privacy/>}/>
          <Route path="*" element={<PageNotFound/>}/>
       	</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
