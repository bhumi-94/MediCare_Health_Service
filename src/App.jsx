import React from 'react'
import Logo  from './assets/logo'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import FindDoctors from './Pages/FindDoctors'
import Login from './Pages/Login'
import Specialities from './Pages/Specialities'
import Navbar from './Components/Navbar'


const App = () => {
  return (

    <div>
    <Navbar />

    <Routes>
`     <Route path='/' element={ <Home />}/>
`     <Route path='/about' element={<About /> }/>
`     <Route path='/contact' element={ <Contact />}/>
`     <Route path='/finddoctors' element={ <FindDoctors />}/>
`     <Route path='/login' element={ <Login />}/>
`     <Route path='/specialities' element={ <Specialities />}/>
`    
    </Routes>



    </div>
  )
}

export default App
