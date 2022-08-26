import React from 'react'

const Footer = () => {
  return (
    <footer class="footer-section light-version">
      <div
        class="footer-top"
        style={{ backgroundImage: 'url(images/footer/bg-light.jpg)' }}
      >
        <div class="footer-newsletter">
          <div class="container">
            <div class="row g-4 align-items-center justify-content-center">
              {/* <!-- <div class="col-lg-6">
                            <div class="newsletter-part">
                                <div class="ft-header">
                                    <h4>Get The Latest Rarible Updates</h4>
                                </div>
                                <form action="/">
                                    <input type="email" placeholder="Your Mail Address">
                                    <button type="submit" data-blast="bgColor"> Subscribe now</button>
                                </form>
                            </div>
                        </div> --> */}
              <div class="col-lg-6">
                <div class="social-part ps-lg-5">
                  <div class="ft-header">
                    <h2>
                      <center>Join the Community</center>
                    </h2>
                  </div>
                  <ul class="social-list d-flex flex-wrap justify-content-center align-items-center mb-0">
                    <li class="social-link">
                      <a href="/" data-blast="bgColor">
                        <i class="icofont-twitter"></i>
                      </a>
                    </li>
                    <li class="social-link">
                      <a href="/" data-blast="bgColor">
                        <i class="icofont-twitch"></i>
                      </a>
                    </li>
                    <li class="social-link">
                      <a href="/" data-blast="bgColor">
                        <i class="icofont-youtube-play"></i>
                      </a>
                    </li>
                    <li class="social-link">
                      <a href="/" data-blast="bgColor">
                        <i class="icofont-instagram"></i>
                      </a>
                    </li>
                    <li class="social-link">
                      <a href="/" data-blast="bgColor">
                        <i class="icofont-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-links padding-top padding-bottom">
          <div class="container">
            <div class="row g-5 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-5 justify-content-between align-items-center">
              {/* <!-- <div class="col">
                            <div class="footer-link-item">
                                <h5>About</h5>
                                <ul class="footer-link-list">
                                    <li><a href="/" class="footer-link">Explore</a></li>
                                    <li><a href="/" class="footer-link">How it works</a></li>
                                    <li><a href="/" class="footer-link">Support</a></li>
                                    <li><a href="/" class="footer-link">Become a partner</a></li>

                                </ul>
                            </div>
                        </div> --> */}
              <div class="col">
                <div class="footer-link-item">
                  <h5>Explore</h5>
                  <ul class="footer-link-list">
                    <li>
                      <a href="explore-2.html" class="footer-link">
                        Comic Books
                      </a>
                    </li>
                    <li>
                      <a href="explore-3.html" class="footer-link">
                        Comic Art
                      </a>
                    </li>
                    <li>
                      <a href="explore-4.html" class="footer-link">
                        Trading Cards
                      </a>
                    </li>
                    <li>
                      <a href="explore-5.html" class="footer-link">
                        Trending Figurines
                      </a>
                    </li>
                    <li>
                      <a href="explore-6.html" class="footer-link">
                        Gaming Accounts
                      </a>
                    </li>
                    <li>
                      <a href="explore-7.html" class="footer-link">
                        All Art
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col">
                <div class="footer-link-item">
                  <h5>Company</h5>
                  <ul class="footer-link-list">
                    <li>
                      <a href="about-us.html" class="footer-link">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="how-it-works.html" class="footer-link">
                        How it works
                      </a>
                    </li>
                    <li>
                      <a href="how-it-works.html" class="footer-link">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="contact.html" class="footer-link">
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a href="blog.html" class="footer-link">
                        Blogs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col">
                <div class="footer-link-item">
                  <h5>Policies</h5>
                  <ul class="footer-link-list">
                    <li>
                      <a href="/" class="footer-link">
                        Legal
                      </a>
                    </li>
                    <li>
                      <a href="privacy-policy.html" class="footer-link">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/" class="footer-link">
                        Disclaimer
                      </a>
                    </li>
                    <li>
                      <a href="/" class="footer-link">
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- <div class="col">
                            <div class="footer-link-item">
                                <h5>Comunity</h5>
                                <ul class="footer-link-list">
                                    <li><a href="/" class="footer-link">NFT Token</a></li>
                                    <li><a href="/" class="footer-link">Discusion</a></li>
                                    <li><a href="/" class="footer-link">Voting</a></li>
                                    <li><a href="/" class="footer-link">Suggest Feature</a></li>
                                    <li><a href="/" class="footer-link">Language</a></li>
                                </ul>
                            </div>
                        </div> --> */}
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p class="text-center py-4 mb-0">All rights reserved &copy; SocAwk</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
