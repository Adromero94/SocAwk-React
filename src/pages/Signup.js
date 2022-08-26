import React, { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useAuthValue } from 'context/AuthContext'
import { useNavigate } from 'react-router-dom'
import SignupForm from 'components/SignupForm'
import SignupOptions from 'components/SignupOptions'

const Signup = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { setTimeActive } = useAuthValue()
  const navigate = useNavigate()

  const validatePassword = () => {
    let isValid = true
    if (state.password !== '' && state.confirmPassword !== '') {
      if (state.password !== state.confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = (e) => {
    e.preventDefault()
    setError('')
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      setLoading(true)
      createUserWithEmailAndPassword(auth, state.email, state.password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then((res) => {
              setLoading(false)
              setTimeActive(true)
              navigate('/verify-email')
              setState({
                email: '',
                password: '',
                confirmPassword: '',
              })
            })
            .catch((err) => {
              alert(err.message)
              setLoading(false)
            })
        })
        .catch((err) => {
          setLoading(false)
          setError(err.message)
        })
    }
  }

  return (
    <div className="login-section light-version padding-top padding-bottom">
      <div className=" container">
        <div className="row g-5 align-items-center flex-md-row-reverse">
          <div className="col-lg-5">
            <div className="account-wrapper">
              <h3 className="title">Sign Up</h3>
              {error && <span style={{color:'red'}}>{error}</span> }
              <SignupForm
                register={register}
                loading={loading}
                state={state}
                setState={setState}
              />
              <SignupOptions />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="account-img">
              <img src="images/01.png" alt="shape-login" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
