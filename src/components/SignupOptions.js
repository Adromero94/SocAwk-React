import React from 'react'

const SignupOptions = () => {
  return (
    <div className="account-bottom">
      <span className="d-block cate pt-10">
        Already Have an Account? <a href="signin.html"> Sign In</a>
      </span>
      <span className="or">
        <span>or</span>
      </span>
      <h5 className="subtitle">Signup With Social Media</h5>
      <ul className="social-media social-color lab-ul d-flex justify-content-center">
        <li>
          <a href="/" className="facebook">
            <i className="icofont-facebook"></i>
          </a>
        </li>
        <li>
          <a href="/" className="twitter">
            <i className="icofont-twitter"></i>
          </a>
        </li>
        <li>
          <a href="/" className="linkedin">
            <i className="icofont-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="/" className="instagram">
            <i className="icofont-instagram"></i>
          </a>
        </li>
        <li>
          <a href="/" className="pinterest">
            <i className="icofont-pinterest"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SignupOptions
