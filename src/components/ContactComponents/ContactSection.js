import React from 'react'

const ContactSection = () => {
    return (
        <div class="contact-section light-version">
        <div class="contact-top padding-top padding-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <article class="contact-form-wrapper">
                            <div class="contact-form">
                                <h4>Don't Be A Stranger Just Say Hello.</h4>
                                <p class="mb-5">Get in touch, we'd love to hear from you.
                                    Check out <em><strong><a href="how-it-works.html"> How it works</a></strong></em> for answers to the most common question.
                                </p>
                                <form action="#" method="POST" id="commentform" class="comment-form">
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="contactName"
                                                    placeholder="Name"></input>
                                                <label for="contactName">Name</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="password" class="form-control" id="floatingPassword"
                                                    placeholder="Password"></input>
                                                <label for="floatingPassword">Email</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="inputSub"
                                                    placeholder="Subject"></input>
                                                <label for="inputSub">Subject</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="contactNumber"
                                                    placeholder="Number"></input>
                                                <label for="contactNumber">Number</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <textarea class="form-control" placeholder="Message"
                                                    id="msgBox"></textarea>
                                                <label for="msgBox">Message</label>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="default-btn move-right">
                                        <span>Send Message</span>
                                    </button>
                                </form>
                            </div>
                        </article>
                    </div>
                    <div class="col-lg-4">
                        <div class="contact-info-wrapper">
                            <div class="contact-info-title">
                                <h5>Get Information</h5>
                                <p>Our Contact information Details and
                                    Follow us on social media</p>
                            </div>
                            <div class="contact-info-content">
                                <div class="contact-info-item">
                                    <div class="contact-info-inner">
                                        <div class="contact-info-thumb">
                                            <img src="images/contact/01.png" alt="address"></img>
                                        </div>
                                        <div class="contact-info-details">
                                            <span class="fw-bold">Location</span>
                                            <p>Houston, TX</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="contact-info-item">
                                    <div class="contact-info-inner">
                                        <div class="contact-info-thumb">
                                            <img src="images/contact/03.png" alt="address"></img>
                                        </div>
                                        <div class="contact-info-details">
                                            <span class="fw-bold">Send Mail</span>
                                            <p>account@socawk.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="contact-info-item">
                                    <div class="contact-info-inner">
                                        <div class="contact-info-thumb">
                                            <img src="images/contact/04.png" alt="address"></img>
                                        </div>
                                        <div class="contact-info-details">
                                            <span class="fw-bold">Our Website</span>
                                            <p>www.socawk.com</p>
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
    )
}

export default ContactSection