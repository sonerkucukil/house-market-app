import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import ForgotPassword from './pages/ForgotPassword'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element ={<Explore />} />
          <Route path='/offers' element ={<Offers />} />
          <Route path='/profile' element ={<SignIn />}/>
          <Route path='/sign-in' element ={<SignIn />} />
          <Route path='/sign-up' element ={<SignUp />} />
          <Route path='/forget-password' element ={<ForgotPassword/>} />
        </Routes>
        <Navbar />
      </Router>
    </>
  )
}

export default App