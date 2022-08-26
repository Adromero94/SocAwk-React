import React from 'react'
import Spinner from './Spinner'

const SignupForm = ({ state, setState, loading, register }) => {
  return (
    <form className="account-form">
      {/* <div className="form-floating mb-3">
      <input
        type="text"
        className="form-control"
        id="userIdInput"
        placeholder="user-id"
      />
      <label for="userIdInput">User ID</label>
    </div> */}
      <div className="form-floating mb-3">
        <input
          type="email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          value={state.password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          value={state.confirmPassword}
          onChange={(e) =>
            setState({ ...state, confirmPassword: e.target.value })
          }
          className="form-control"
          id="confirmPass"
          placeholder="Confirm Password"
        />
        <label for="confirmPass">Confirm Password</label>
      </div>
      <div className="form-group">
        <div className="d-flex justify-content-between flex-wrap pt-sm-2">
          <div className="checkgroup">
            <input type="checkbox" name="remember" id="remember" />
            <label for="remember">Remember Me</label>
          </div>
          <a href="forgot-pass.html">Forgot Password?</a>
        </div>
      </div>
      {loading && <Spinner />}
      <div className="form-group">
        <button
          className="d-block default-btn move-top"
          onClick={(e) => register(e)}
        >
          <span>Signup Now</span>
        </button>
      </div>
    </form>
  )
}

export default SignupForm
