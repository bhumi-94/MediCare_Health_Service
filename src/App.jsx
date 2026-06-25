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
import PatientDashboard from './Pages/PatientDashboard'
import DoctorDashboard from './Pages/DoctorDashboard'
import AccountCreated from './Components/AccountCreated'



const App = () => {
  return (

    <div>
      
    
    <Routes>
`     <Route path='/' element={ <Home />}/>
`     <Route path='/about' element={<About /> }/>
`     <Route path='/contact' element={ <Contact />}/>
`     <Route path='/findDoctors' element={ <FindDoctors />}/>
`     <Route path='/doctor-profile/:doctorId' element={ <DoctorProfile />}/>
`     <Route path='/login' element={ <Login />}/>
`     <Route path='/sign-up' element={ <SignUp />}/>
`     <Route path='/book-appointment' element={ <BookAppointment />}/>
`     <Route path='/book-appointment/:doctorId' element={ <DoctorProfile />}/>
`     <Route path='/patient-dashboard' element={ <PatientDashboard />}/>
`     <Route path='/doctor-dashboard' element={ <DoctorDashboard />}/>
`     <Route path='/specialities' element={ <Specialities />}/>
`     <Route path='/account-created' element={ <AccountCreated />}/>
`    
    </Routes>

    </div>
  )
}

export default App
