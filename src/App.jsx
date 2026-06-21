import React from 'react'
import Logo  from './assets/logo'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import FindDoctors from './Pages/FindDoctors'
import DoctorProfile from './Pages/DoctorProfile'
import Login from './Pages/Login'
import Specialities from './Pages/Specialities'
import SignUp from './Pages/SignUp'
import BookAppointment from './Pages/BookAppointment'



const App = () => {
  return (

    <div>
      

    <Routes>
`     <Route path='/' element={ <Home />}/>
`     <Route path='/about' element={<About /> }/>
`     <Route path='/contact' element={ <Contact />}/>
`     <Route path='/findDoctors' element={ <FindDoctors />}/>
`     <Route path='/findDoctors/:docid' element={ <DoctorProfile />}/>
`     <Route path='/login' element={ <Login />}/>
`     <Route path='/sign-up' element={ <SignUp />}/>
`     <Route path='/book-appointment' element={ <BookAppointment />}/>
`     <Route path='/specialities' element={ <Specialities />}/>
`    
    </Routes>



    </div>
  )
}

export default App
