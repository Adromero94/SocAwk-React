import React, { useState, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Signup from 'pages/Signup'
import { AuthProvider } from 'context/AuthContext'
import { auth } from 'firebase/firebase'
import PrivateRoute from 'Routes/PrivateRoute'
import VerifyEmail from 'components/VerifyEmail'
import HomeScreen from 'pages/Home'
import Contact from 'pages/Contact'
import AboutUs from 'pages/AboutUs'
import Profile from 'pages/Profile'
import ForgotPass from 'pages/ForgotPass'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <h1>Profile</h1>
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            !currentUser?.emailVerified ? <div /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/signup"
          element={
            !currentUser?.emailVerified ? (
              <Signup />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
      </Routes>
      <Footer />
    </AuthProvider>
  )
}

export default App
