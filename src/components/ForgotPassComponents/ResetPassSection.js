import React from 'react'

const BannerSection = () => {
    return (
        <div class="login-section padding-top padding-bottom light-version">
        <div class=" container">
            <div class="row g-5 align-items-center flex-md-row-reverse">
                <div class="col-lg-5">
                    <div class="account-wrapper">
                        <h3 class="title">Reset Password</h3>
                        <form class="account-form">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput"
                                    placeholder="name@example.com"></input>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-group px-3">
                                <div class="d-flex justify-content-between flex-wrap pt-sm-2">
                                    <a href="signin.html">SignIn</a>
                                    <a href="signup.html">SignUp</a>
                                </div>
                            </div>
                            <div class="form-group mb-0">
                                <button class="d-block default-btn move-top"><span>Reset Now</span></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="account-img">
                        <img src="images/account/01.png" alt="shape-image"></img>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default BannerSection