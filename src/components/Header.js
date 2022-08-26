import React from 'react'

const Header = () => {
  return (
    <header class="header light-version">
      <div class="container-fluid">
        <div class="header__content">
          <div class="header__logo">
            <a href="/home">
              <img src="images/logo/SocAwk Blue transparent.png" alt="logo" />
            </a>
          </div>

          <form action="#" class="header__search">
            <input
              type="text"
              placeholder="Search items, collectibles, Accounts"
            />
            <button type="button">
              <i class="icofont-search-2"></i>
            </button>
            <button type="button" class="close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
              </svg>
            </button>
          </form>
          <div class="header__menu ms-auto">
            <ul class="header__nav mb-0">
              <li class="header__nav-item">
                <a
                  class="header__nav-link active home-4"
                  href="/home"
                  role="button"
                  data-bs-toggle=""
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-offset="0,10"
                >
                  Home
                </a>
              </li>
              <li class="header__nav-item">
                <a
                  class="header__nav-link"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-offset="0,10"
                >
                  Explore
                </a>

                <ul class="dropdown-menu header__nav-menu">
                  <li>
                    <a class="drop-down-item" href="explore.html">
                      Categories<span role='img' aria-label='emoji'>❓</span>
                    </a>
                  </li>
                  <li>
                    <a class="drop-down-item" href="explore-2.html">
                      Comic Books<span role='img' aria-label='emoji'>💥</span>
                    </a>
                  </li>
                  <li>
                    <a class="drop-down-item" href="explore-3.html">
                      Comic Art<span role='img' aria-label='emoji'>💣</span>
                    </a>
                  </li>
                  <li>
                    <a class="drop-down-item" href="explore-4.html">
                      Trading Cards<span role='img' aria-label='emoji'>🃏</span>
                    </a>
                  </li>
                  <li>
                    <a class="drop-down-item" href="explore-5.html">
                      Trending Figurines<span role='img' aria-label='emoji'>🕴️</span>
                    </a>
                  </li>
                  <li>
                    <a class="drop-down-item" href="explore-6.html">
                      Gaming Accounts<span role='img' aria-label='emoji'>🎮</span>
                    </a>
                  </li>
                  <li>
                    <a class="drop-down-item" href="explore-7.html">
                      All Art<span role='img' aria-label='emoji'>🎨</span>
                    </a>
                  </li>
                  {/* <!-- <li><a class="drop-down-item" href="auction.html">Auction Page</a></li> --> */}
                </ul>
              </li>

              <li class="header__nav-item">
                <a
                  class="header__nav-link"
                  href="coming-soon.html"
                  role="button"
                  data-bs-toggle=""
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-offset="0,10"
                >
                  Merch
                </a>
              </li>

              <li class="header__nav-item">
                <a
                  class="header__nav-link"
                  href="blog.html"
                  role="button"
                  data-bs-toggle=""
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-offset="0,10"
                >
                  Blog
                </a>
              </li>
              <li class="header__nav-item">
                <a
                  class="header__nav-link"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-offset="0,10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z" />
                  </svg>
                </a>

                <ul class="dropdown-menu header__nav-menu">
                  <li>
                    <a class="drop-down-item" href="about-us.html">
                      About us
                    </a>
                  </li>
                  <li>
                    <a class="drop-down-item" href="how-it-works.html">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a class="drop-down-item" href="contact.html">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a class="drop-down-item" href="forgot-pass.html">
                      Forgot Password
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="header__actions">
            <div class="header__action header__action--search">
              <button class="header__action-btn" type="button">
                <i class="icofont-search-1"></i>
              </button>
            </div>

            <div class="header__action header__action--profile">
              <div class="dropdown">
                <a
                  class="dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-offset="-100,10"
                >
                  <span data-blast="bgColor">
                    <i class="icofont-user"></i>
                  </span>{' '}
                  <span class="d-none d-md-inline">Account</span>
                </a>

                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="author.html">
                      <span class="me-1">
                        <i class="icofont-options"></i>
                      </span>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="activity.html">
                      <span class="me-1">
                        <i class="icofont-lightning-ray"></i>
                      </span>
                      Activity
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/signup">
                      <span class="me-1">
                        <i class="icofont-space-shuttle"></i>
                      </span>
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="signin.html">
                      <span class="me-1">
                        <i class="icofont-login"></i>
                      </span>{' '}
                      Sign In
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li>
                    <a class="dropdown-item" href="/">
                      {' '}
                      Sign Out{' '}
                      <span class="ms-1">
                        <i class="icofont-logout"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="wallet-btn">
              <a href="checkout.html">
                <span>
                  <i class="icofont-wallet" data-blast="color"></i>
                </span>{' '}
                <span class="d-none d-md-inline">Checkout</span>{' '}
              </a>
            </div>
          </div>

          <button class="menu-trigger header__btn" id="menu05">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
