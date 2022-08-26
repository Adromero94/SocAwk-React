import React from 'react'

const BannerSection = () => {
  return (
    <section
      class="banner-section light-version"
      style={{ backgroundImage: 'url(images/banner/bg-5.jpg)' }}
    >
      <div class="container">
        <div class="banner-wrapper">
          <div class="row align-items-center g-5">
            <div class="col-lg-7">
              <div class="banner-content">
                <h1>
                  {' '}
                  <center>
                    {' '}
                    <span class="theme-color-4">Showcase</span>, Sell &{' '}
                    <span class="theme-color-4">
                      {' '}
                      <br /> Trade
                    </span>{' '}
                    Your Collectibles.{' '}
                  </center>
                </h1>{' '}
                <center>
                  <p>
                    Digital marketplace for collectibles. Buy, sell, and
                    discover exclusive collections
                  </p>
                </center>
                <div class="banner-btns d-flex flex-wrap">
                  <a
                    data-blast="bgColor"
                    href="explore.html"
                    class="default-btn move-top"
                  >
                    <span>Explore</span>{' '}
                  </a>
                  <a href="signin.html" class="default-btn move-right">
                    <span>Log in</span>{' '}
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="nft-slider-wrapper">
                <div class="swiper banner-item-slider-2">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="nft-item light-home-2">
                        <div class="nft-inner">
                          <div class="nft-item-top d-flex justify-content-between align-items-center">
                            <div class="author-part">
                              <ul class="author-list d-flex">
                                <li class="single-author d-flex align-items-center">
                                  <a href="author.html" class="veryfied">
                                    <img
                                      loading="lazy"
                                      src="images/seller/04.png"
                                      alt="author-img"
                                    />
                                  </a>
                                  <h6>
                                    <a href="author.html">rasselmrh</a>
                                  </h6>
                                </li>
                              </ul>
                            </div>
                            <div class="more-part">
                              <div class=" dropstart">
                                <a
                                  class=" dropdown-toggle"
                                  href="/"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  data-bs-offset="25,0"
                                >
                                  <i class="icofont-flikr"></i>
                                </a>

                                <ul class="dropdown-menu">
                                  <li>
                                    <a class="dropdown-item" href="/">
                                      <span>
                                        <i class="icofont-warning"></i>
                                      </span>{' '}
                                      Report{' '}
                                    </a>
                                  </li>
                                  <li>
                                    <a class="dropdown-item" href="/">
                                      <span>
                                        <i class="icofont-reply"></i>
                                      </span>
                                      Share
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="nft-item-bottom">
                            <div class="nft-thumb">
                              <img
                                loading="lazy"
                                src="images/new/comic2.jpg"
                                alt="nft-img"
                              />
                            </div>
                            <div class="nft-content">
                              <h4>
                                <a href="item-details.html">Black Cat </a>{' '}
                              </h4>
                              <div class="price-like d-flex justify-content-between align-items-center">
                                <p class="nft-price">
                                  Price:{' '}
                                  <span class="yellow-color">0.34 ETH</span>
                                </p>
                                <a href="/" class="nft-like">
                                  <i class="icofont-heart"></i>
                                  230
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="nft-item light-home-2">
                        <div class="nft-inner">
                          <div class="nft-item-top d-flex justify-content-between align-items-center">
                            <div class="author-part">
                              <ul class="author-list d-flex">
                                <li class="single-author d-flex align-items-center">
                                  <a href="author.html" class="veryfied">
                                    <img
                                      loading="lazy"
                                      src="images/seller/04.png"
                                      alt="author-img"
                                    />
                                  </a>
                                  <h6>
                                    <a href="author.html">Gucci Lucas</a>
                                  </h6>
                                </li>
                              </ul>
                            </div>
                            <div class="more-part">
                              <div class=" dropstart">
                                <a
                                  class=" dropdown-toggle"
                                  href="/"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  data-bs-offset="25,0"
                                >
                                  <i class="icofont-flikr"></i>
                                </a>

                                <ul class="dropdown-menu">
                                  <li>
                                    <a class="dropdown-item" href="/">
                                      <span>
                                        <i class="icofont-warning"></i>
                                      </span>{' '}
                                      Report{' '}
                                    </a>
                                  </li>
                                  <li>
                                    <a class="dropdown-item" href="/">
                                      <span>
                                        <i class="icofont-reply"></i>
                                      </span>
                                      Share
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="nft-item-bottom">
                            <div class="nft-thumb">
                              <img
                                loading="lazy"
                                src="images/new_images/action-figure.png"
                                alt="nft-img"
                              />
                            </div>
                            <div class="nft-content">
                              <h4>
                                <a href="item-details.html">EUPHORIA de</a>{' '}
                              </h4>
                              <div class="price-like d-flex justify-content-between align-items-center">
                                <p class="nft-price">
                                  Price:{' '}
                                  <span class="yellow-color">0.34 ETH</span>
                                </p>
                                <a href="/" class="nft-like">
                                  <i class="icofont-heart"></i>
                                  230
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="swiper-slide">
                      <div class="nft-item light-home-2">
                        <div class="nft-inner">
                          <div class="nft-item-top d-flex justify-content-between align-items-center">
                            <div class="author-part">
                              <ul class="author-list d-flex">
                                <li class="single-author d-flex align-items-center">
                                  <a href="author.html" class="veryfied">
                                    <img
                                      loading="lazy"
                                      src="images/seller/03.png"
                                      alt="author-img"
                                    />
                                  </a>
                                  <h6>
                                    <a href="author.html">Imo35 ucas</a>
                                  </h6>
                                </li>
                              </ul>
                            </div>
                            <div class="more-part">
                              <div class=" dropstart">
                                <a
                                  class=" dropdown-toggle"
                                  href="/"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  data-bs-offset="25,0"
                                >
                                  <i class="icofont-flikr"></i>
                                </a>

                                <ul class="dropdown-menu">
                                  <li>
                                    <a class="dropdown-item" href="/">
                                      <span>
                                        <i class="icofont-warning"></i>
                                      </span>{' '}
                                      Report{' '}
                                    </a>
                                  </li>
                                  <li>
                                    <a class="dropdown-item" href="/">
                                      <span>
                                        <i class="icofont-reply"></i>
                                      </span>
                                      Share
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="nft-item-bottom">
                            <div class="nft-thumb">
                              <img
                                loading="lazy"
                                src="images/new_images/trading_cards.png"
                                alt="nft-img"
                              />
                            </div>
                            <div class="nft-content">
                              <h4>
                                <a href="item-details.html">Future Rocket</a>{' '}
                              </h4>
                              <div class="price-like d-flex justify-content-between align-items-center">
                                <p class="nft-price">
                                  Price:{' '}
                                  <span class="yellow-color">0.34 ETH</span>
                                </p>
                                <a href="/" class="nft-like">
                                  <i class="icofont-heart"></i>
                                  230
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="nft-item light-home-2">
                        <div class="nft-inner">
                          <div class="nft-item-top d-flex justify-content-between align-items-center">
                            <div class="author-part">
                              <ul class="author-list d-flex">
                                <li class="single-author d-flex align-items-center">
                                  <a href="author.html" class="veryfied">
                                    <img
                                      loading="lazy"
                                      src="images/seller/04.png"
                                      alt="author-img"
                                    />
                                  </a>
                                  <h6>
                                    <a href="author.html">lcus x3</a>
                                  </h6>
                                </li>
                              </ul>
                            </div>
                            <div class="more-part">
                              <div class=" dropstart">
                                <a
                                  class=" dropdown-toggle"
                                  href="/"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  data-bs-offset="25,0"
                                >
                                  <i class="icofont-flikr"></i>
                                </a>

                                <ul class="dropdown-menu">
                                  <li>
                                    <a class="dropdown-item" href="/">
                                      <span>
                                        <i class="icofont-warning"></i>
                                      </span>{' '}
                                      Report{' '}
                                    </a>
                                  </li>
                                  <li>
                                    <a class="dropdown-item" href="/">
                                      <span>
                                        <i class="icofont-reply"></i>
                                      </span>
                                      Share
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="nft-item-bottom">
                            <div class="nft-thumb">
                              <img
                                loading="lazy"
                                src="images/new/comic1.jpg"
                                alt="nft-img"
                              />
                            </div>
                            <div class="nft-content">
                              <h4>
                                <a href="item-details.html">Silly C4T de</a>{' '}
                              </h4>
                              <div class="price-like d-flex justify-content-between align-items-center">
                                <p class="nft-price">
                                  Price:{' '}
                                  <span class="yellow-color">0.34 ETH</span>
                                </p>
                                <a href="/" class="nft-like">
                                  <i class="icofont-heart"></i>
                                  230
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerSection
