import React from 'react'

const BannerSection = () => {
    return (
        <section class="banner-section light-version" 
        style={{ backgroundImage: 'url(images/banner/bg-6.jpg)' }}
        >
        <div class="container">
            <div class="banner-wrapper">
                <div class="row justify-content-center align-items-center g-5">
                    <div class="col">
                        <div class="banner-content text-center">
                            <h1><span class="theme-color" data-blast="color">About</span> Us
                                <span class="theme-color" data-blast="color"></span></h1>
                            <p class="ms-auto me-auto"> Get to know us behind the scenes!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default BannerSection