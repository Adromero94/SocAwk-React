import React from 'react'

const ProfileSection = () => {
    return (
        <section class="profile-section light-version padding-top padding-bottom">
        <div class="container">
            <div class="section-wrapper">
                <div class="member-profile">
                    <div class="profile-item">
                        <div class="profile-cover">
                            <img src="images/profile/cover.jpg" alt="cover-pic"></img>
                            <div class="edit-photo custom-upload">
                                <div class="file-btn"><i class="icofont-camera"></i>
                                    Edit Photo</div>
                                <input type="file"></input>
                            </div>
                        </div>
                        <div class="profile-information">
                            <div class="profile-pic">
                                <img src="images/profile/Profile.jpg" alt="DP"></img>
                                <div class="custom-upload">
                                    <div class="file-btn">
                                        <span class="d-none d-lg-inline-block"> <i class="icofont-camera"></i>
                                            Edit</span>
                                        <span class="d-lg-none mr-0"><i class="icofont-plus"></i></span>
                                    </div>
                                    <input type="file"></input>
                                </div>
                            </div>
                            <div class="profile-name">
                                <h4>Alex joe</h4>
                                <p>@alexjoe.jxe</p>
                            </div>
                            <ul class="profile-contact">
                                <li class="crypto-copy">
                                    <div id="cryptoCode" class="crypto-page">
                                        <input id="cryptoLink" value="0x731F9FBF4163D47B0F581DD9EC45C9" readonly></input>
                                        <div id="cryptoCopy" data-bs-toggle="tooltip" data-bs-placement="top"
                                            title="Copy Address">
                                            <span class="copy-icon">
                                                <i class="icofont-ui-copy" aria-hidden="true"
                                                    data-copytarget="#cryptoLink"></i>
                                            </span>

                                        </div>
                                    </div>

                                </li>
                                <li>
                                    <a href="#">
                                        <div class="icon"><i class="icofont-ui-rate-add"></i></div>
                                        <div class="text">
                                            <p>Follow</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="icon"><i class="icofont-speech-comments"></i></div>
                                        <div class="text">
                                            <p>Send Message</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div class="profile-item d-none">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <a href="#"><img src="images/profile/Profile.jpg" alt="profile"></img></a>
                            </div>
                            <div class="lab-content">
                                <div class="profile-name">
                                    <div class="p-name-content">
                                        <h4>William Smith</h4>
                                        <p>Active 02 Minutes Ago</p>
                                    </div>

                                    <div class="contact-button">
                                        <button class="contact-btn">
                                            <i class="icofont-info-circle"></i>
                                        </button>
                                    </div>
                                </div>
                                <ul class="profile-contact">
                                    <li>
                                        <a href="#">
                                            <div class="icon"><i class="icofont-user"></i></div>
                                            <div class="text">
                                                <p>Add Friends</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="icon"><i class="icofont-envelope"></i></div>
                                            <div class="text">
                                                <p>Publice Message</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="icon"><i class="icofont-envelope"></i></div>
                                            <div class="text">
                                                <p>Private Message</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="profile-details">
                        <nav class="profile-nav">
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <button class="nav-link active" id="nav-allNft-tab" data-bs-toggle="tab"
                                    data-bs-target="#allNft" type="button" role="tab" aria-controls="allNft"
                                    aria-selected="true">All NFT's</button>
                                <button class="nav-link" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#about"
                                    type="button" role="tab" aria-controls="about" aria-selected="false">About</button>
                                <button class="nav-link" id="nav-activity-tab" data-bs-toggle="tab"
                                    data-bs-target="#activity" type="button" role="tab" aria-controls="activity"
                                    aria-selected="false">Activity</button>
                                <button class="nav-link" id="nav-follower-tab" data-bs-toggle="tab"
                                    data-bs-target="#follower" type="button" role="tab" aria-controls="follower"
                                    aria-selected="false">Follower <span class="item-number">231</span></button>
                                <button class="nav-link" id="nav-following-tab" data-bs-toggle="tab"
                                    data-bs-target="#following" type="button" role="tab" aria-controls="following"
                                    aria-selected="false">Following <span class="item-number">145</span></button>
                                <button class="nav-link" id="nav-wallet-tab" data-bs-toggle="tab"
                                    data-bs-target="#wallet" type="button" role="tab" aria-controls="wallet"
                                    aria-selected="false">My Wallet</button>
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Setting
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Profile</a></li>
                                        <li><a class="dropdown-item" href="#">Privacy</a></li>
                                        <li><a class="dropdown-item" href="#">Block user</a></li>
                                    </ul>
                                </div>

                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            {/* <!-- All NFT tab --> */}
                            <div class="tab-pane activity-page fade show active" id="allNft" role="tabpanel">
                                <div>
                                    <div class="row">
                                        <div class="col-xl-9">
                                            <article>
                                                <div class="activity-tab">
                                                    <ul class="nav nav-pills mb-30 px-2" id="pills-tab" role="tablist">
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link" id="pills-personal-tab"
                                                                data-bs-toggle="pill" data-bs-target="#pills-personal"
                                                                type="button" role="tab" aria-controls="pills-personal"
                                                                aria-selected="false">
                                                                <i class="icofont-flask"></i>
                                                                Create NFT</button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link active" id="pills-mentions-tab"
                                                                data-bs-toggle="pill" data-bs-target="#pills-mentions"
                                                                type="button" role="tab" aria-controls="pills-mentions"
                                                                aria-selected="true"><i class="icofont-flash"></i>
                                                                On Sale</button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link" id="pills-favorites-tab"
                                                                data-bs-toggle="pill" data-bs-target="#pills-favorites"
                                                                type="button" role="tab" aria-controls="pills-favorites"
                                                                aria-selected="false"><i class="icofont-license"></i>
                                                                owned</button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link" id="pills-groups-tab"
                                                                data-bs-toggle="pill" data-bs-target="#pills-groups"
                                                                type="button" role="tab" aria-controls="pills-groups"
                                                                aria-selected="false"><i class="icofont-puzzle"></i>
                                                                Created</button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link" id="pills-friends-tab"
                                                                data-bs-toggle="pill" data-bs-target="#pills-friends"
                                                                type="button" role="tab" aria-controls="pills-friends"
                                                                aria-selected="false"><i class="icofont-library"></i>
                                                                Collection</button>
                                                        </li>

                                                        <li class="custom-select">
                                                            <select>
                                                                <option value="1">All</option>
                                                                <option value="2">Recent</option>
                                                                <option value="3">Relevant</option>
                                                                <option value="4">Popular</option>
                                                            </select>
                                                        </li>
                                                    </ul>
                                                    <div class="tab-content activity-content" id="pills-tabContent">
                                                        <div class="tab-pane fade" id="pills-personal" role="tabpanel"
                                                            aria-labelledby="pills-personal-tab">
                                                            <div class="row">
                                                                <div class="col">
                                                                    {/* <!-- create item --> */}
                                                                    <div class="create-nft py-5 px-4">
                                                                        <form class="create-nft-form">
                                                                            {/* <!-- upload field --> */}
                                                                            <div class="upload-item mb-30">
                                                                                <p>PNG,JPG,JPEG,SVG,WEBP,Mp3 & Mp4
                                                                                    (Max-150mb)</p>
                                                                                <div class="custom-upload">
                                                                                    <div class="file-btn"><i
                                                                                            class="icofont-upload-alt"></i>
                                                                                        Upload a file</div>
                                                                                    <input type="file"></input>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- item name input --> */}
                                                                            <div
                                                                                class="form-floating item-name-field mb-3">
                                                                                <input type="text" class="form-control"
                                                                                    id="itemNameInput"
                                                                                    placeholder="Item Name"></input>
                                                                                <label for="itemNameInput">Item
                                                                                    Name</label>
                                                                            </div>
                                                                            {/* <!-- item-description --> */}
                                                                            <div
                                                                                class="form-floating item-desc-field mb-30">
                                                                                <textarea class="form-control"
                                                                                    placeholder="Item Description"
                                                                                    id="itemDesc"></textarea>
                                                                                <label for="itemDesc">Item
                                                                                    Description</label>
                                                                            </div>
                                                                            {/* <!-- item-category --> */}
                                                                            <div class="item-category-field mb-30">
                                                                                <h4>Select Item Catergory</h4>
                                                                                <ul
                                                                                    class="item-cat-list d-flex flex-wrap">
                                                                                    <li class="item-cat-btn active">
                                                                                        <span><i
                                                                                                class="icofont-vector-path"></i></span>
                                                                                        Art
                                                                                    </li>
                                                                                    <li class="item-cat-btn">
                                                                                        <span><i
                                                                                                class="icofont-penalty-card"></i></span>
                                                                                        Trading Cards
                                                                                    </li>
                                                                                    <li class="item-cat-btn">
                                                                                        <span><i
                                                                                                class="icofont-ui-game"></i></span>
                                                                                        Gaming
                                                                                    </li>
                                                                                    <li class="item-cat-btn">
                                                                                        <span><i
                                                                                                class="icofont-music-disk"></i></span>
                                                                                        Music
                                                                                    </li>

                                                                                    <li class="item-cat-btn">
                                                                                        <span><i
                                                                                                class="icofont-twitter"></i></span>
                                                                                        Tweets
                                                                                    </li>
                                                                                    <li class="item-cat-btn">
                                                                                        <span><i
                                                                                                class="icofont-bill"></i></span>
                                                                                        Rare Item
                                                                                    </li>
                                                                                    <li class="item-cat-btn">
                                                                                        <span>
                                                                                            <i class="icofont-box"></i>
                                                                                        </span> Collectibles
                                                                                    </li>
                                                                                    <li class="item-cat-btn">
                                                                                        <span><i
                                                                                                class="icofont-gift"></i></span>
                                                                                        NFT
                                                                                        Gifts
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            {/* <!-- item price --> */}
                                                                            <div class="item-price-field mb-3">
                                                                                <div class="row g-3">
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-floating">
                                                                                            <select class="form-select"
                                                                                                id="selectCrypto"
                                                                                                aria-label="Floating label select">
                                                                                                <option selected>
                                                                                                    Ethereum
                                                                                                </option>
                                                                                                <option value="1">
                                                                                                    BitCoin
                                                                                                </option>
                                                                                                <option value="2">Dollar
                                                                                                </option>
                                                                                                <option value="3">Pound
                                                                                                </option>
                                                                                            </select>
                                                                                            <label
                                                                                                for="selectCrypto">Select
                                                                                                Currency</label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-floating">
                                                                                            <input type="text"
                                                                                                class="form-control"
                                                                                                id="itemPriceInput"
                                                                                                placeholder="Item Price"></input>
                                                                                            <label
                                                                                                for="itemPriceInput">Item
                                                                                                Price</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- Royalites, Size & copy --> */}
                                                                            <div class="item-price-field mb-5">
                                                                                <div
                                                                                    class="row g-3 justify-content-center">
                                                                                    <div class="col-md-6 col-lg-4">
                                                                                        <div class="form-floating">
                                                                                            <input type="text"
                                                                                                class="form-control"
                                                                                                id="royalityInput"
                                                                                                placeholder="Royalities"></input>
                                                                                            <label
                                                                                                for="royalityInput">Royalities</label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6 col-lg-4">
                                                                                        <div class="form-floating">
                                                                                            <input type="text"
                                                                                                class="form-control"
                                                                                                id="sizeInput"
                                                                                                placeholder="Size"></input>
                                                                                            <label for="sizeInput">Size
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6 col-lg-4">
                                                                                        <div class="form-floating">
                                                                                            <input type="text"
                                                                                                class="form-control"
                                                                                                id="itemNumbersInput"
                                                                                                placeholder="Number of Copies"></input>
                                                                                            <label
                                                                                                for="itemNumbersInput">Number
                                                                                                of Copies</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- submit button --> */}
                                                                            <div class="submit-btn-field text-center">
                                                                                <button type="submit">Create
                                                                                    Item</button>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div class="tab-pane fade mentions-section show active"
                                                            id="pills-mentions" role="tabpanel"
                                                            aria-labelledby="pills-mentions-tab">

                                                            <div class="row justify-content-center gx-3 gy-2">
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Jhon
                                                                                                    Doe</a>
                                                                                            </h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/05.gif"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">Walking
                                                                                            On
                                                                                            Air</a> </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            230</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Gucci
                                                                                                    Lucas</a></h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/05.gif"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">EUPHORIA
                                                                                            de</a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            230</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Ecalo
                                                                                                    jers</a></h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/05.gif"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">Mewao
                                                                                            com de</a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            278</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Hola
                                                                                                    moc</a>
                                                                                            </h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/05.gif"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">pet
                                                                                            mice rio</a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            340</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Logicto
                                                                                                    pen</a></h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/05.gif"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">Logical
                                                                                            Impact </a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            330</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">unique
                                                                                                    lo</a></h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part"><i
                                                                                        class="icofont-flikr"></i></div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/04.gif"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">Fly
                                                                                            on high</a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            355</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="load-btn">
                                                                <a href="#" class="default-btn move-bottom"><span>Load
                                                                        More</span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane fade" id="pills-favorites" role="tabpanel"
                                                            aria-labelledby="pills-favorites-tab">

                                                            <div class="row justify-content-center gx-3 gy-2">
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Jhon
                                                                                                    Doe</a>
                                                                                            </h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/04.jpg"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    {/* <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> --> */}
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">Walking
                                                                                            On
                                                                                            Air</a> </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            230</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Gucci
                                                                                                    Lucas</a></h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/02.gif"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    {/* <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> --> */}
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">EUPHORIA
                                                                                            de</a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            230</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Ecalo
                                                                                                    jers</a></h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/02.jpg"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    {/* <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> --> */}
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">Mewao
                                                                                            com de</a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            278</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="load-btn">
                                                                <a href="#" class="default-btn move-bottom"><span>Load
                                                                        More</span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane fade" id="pills-friends" role="tabpanel"
                                                            aria-labelledby="pills-friends-tab">

                                                            <div class="row justify-content-center gx-3 gy-2">
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/02.png"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/04.png"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Jhon
                                                                                                    Doe</a>
                                                                                            </h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/03.gif"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    {/* <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> --> */}
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">Walking
                                                                                            On
                                                                                            Air</a> </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            230</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/04.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Gucci
                                                                                                    Lucas</a></h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/07.jpg"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    {/* <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> --> */}
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">EUPHORIA
                                                                                            de</a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            230</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/05.png"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/02.png"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/05.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Ecalo
                                                                                                    jers</a></h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/05.gif"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    {/* <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> --> */}
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">Mewao
                                                                                            com de</a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            278</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/02.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/07.png"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Hola
                                                                                                    moc</a>
                                                                                            </h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/05.jpg"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    {/* <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> --> */}
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">pet
                                                                                            mice rio</a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            340</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/03.png"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/04.png"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Logicto
                                                                                                    pen</a></h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/05.gif"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    {/* <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> --> */}
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">Logical
                                                                                            Impact </a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            330</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="load-btn">
                                                                <a href="#" class="default-btn move-bottom"><span>Load
                                                                        More</span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane fade" id="pills-groups" role="tabpanel"
                                                            aria-labelledby="pills-groups-tab">
                                                            <div class="row justify-content-center gx-3 gy-2">
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/05.png"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/05.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Jhon
                                                                                                    Doe</a>
                                                                                            </h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/06.gif"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    {/* <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> --> */}
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">Walking
                                                                                            On
                                                                                            Air</a> </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            230</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Gucci
                                                                                                    Lucas</a></h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/04.gif"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    {/* <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> --> */}
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">EUPHORIA
                                                                                            de</a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            230</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/03.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/02.png"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/06.png"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Ecalo
                                                                                                    jers</a></h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/05.jpg"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    {/* <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> --> */}
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">Mewao
                                                                                            com de</a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            278</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/05.png"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/04.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Hola
                                                                                                    moc</a>
                                                                                            </h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/04.gif"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    {/* <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> --> */}
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">pet
                                                                                            mice rio</a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            340</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/04.png"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/07.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">Logicto
                                                                                                    pen</a></h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/10.jpg"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    {/* <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> --> */}
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">Logical
                                                                                            Impact </a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            330</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item light-version">
                                                                        <div class="nft-inner">
                                                                            {/* <!-- nft top part --> */}
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/05.png"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="images/seller/02.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="images/seller/01.gif"
                                                                                                    alt="author-img"></img></a>
                                                                                            <h6><a href="author.html">unique
                                                                                                    lo</a></h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part"><i
                                                                                        class="icofont-flikr"></i></div>
                                                                            </div>
                                                                            {/* <!-- nft-bottom part --> */}
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="images/nft-item/06.jpg"
                                                                                        alt="nft-img"></img>

                                                                                    {/* <!-- nft countdwon --> */}
                                                                                    {/* <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> --> */}
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">Fly
                                                                                            on high</a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            355</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="load-btn">
                                                                <a href="#" class="default-btn move-bottom"><span>Load
                                                                        More</span> </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </article>
                                        </div>

                                        {/* <!-- Aside Part --> */}
                                        <div class="col-xl-3">
                                            <aside class="mt-5 mt-xl-0">
                                                <div class="profile-widget search-widget">
                                                    <div class="widget-inner">
                                                        <div class="widget-title">
                                                            <h5>Search NFT</h5>
                                                        </div>
                                                        <div class="widget-content">
                                                            <p>Search from best Rarest NFT collections</p>
                                                            <div class="form-floating nft-search-input">
                                                                <input type="text" class="form-control"
                                                                    placeholder="Search NFT"></input>
                                                                <label>Search NFT</label>
                                                                <button type="button"> <i
                                                                        class="icofont-search-1"></i></button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="widget widget-instagram">
                                                    <div class="widget-header">
                                                        <h5 class="title">Featured NFT</h5>
                                                    </div>
                                                    <ul class="widget-wrapper d-flex flex-wrap justify-content-center">
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/01.jpg"><img loading="lazy"
                                                                    src="images/nft-item/01.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/02.jpg"><img loading="lazy"
                                                                    src="images/nft-item/02.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/03.jpg"><img loading="lazy"
                                                                    src="images/nft-item/03.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/04.jpg"><img loading="lazy"
                                                                    src="images/nft-item/04.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/05.jpg"><img loading="lazy"
                                                                    src="images/nft-item/05.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/06.jpg"><img loading="lazy"
                                                                    src="images/nft-item/06.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/07.jpg"><img loading="lazy"
                                                                    src="images/nft-item/07.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/08.jpg"><img loading="lazy"
                                                                    src="images/nft-item/08.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/09.jpg"><img loading="lazy"
                                                                    src="images/nft-item/09.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                    </ul>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* <!-- about tab --> */}
                            <div class="tab-pane fade" id="about" role="tabpanel" aria-labelledby="nav-about-tab">
                                <div>
                                    <div class="row">
                                        <div class="col-xl-9">
                                            <article>

                                                <div class="info-card mb-3">
                                                    <div class="info-card-title">
                                                        <h4>About</h4>
                                                    </div>
                                                    <div class="info-card-content">
                                                        <p>Collaboratively innovate compelling mindshare after
                                                            prospective partnerships Competently sereiz long-term
                                                            high-impact internal or "organic" sources via user friendly
                                                            strategic themesr areas creat Dramatically coordinate
                                                            premium partnerships rather than standards compliant
                                                            technologies ernd Dramatically matrix ethical collaboration
                                                            and idea-sharing through opensource methodologies and
                                                            Intrinsicly grow collaborative platforms vis-a-vis effective
                                                            scenarios. Energistically strategize cost effective ideas
                                                            before the worke unde.</p>
                                                    </div>
                                                </div>
                                                <div class="info-card">
                                                    <div class="info-card-title">
                                                        <h4>Other Info</h4>
                                                    </div>
                                                    <div class="info-card-content">
                                                        <ul class="info-list">
                                                            <li>
                                                                <p class="info-name">Name</p>
                                                                <p class="info-details">Alex Joe</p>
                                                            </li>
                                                            <li>
                                                                <p class="info-name">Country</p>
                                                                <p class="info-details">USA</p>
                                                            </li>
                                                            <li>
                                                                <p class="info-name">Specialize in</p>
                                                                <p class="info-details">Art</p>
                                                            </li>
                                                            <li>
                                                                <p class="info-name">Wallet Add</p>
                                                                <p class="info-details">fdffx1xr394k..dfdk23sl</p>
                                                            </li>
                                                            <li>
                                                                <p class="info-name">Age</p>
                                                                <p class="info-details">36</p>
                                                            </li>
                                                            <li>
                                                                <p class="info-name">Date of Birth</p>
                                                                <p class="info-details">27-02-1996</p>
                                                            </li>
                                                            <li>
                                                                <p class="info-name">Address</p>
                                                                <p class="info-details">Streop Rd, Peosur, Inphodux,
                                                                    USA.</p>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                            </article>
                                        </div>

                                        {/* <!-- Aside Part --> */}
                                        <div class="col-xl-3">
                                            <aside class="mt-5 mt-xl-0">
                                                <div class="profile-widget search-widget">
                                                    <div class="widget-inner">
                                                        <div class="widget-title">
                                                            <h5>Search NFT</h5>
                                                        </div>
                                                        <div class="widget-content">
                                                            <p>Search from best Rarest NFT collections</p>
                                                            <div class="form-floating nft-search-input">
                                                                <input type="text" class="form-control"
                                                                    placeholder="Search NFT"></input>
                                                                <label>Search NFT</label>
                                                                <button type="button"> <i
                                                                        class="icofont-search-1"></i></button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="widget widget-instagram">
                                                    <div class="widget-header">
                                                        <h5 class="title">Featured NFT</h5>
                                                    </div>
                                                    <ul class="widget-wrapper d-flex flex-wrap justify-content-center">
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/01.jpg"><img loading="lazy"
                                                                    src="images/nft-item/01.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/02.jpg"><img loading="lazy"
                                                                    src="images/nft-item/02.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/03.jpg"><img loading="lazy"
                                                                    src="images/nft-item/03.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/04.jpg"><img loading="lazy"
                                                                    src="images/nft-item/04.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/05.jpg"><img loading="lazy"
                                                                    src="images/nft-item/05.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/06.jpg"><img loading="lazy"
                                                                    src="images/nft-item/06.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/07.jp"><img loading="lazy"
                                                                    src="images/nft-item/07.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/08.jpg"><img loading="lazy"
                                                                    src="images/nft-item/08.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/09.jpg"><img loading="lazy"
                                                                    src="images/nft-item/09.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                    </ul>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- activity Tab --> */}
                            <div class="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="nav-activity-tab">
                                <div>
                                    <div class="row">
                                        <div class="col-xl-9">
                                            <article>
                                                <h4 class="h4-title">Author's Activity</h4>
                                                <div class="row gy-3">
                                                    <div class="col-12">
                                                        <div class="activity-item light-version">
                                                            <div
                                                                class="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                                                <div class="lab-thumb me-3 me-md-4">
                                                                    <img src="images/activity/01.gif" alt="img"></img>
                                                                </div>
                                                                <div class="lab-content">
                                                                    <h4><a href="nft-single.html">Gold digger x</a>
                                                                    </h4>
                                                                    <p class="mb-2">GOLD DIGGER (x Antoni Tudisco)
                                                                        #44/44 was put up for sale for
                                                                        <b>0.0991
                                                                            ETH</b>
                                                                    </p>
                                                                    <p class="user-id">By: <a
                                                                            href="author.html">@rasselmrh</a></p>
                                                                    <p>At: 10/07/2022, 10:03 am</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="activity-item light-version">
                                                            <div
                                                                class="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                                                <div class="lab-thumb me-3 me-md-4">
                                                                    <img src="images/activity/02.gif" alt="img"></img>
                                                                </div>
                                                                <div class="lab-content">
                                                                    <h4><a href="nft-single.html">ghost lix xrf</a>
                                                                    </h4>
                                                                    <p class="mb-2">two rare collection purchased for
                                                                        <b>0.001
                                                                            ETH</b>
                                                                    </p>
                                                                    <p class="user-id">By: <a
                                                                            href="author.html">@reo2lxsr</a></p>
                                                                    <p>At: 10/07/2022, 08:23 am</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="activity-item light-version">
                                                            <div
                                                                class="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                                                <div class="lab-thumb me-3 me-md-4">
                                                                    <img src="images/activity/04.gif" alt="img"></img>
                                                                </div>
                                                                <div class="lab-content">
                                                                    <h4><a href="nft-single.html">Trust In meh </a>
                                                                    </h4>
                                                                    <p class="mb-2">The Shopping Cart #54/65 was put up
                                                                        for sale for <b>0.021
                                                                            ETH</b>
                                                                    </p>
                                                                    <p class="user-id">By: <a
                                                                            href="author.html">@reo2lxsr</a></p>
                                                                    <p>At: 10/07/2022, 12:03 am</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="activity-item light-version">
                                                            <div
                                                                class="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                                                <div class="lab-thumb me-3 me-md-4">
                                                                    <img src="images/activity/05.gif" alt="img"></img>
                                                                </div>
                                                                <div class="lab-content">
                                                                    <h4><a href="nft-single.html">Sysytan #0le </a>
                                                                    </h4>
                                                                    <p class="mb-2">A offer of $200.00 was placed for
                                                                        ÜNDERSTANDING (Sean Williams) #1/20
                                                                    </p>
                                                                    <p class="user-id">By: <a
                                                                            href="author.html">@reo2lxsr</a></p>
                                                                    <p>At: 10/07/2022, 10:03 am</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="activity-item light-version">
                                                            <div
                                                                class="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                                                <div class="lab-thumb me-3 me-md-4">
                                                                    <img src="images/activity/03.gif" alt="img"></img>
                                                                </div>
                                                                <div class="lab-content">
                                                                    <h4><a href="nft-single.html">ghost lix xrf</a>
                                                                    </h4>
                                                                    <p class="mb-2">two rare collection purchased for
                                                                        <b>0.001
                                                                            ETH</b>
                                                                    </p>
                                                                    <p class="user-id">By: <a
                                                                            href="author.html">@reo2lxsr</a></p>
                                                                    <p>At: 10/07/2022, 02:03 pm</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>

                                        {/* <!-- Aside Part --> */}
                                        <div class="col-xl-3">
                                            <aside class="mt-5 mt-xl-0">
                                                <div class="profile-widget search-widget">
                                                    <div class="widget-inner">
                                                        <div class="widget-title">
                                                            <h5>Search NFT</h5>
                                                        </div>
                                                        <div class="widget-content">
                                                            <p>Search from best Rarest NFT collections</p>
                                                            <div class="form-floating nft-search-input">
                                                                <input type="text" class="form-control"
                                                                    placeholder="Search NFT"></input>
                                                                <label>Search NFT</label>
                                                                <button type="button"> <i
                                                                        class="icofont-search-1"></i></button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="widget widget-instagram">
                                                    <div class="widget-header">
                                                        <h5 class="title">Featured NFT</h5>
                                                    </div>
                                                    <ul class="widget-wrapper d-flex flex-wrap justify-content-center">
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/01.jpg"><img loading="lazy"
                                                                    src="images/nft-item/01.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/02.jpg"><img loading="lazy"
                                                                    src="images/nft-item/02.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/03.jpg"><img loading="lazy"
                                                                    src="images/nft-item/03.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/04.jpg"><img loading="lazy"
                                                                    src="images/nft-item/04.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/05.jpg"><img loading="lazy"
                                                                    src="images/nft-item/05.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/06.jpg"><img loading="lazy"
                                                                    src="images/nft-item/06.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/07.jpg"><img loading="lazy"
                                                                    src="images/nft-item/07.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/08.jpg"><img loading="lazy"
                                                                    src="images/nft-item/08.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/09.jpg"><img loading="lazy"
                                                                    src="images/nft-item/09.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                    </ul>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- follower Tab --> */}
                            <div class="tab-pane fade" id="follower" role="tabpanel" aria-labelledby="nav-follower-tab">
                                <div>
                                    <div class="row">
                                        <div class="col-xl-9">
                                            <div class="follow-wrapper">
                                                <h4 class="h4-title">All Followers</h4>
                                                <div class="row g-3">
                                                    <div class="col-lg-6">
                                                        <div class="seller-item light-version">
                                                            <div class="seller-inner">
                                                                <div class="seller-part">
                                                                    <p class="assets-number">21</p>
                                                                    <div class="assets-owner">
                                                                        <div class="owner-thumb veryfied">
                                                                            <a href="author.html"><img
                                                                                    src="images/seller/02.png"
                                                                                    alt="seller-img"></img></a>
                                                                        </div>
                                                                        <div class="owner-content">
                                                                            <h5><a href="author.html">Andrea Guido</a>
                                                                            </h5>
                                                                            <p>$23,002.98</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="follow-part">
                                                                    <button class="btn-follow follow-state">
                                                                        <span class="follow"><i
                                                                                class="fa fa-user-plus"></i>
                                                                            Follow</span>
                                                                        <span class="unfollow">Unfollow</span>
                                                                        <span class="following">Following</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="seller-item light-version">
                                                            <div class="seller-inner">
                                                                <div class="seller-part">
                                                                    <p class="assets-number">99</p>
                                                                    <div class="assets-owner">
                                                                        <div class="owner-thumb veryfied">
                                                                            <a href="author.html"><img
                                                                                    src="images/seller/01.gif"
                                                                                    alt="seller-img"></img></a>
                                                                        </div>
                                                                        <div class="owner-content">
                                                                            <h5><a href="author.html">Xrl5 Yo</a>
                                                                            </h5>
                                                                            <p>$2,002.98</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="follow-part">
                                                                    <button class="btn-follow follow-state">
                                                                        <span class="follow"><i
                                                                                class="fa fa-user-plus"></i>
                                                                            Follow</span>
                                                                        <span class="unfollow">Unfollow</span>
                                                                        <span class="following">Following</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="seller-item light-version">
                                                            <div class="seller-inner">
                                                                <div class="seller-part">
                                                                    <p class="assets-number">65</p>
                                                                    <div class="assets-owner">
                                                                        <div class="owner-thumb veryfied">
                                                                            <a href="author.html"><img
                                                                                    src="images/seller/01.gif"
                                                                                    alt="seller-img"></img></a>
                                                                        </div>
                                                                        <div class="owner-content">
                                                                            <h5><a href="author.html">Picha lx</a>
                                                                            </h5>
                                                                            <p>$4,302.98</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="follow-part">
                                                                    <button class="btn-follow follow-state">
                                                                        <span class="follow"><i
                                                                                class="fa fa-user-plus"></i>
                                                                            Follow</span>
                                                                        <span class="unfollow">Unfollow</span>
                                                                        <span class="following">Following</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="seller-item light-version">
                                                            <div class="seller-inner">
                                                                <div class="seller-part">
                                                                    <p class="assets-number">05</p>
                                                                    <div class="assets-owner">
                                                                        <div class="owner-thumb veryfied">
                                                                            <a href="author.html"><img
                                                                                    src="images/seller/03.png"
                                                                                    alt="seller-img"></img></a>
                                                                        </div>
                                                                        <div class="owner-content">
                                                                            <h5><a href="author.html">Xrl5 Yo</a>
                                                                            </h5>
                                                                            <p>$2,002.98</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="follow-part">
                                                                    <button class="btn-follow follow-state">
                                                                        <span class="follow"><i
                                                                                class="fa fa-user-plus"></i>
                                                                            Follow</span>
                                                                        <span class="unfollow">Unfollow</span>
                                                                        <span class="following">Following</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="seller-item light-version">
                                                            <div class="seller-inner">
                                                                <div class="seller-part">
                                                                    <p class="assets-number">14</p>
                                                                    <div class="assets-owner">
                                                                        <div class="owner-thumb veryfied">
                                                                            <a href="author.html"><img
                                                                                    src="images/seller/04.png"
                                                                                    alt="seller-img"></img></a>
                                                                        </div>
                                                                        <div class="owner-content">
                                                                            <h5><a href="author.html">Jhon doe</a>
                                                                            </h5>
                                                                            <p>$13,002.98</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="follow-part">
                                                                    <button class="btn-follow follow-state">
                                                                        <span class="follow"><i
                                                                                class="fa fa-user-plus"></i>
                                                                            Follow</span>
                                                                        <span class="unfollow">Unfollow</span>
                                                                        <span class="following">Following</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="seller-item light-version">
                                                            <div class="seller-inner">
                                                                <div class="seller-part">
                                                                    <p class="assets-number">12</p>
                                                                    <div class="assets-owner">
                                                                        <div class="owner-thumb veryfied">
                                                                            <a href="author.html"><img
                                                                                    src="images/seller/03.gif"
                                                                                    alt="seller-img"></img></a>
                                                                        </div>
                                                                        <div class="owner-content">
                                                                            <h5><a href="author.html">somrat ux</a>
                                                                            </h5>
                                                                            <p>$2,002.98</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="follow-part">
                                                                    <button class="btn-follow follow-state">
                                                                        <span class="follow"><i
                                                                                class="fa fa-user-plus"></i>
                                                                            Follow</span>
                                                                        <span class="unfollow">Unfollow</span>
                                                                        <span class="following">Following</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="seller-item light-version">
                                                            <div class="seller-inner">
                                                                <div class="seller-part">
                                                                    <p class="assets-number">99</p>
                                                                    <div class="assets-owner">
                                                                        <div class="owner-thumb veryfied">
                                                                            <a href="author.html"><img
                                                                                    src="images/seller/05.png"
                                                                                    alt="seller-img"></img></a>
                                                                        </div>
                                                                        <div class="owner-content">
                                                                            <h5><a href="author.html">rax el</a>
                                                                            </h5>
                                                                            <p>$2,002.98</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="follow-part">
                                                                    <button class="btn-follow follow-state">
                                                                        <span class="follow"><i
                                                                                class="fa fa-user-plus"></i>
                                                                            Follow</span>
                                                                        <span class="unfollow">Unfollow</span>
                                                                        <span class="following">Following</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="seller-item light-version">
                                                            <div class="seller-inner">
                                                                <div class="seller-part">
                                                                    <p class="assets-number">79</p>
                                                                    <div class="assets-owner">
                                                                        <div class="owner-thumb veryfied">
                                                                            <a href="author.html"><img
                                                                                    src="images/seller/06.png"
                                                                                    alt="seller-img"></img></a>
                                                                        </div>
                                                                        <div class="owner-content">
                                                                            <h5><a href="author.html">Bigl5 Yo</a>
                                                                            </h5>
                                                                            <p>$2,002.98</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="follow-part">
                                                                    <button class="btn-follow follow-state">
                                                                        <span class="follow"><i
                                                                                class="fa fa-user-plus"></i>
                                                                            Follow</span>
                                                                        <span class="unfollow">Unfollow</span>
                                                                        <span class="following">Following</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="seller-item light-version">
                                                            <div class="seller-inner">
                                                                <div class="seller-part">
                                                                    <p class="assets-number">65</p>
                                                                    <div class="assets-owner">
                                                                        <div class="owner-thumb veryfied">
                                                                            <a href="author.html"><img
                                                                                    src="images/seller/07.png"
                                                                                    alt="seller-img"></img></a>
                                                                        </div>
                                                                        <div class="owner-content">
                                                                            <h5><a href="author.html">Picha lx</a>
                                                                            </h5>
                                                                            <p>$4,302.98</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="follow-part">
                                                                    <button class="btn-follow follow-state">
                                                                        <span class="follow"><i
                                                                                class="fa fa-user-plus"></i>
                                                                            Follow</span>
                                                                        <span class="unfollow">Unfollow</span>
                                                                        <span class="following">Following</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="seller-item light-version">
                                                            <div class="seller-inner">
                                                                <div class="seller-part">
                                                                    <p class="assets-number">05</p>
                                                                    <div class="assets-owner">
                                                                        <div class="owner-thumb veryfied">
                                                                            <a href="author.html"><img
                                                                                    src="images/seller/03.png"
                                                                                    alt="seller-img"></img></a>
                                                                        </div>
                                                                        <div class="owner-content">
                                                                            <h5><a href="author.html">Xrl5 Yo</a>
                                                                            </h5>
                                                                            <p>$2,002.98</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="follow-part">
                                                                    <button class="btn-follow follow-state">
                                                                        <span class="follow"><i
                                                                                class="fa fa-user-plus"></i>
                                                                            Follow</span>
                                                                        <span class="unfollow">Unfollow</span>
                                                                        <span class="following">Following</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="seller-item light-version">
                                                            <div class="seller-inner">
                                                                <div class="seller-part">
                                                                    <p class="assets-number">14</p>
                                                                    <div class="assets-owner">
                                                                        <div class="owner-thumb veryfied">
                                                                            <a href="author.html"><img
                                                                                    src="images/seller/05.gif"
                                                                                    alt="seller-img"></img></a>
                                                                        </div>
                                                                        <div class="owner-content">
                                                                            <h5><a href="author.html">Jhon doe</a>
                                                                            </h5>
                                                                            <p>$13,002.98</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="follow-part">
                                                                    <button class="btn-follow follow-state">
                                                                        <span class="follow"><i
                                                                                class="fa fa-user-plus"></i>
                                                                            Follow</span>
                                                                        <span class="unfollow">Unfollow</span>
                                                                        <span class="following">Following</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="seller-item light-version">
                                                            <div class="seller-inner">
                                                                <div class="seller-part">
                                                                    <p class="assets-number">12</p>
                                                                    <div class="assets-owner">
                                                                        <div class="owner-thumb veryfied">
                                                                            <a href="author.html"><img
                                                                                    src="images/seller/09.png"
                                                                                    alt="seller-img"></img></a>
                                                                        </div>
                                                                        <div class="owner-content">
                                                                            <h5><a href="author.html">razx frd</a>
                                                                            </h5>
                                                                            <p>$2,002.98</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="follow-part">
                                                                    <button class="btn-follow follow-state">
                                                                        <span class="follow"><i
                                                                                class="fa fa-user-plus"></i>
                                                                            Follow</span>
                                                                        <span class="unfollow">Unfollow</span>
                                                                        <span class="following">Following</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="load-btn">
                                                    <a href="#" class="default-btn move-bottom"><span>Load
                                                            More</span> </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Aside Part --> */}
                                        <div class="col-xl-3">
                                            <aside class="mt-5 mt-xl-0">
                                                <div class="profile-widget search-widget">
                                                    <div class="widget-inner">
                                                        <div class="widget-title">
                                                            <h5>Search NFT</h5>
                                                        </div>
                                                        <div class="widget-content">
                                                            <p>Search from best Rarest NFT collections</p>
                                                            <div class="form-floating nft-search-input">
                                                                <input type="text" class="form-control"
                                                                    placeholder="Search NFT"></input>
                                                                <label>Search NFT</label>
                                                                <button type="button"> <i
                                                                        class="icofont-search-1"></i></button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="widget widget-instagram">
                                                    <div class="widget-header">
                                                        <h5 class="title">Featured NFT</h5>
                                                    </div>
                                                    <ul class="widget-wrapper d-flex flex-wrap justify-content-center">
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/01.jpg"><img loading="lazy"
                                                                    src="images/nft-item/01.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/02.jpg"><img loading="lazy"
                                                                    src="images/nft-item/02.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/03.jpg"><img loading="lazy"
                                                                    src="images/nft-item/03.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/04.jpg"><img loading="lazy"
                                                                    src="images/nft-item/04.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/05.jpg"><img loading="lazy"
                                                                    src="images/nft-item/05.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/06.jpg"><img loading="lazy"
                                                                    src="images/nft-item/06.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/07.jpg"><img loading="lazy"
                                                                    src="images/nft-item/07.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/08.jpg"><img loading="lazy"
                                                                    src="images/nft-item/08.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/09.jpg"><img loading="lazy"
                                                                    src="images/nft-item/09.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                    </ul>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- following Tab --> */}
                            <div class="tab-pane fade" id="following" role="tabpanel"
                                aria-labelledby="nav-following-tab">
                                <div class="row">
                                    <div class="col-xl-9">
                                        <div class="follow-wrapper">
                                            <h4 class="h4-title">Following</h4>
                                            <div class="row g-3">
                                                <div class="col-lg-6">
                                                    <div class="seller-item light-version">
                                                        <div class="seller-inner">
                                                            <div class="seller-part">
                                                                <p class="assets-number">21</p>
                                                                <div class="assets-owner">
                                                                    <div class="owner-thumb veryfied">
                                                                        <a href="author.html"><img
                                                                                src="images/seller/02.png"
                                                                                alt="seller-img"></img></a>
                                                                    </div>
                                                                    <div class="owner-content">
                                                                        <h5><a href="author.html">Andrea Guido</a>
                                                                        </h5>
                                                                        <p>$23,002.98</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="follow-part activefollow">
                                                                <button class="btn-follow follow-state">
                                                                    <span class="follow"><i class="fa fa-user-plus"></i>
                                                                        Follow</span>
                                                                    <span class="unfollow">Unfollow</span>
                                                                    <span class="following">Following</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="seller-item light-version">
                                                        <div class="seller-inner">
                                                            <div class="seller-part">
                                                                <p class="assets-number">99</p>
                                                                <div class="assets-owner">
                                                                    <div class="owner-thumb veryfied">
                                                                        <a href="author.html"><img
                                                                                src="images/seller/01.gif"
                                                                                alt="seller-img"></img></a>
                                                                    </div>
                                                                    <div class="owner-content">
                                                                        <h5><a href="author.html">Xrl5 Yo</a>
                                                                        </h5>
                                                                        <p>$2,002.98</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="follow-part activefollow">
                                                                <button class="btn-follow follow-state">
                                                                    <span class="follow"><i class="fa fa-user-plus"></i>
                                                                        Follow</span>
                                                                    <span class="unfollow">Unfollow</span>
                                                                    <span class="following">Following</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="seller-item light-version">
                                                        <div class="seller-inner">
                                                            <div class="seller-part">
                                                                <p class="assets-number">65</p>
                                                                <div class="assets-owner">
                                                                    <div class="owner-thumb veryfied">
                                                                        <a href="author.html"><img
                                                                                src="images/seller/01.gif"
                                                                                alt="seller-img"></img></a>
                                                                    </div>
                                                                    <div class="owner-content">
                                                                        <h5><a href="author.html">Picha lx</a>
                                                                        </h5>
                                                                        <p>$4,302.98</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="follow-part activefollow">
                                                                <button class="btn-follow follow-state">
                                                                    <span class="follow"><i class="fa fa-user-plus"></i>
                                                                        Follow</span>
                                                                    <span class="unfollow">Unfollow</span>
                                                                    <span class="following">Following</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="seller-item light-version">
                                                        <div class="seller-inner">
                                                            <div class="seller-part">
                                                                <p class="assets-number">05</p>
                                                                <div class="assets-owner">
                                                                    <div class="owner-thumb veryfied">
                                                                        <a href="author.html"><img
                                                                                src="images/seller/03.png"
                                                                                alt="seller-img"></img></a>
                                                                    </div>
                                                                    <div class="owner-content">
                                                                        <h5><a href="author.html">Xrl5 Yo</a>
                                                                        </h5>
                                                                        <p>$2,002.98</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="follow-part activefollow">
                                                                <button class="btn-follow follow-state">
                                                                    <span class="follow"><i class="fa fa-user-plus"></i>
                                                                        Follow</span>
                                                                    <span class="unfollow">Unfollow</span>
                                                                    <span class="following">Following</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="seller-item light-version">
                                                        <div class="seller-inner">
                                                            <div class="seller-part">
                                                                <p class="assets-number">14</p>
                                                                <div class="assets-owner">
                                                                    <div class="owner-thumb veryfied">
                                                                        <a href="author.html"><img
                                                                                src="images/seller/04.png"
                                                                                alt="seller-img"></img></a>
                                                                    </div>
                                                                    <div class="owner-content">
                                                                        <h5><a href="author.html">Jhon doe</a>
                                                                        </h5>
                                                                        <p>$13,002.98</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="follow-part activefollow">
                                                                <button class="btn-follow follow-state">
                                                                    <span class="follow"><i class="fa fa-user-plus"></i>
                                                                        Follow</span>
                                                                    <span class="unfollow">Unfollow</span>
                                                                    <span class="following">Following</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="seller-item light-version">
                                                        <div class="seller-inner">
                                                            <div class="seller-part">
                                                                <p class="assets-number">12</p>
                                                                <div class="assets-owner">
                                                                    <div class="owner-thumb veryfied">
                                                                        <a href="author.html"><img
                                                                                src="images/seller/03.gif"
                                                                                alt="seller-img"></img></a>
                                                                    </div>
                                                                    <div class="owner-content">
                                                                        <h5><a href="author.html">somrat ux</a>
                                                                        </h5>
                                                                        <p>$2,002.98</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="follow-part activefollow">
                                                                <button class="btn-follow follow-state">
                                                                    <span class="follow"><i class="fa fa-user-plus"></i>
                                                                        Follow</span>
                                                                    <span class="unfollow">Unfollow</span>
                                                                    <span class="following">Following</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="seller-item light-version">
                                                        <div class="seller-inner">
                                                            <div class="seller-part">
                                                                <p class="assets-number">99</p>
                                                                <div class="assets-owner">
                                                                    <div class="owner-thumb veryfied">
                                                                        <a href="author.html"><img
                                                                                src="images/seller/05.png"
                                                                                alt="seller-img"></img></a>
                                                                    </div>
                                                                    <div class="owner-content">
                                                                        <h5><a href="author.html">rax el</a>
                                                                        </h5>
                                                                        <p>$2,002.98</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="follow-part activefollow">
                                                                <button class="btn-follow follow-state">
                                                                    <span class="follow"><i class="fa fa-user-plus"></i>
                                                                        Follow</span>
                                                                    <span class="unfollow">Unfollow</span>
                                                                    <span class="following">Following</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="seller-item light-version">
                                                        <div class="seller-inner">
                                                            <div class="seller-part">
                                                                <p class="assets-number">79</p>
                                                                <div class="assets-owner">
                                                                    <div class="owner-thumb veryfied">
                                                                        <a href="author.html"><img
                                                                                src="images/seller/06.png"
                                                                                alt="seller-img"></img></a>
                                                                    </div>
                                                                    <div class="owner-content">
                                                                        <h5><a href="author.html">Bigl5 Yo</a>
                                                                        </h5>
                                                                        <p>$2,002.98</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="follow-part activefollow">
                                                                <button class="btn-follow follow-state">
                                                                    <span class="follow"><i class="fa fa-user-plus"></i>
                                                                        Follow</span>
                                                                    <span class="unfollow">Unfollow</span>
                                                                    <span class="following">Following</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="seller-item light-version">
                                                        <div class="seller-inner">
                                                            <div class="seller-part">
                                                                <p class="assets-number">65</p>
                                                                <div class="assets-owner">
                                                                    <div class="owner-thumb veryfied">
                                                                        <a href="author.html"><img
                                                                                src="images/seller/07.png"
                                                                                alt="seller-img"></img></a>
                                                                    </div>
                                                                    <div class="owner-content">
                                                                        <h5><a href="author.html">Picha lx</a>
                                                                        </h5>
                                                                        <p>$4,302.98</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="follow-part activefollow">
                                                                <button class="btn-follow follow-state">
                                                                    <span class="follow"><i class="fa fa-user-plus"></i>
                                                                        Follow</span>
                                                                    <span class="unfollow">Unfollow</span>
                                                                    <span class="following">Following</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="seller-item light-version">
                                                        <div class="seller-inner">
                                                            <div class="seller-part">
                                                                <p class="assets-number">05</p>
                                                                <div class="assets-owner">
                                                                    <div class="owner-thumb veryfied">
                                                                        <a href="author.html"><img
                                                                                src="images/seller/03.png"
                                                                                alt="seller-img"></img></a>
                                                                    </div>
                                                                    <div class="owner-content">
                                                                        <h5><a href="author.html">Xrl5 Yo</a>
                                                                        </h5>
                                                                        <p>$2,002.98</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="follow-part activefollow">
                                                                <button class="btn-follow follow-state">
                                                                    <span class="follow"><i class="fa fa-user-plus"></i>
                                                                        Follow</span>
                                                                    <span class="unfollow">Unfollow</span>
                                                                    <span class="following">Following</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="seller-item light-version">
                                                        <div class="seller-inner">
                                                            <div class="seller-part">
                                                                <p class="assets-number">14</p>
                                                                <div class="assets-owner">
                                                                    <div class="owner-thumb veryfied">
                                                                        <a href="author.html"><img
                                                                                src="images/seller/05.gif"
                                                                                alt="seller-img"></img></a>
                                                                    </div>
                                                                    <div class="owner-content">
                                                                        <h5><a href="author.html">Jhon doe</a>
                                                                        </h5>
                                                                        <p>$13,002.98</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="follow-part activefollow">
                                                                <button class="btn-follow follow-state">
                                                                    <span class="follow"><i class="fa fa-user-plus"></i>
                                                                        Follow</span>
                                                                    <span class="unfollow">Unfollow</span>
                                                                    <span class="following">Following</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="seller-item light-version">
                                                        <div class="seller-inner">
                                                            <div class="seller-part">
                                                                <p class="assets-number">12</p>
                                                                <div class="assets-owner">
                                                                    <div class="owner-thumb veryfied">
                                                                        <a href="author.html"><img
                                                                                src="images/seller/09.png"
                                                                                alt="seller-img"></img></a>
                                                                    </div>
                                                                    <div class="owner-content">
                                                                        <h5><a href="author.html">razx frd</a>
                                                                        </h5>
                                                                        <p>$2,002.98</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="follow-part activefollow">
                                                                <button class="btn-follow follow-state">
                                                                    <span class="follow"><i class="fa fa-user-plus"></i>
                                                                        Follow</span>
                                                                    <span class="unfollow">Unfollow</span>
                                                                    <span class="following">Following</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="load-btn">
                                                <a href="#" class="default-btn move-bottom"><span>Load
                                                        More</span> </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Aside Part --> */}
                                    <div class="col-xl-3">
                                        <aside class="mt-5 mt-xl-0">
                                            <div class="profile-widget search-widget">
                                                <div class="widget-inner">
                                                    <div class="widget-title">
                                                        <h5>Search NFT</h5>
                                                    </div>
                                                    <div class="widget-content">
                                                        <p>Search from best Rarest NFT collections</p>
                                                        <div class="form-floating nft-search-input">
                                                            <input type="text" class="form-control"
                                                                placeholder="Search NFT"></input>
                                                            <label>Search NFT</label>
                                                            <button type="button"> <i
                                                                    class="icofont-search-1"></i></button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="widget widget-instagram">
                                                <div class="widget-header">
                                                    <h5 class="title">Featured NFT</h5>
                                                </div>
                                                <ul class="widget-wrapper d-flex flex-wrap justify-content-center">
                                                    <li><a data-rel="lightcase"
                                                            href="images/nft-item/01.jpg"><img loading="lazy"
                                                                src="images/nft-item/01.jpg" alt="nft-img"></img></a>
                                                    </li>
                                                    <li><a data-rel="lightcase"
                                                            href="images/nft-item/02.jpg"><img loading="lazy"
                                                                src="images/nft-item/02.jpg" alt="nft-img"></img></a>
                                                    </li>
                                                    <li><a data-rel="lightcase"
                                                            href="images/nft-item/03.jpg"><img loading="lazy"
                                                                src="images/nft-item/03.jpg" alt="nft-img"></img></a>
                                                    </li>
                                                    <li><a data-rel="lightcase"
                                                            href="images/nft-item/04.jpg"><img loading="lazy"
                                                                src="images/nft-item/04.jpg" alt="nft-img"></img></a>
                                                    </li>
                                                    <li><a data-rel="lightcase"
                                                            href="images/nft-item/05.jpg"><img loading="lazy"
                                                                src="images/nft-item/05.jpg" alt="nft-img"></img></a>
                                                    </li>
                                                    <li><a data-rel="lightcase"
                                                            href="images/nft-item/06.jpg"><img loading="lazy"
                                                                src="images/nft-item/06.jpg" alt="nft-img"></img></a>
                                                    </li>
                                                    <li><a data-rel="lightcase"
                                                            href="images/nft-item/07.jpg"><img loading="lazy"
                                                                src="images/nft-item/07.jpg" alt="nft-img"></img></a>
                                                    </li>
                                                    <li><a data-rel="lightcase"
                                                            href="images/nft-item/08.jpg"><img loading="lazy"
                                                                src="images/nft-item/08.jpg" alt="nft-img"></img></a>
                                                    </li>
                                                    <li><a data-rel="lightcase"
                                                            href="images/nft-item/09.jpg"><img loading="lazy"
                                                                src="images/nft-item/09.jpg" alt="nft-img"></img></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- wallet Tab --> */}
                            <div class="tab-pane fade" id="wallet" role="tabpanel" aria-labelledby="nav-wallet-tab">
                                <div>
                                    <div class="row">
                                        <div class="col-xl-9">
                                            <div class="wallet-wrapper">
                                                <div class="wallet-title">
                                                    <h4>Connect your wallet</h4>
                                                    <p>Connect with one of available wallet providers or <a
                                                            href="signup.html">create a
                                                            new wallet</a></p>
                                                </div>
                                                <div class="wallet-section">
                                                    <div class="wallet-inner">
                                                        <div class="row g-3">
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="wallet-item light-version">
                                                                    <div class="wallet-item-inner">
                                                                        <div class="wallet-thumb">
                                                                            <a href="signin.html">
                                                                                <img src="images/wallet/06.png"
                                                                                    alt="wallet-img"></img>
                                                                            </a>
                                                                        </div>
                                                                        <div class="wallet-content">
                                                                            <h5><a href="signin.html">Meta Mask</a></h5>
                                                                            <p>Lorem ipsum dolor sit amet consectetur.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="wallet-item light-version">
                                                                    <div class="wallet-item-inner">
                                                                        <div class="wallet-thumb">
                                                                            <a href="signin.html">
                                                                                <img src="images/wallet/07.png"
                                                                                    alt="wallet-img"></img>
                                                                            </a>
                                                                        </div>
                                                                        <div class="wallet-content">
                                                                            <h5><a href="signin.html">Binance</a></h5>
                                                                            <p>Lorem ipsum dolor sit amet consectetur.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="wallet-item light-version">
                                                                    <div class="wallet-item-inner">
                                                                        <div class="wallet-thumb">
                                                                            <a href="signin.html">
                                                                                <img src="images/wallet/08.png"
                                                                                    alt="wallet-img"></img>
                                                                            </a>
                                                                        </div>
                                                                        <div class="wallet-content">
                                                                            <h5><a href="signin.html">Formatic</a></h5>
                                                                            <p>Lorem ipsum dolor sit amet consectetur.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="wallet-item light-version">
                                                                    <div class="wallet-item-inner">
                                                                        <div class="wallet-thumb">
                                                                            <a href="signin.html">
                                                                                <img src="images/wallet/01.png"
                                                                                    alt="wallet-img"></img>
                                                                            </a>
                                                                        </div>
                                                                        <div class="wallet-content">
                                                                            <h5><a href="signin.html">Autherum</a></h5>
                                                                            <p>Lorem ipsum dolor sit amet consectetur.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="wallet-item light-version">
                                                                    <div class="wallet-item-inner">
                                                                        <div class="wallet-thumb">
                                                                            <a href="signin.html">
                                                                                <img src="images/wallet/02.png"
                                                                                    alt="wallet-img"></img>
                                                                            </a>
                                                                        </div>
                                                                        <div class="wallet-content">
                                                                            <h5><a href="signin.html">Bitski</a></h5>
                                                                            <p>Lorem ipsum dolor sit amet consectetur.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="wallet-item light-version">
                                                                    <div class="wallet-item-inner">
                                                                        <div class="wallet-thumb">
                                                                            <a href="signin.html">
                                                                                <img src="images/wallet/03.png"
                                                                                    alt="wallet-img"></img>
                                                                            </a>
                                                                        </div>
                                                                        <div class="wallet-content">
                                                                            <h5><a href="signin.html">Coinbase</a></h5>
                                                                            <p>Lorem ipsum dolor sit amet consectetur.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="wallet-item light-version">
                                                                    <div class="wallet-item-inner">
                                                                        <div class="wallet-thumb">
                                                                            <a href="signin.html">
                                                                                <img src="images/wallet/04.png"
                                                                                    alt="wallet-img"></img>
                                                                            </a>
                                                                        </div>
                                                                        <div class="wallet-content">
                                                                            <h5><a href="signin.html">Dapper</a></h5>
                                                                            <p>Lorem ipsum dolor sit amet consectetur.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="wallet-item light-version">
                                                                    <div class="wallet-item-inner">
                                                                        <div class="wallet-thumb">
                                                                            <a href="signin.html">
                                                                                <img src="images/wallet/05.png"
                                                                                    alt="wallet-img"></img>
                                                                            </a>
                                                                        </div>
                                                                        <div class="wallet-content">
                                                                            <h5><a href="signin.html">Portis</a></h5>
                                                                            <p>Lorem ipsum dolor sit amet consectetur.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p class="mt-5 wallet-notice"><span class="me-1 theme-color"><i
                                                                    class="icofont-bulb-alt"></i></span> We
                                                            do not own your private keys and cannot access your funds
                                                            without your confirmation.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Aside Part --> */}
                                        <div class="col-xl-3">
                                            <aside class="mt-5 mt-xl-0">
                                                <div class="profile-widget search-widget">
                                                    <div class="widget-inner">
                                                        <div class="widget-title">
                                                            <h5>Search NFT</h5>
                                                        </div>
                                                        <div class="widget-content">
                                                            <p>Search from best Rarest NFT collections</p>
                                                            <div class="form-floating nft-search-input">
                                                                <input type="text" class="form-control"
                                                                    placeholder="Search NFT"></input>
                                                                <label>Search NFT</label>
                                                                <button type="button"> <i
                                                                        class="icofont-search-1"></i></button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="widget widget-instagram">
                                                    <div class="widget-header">
                                                        <h5 class="title">Featured NFT</h5>
                                                    </div>
                                                    <ul class="widget-wrapper d-flex flex-wrap justify-content-center">
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/01.jpg"><img loading="lazy"
                                                                    src="images/nft-item/01.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/02.jpg"><img loading="lazy"
                                                                    src="images/nft-item/02.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/03.jpg"><img loading="lazy"
                                                                    src="images/nft-item/03.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/04.jpg"><img loading="lazy"
                                                                    src="images/nft-item/04.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/05.jpg"><img loading="lazy"
                                                                    src="images/nft-item/05.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/06.jpg"><img loading="lazy"
                                                                    src="images/nft-item/06.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/07.jpg"><img loading="lazy"
                                                                    src="images/nft-item/07.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/08.jpg"><img loading="lazy"
                                                                    src="images/nft-item/08.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                        <li><a data-rel="lightcase"
                                                                href="images/nft-item/09.jpg"><img loading="lazy"
                                                                    src="images/nft-item/09.jpg"
                                                                    alt="nft-img"></img></a></li>
                                                    </ul>
                                                </div>
                                            </aside>
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

export default ProfileSection