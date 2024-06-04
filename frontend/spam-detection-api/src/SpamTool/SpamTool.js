import React from 'react';

function Form() {

    return (
        <div className="style-0">
            <div className="style-1">
                <div className="style-2">
                    <div className="style-3">
                        <div className="style-4">
                            <div className="style-5">
                                <div className="style-6">
                                    <h2 className="style-7">Fill the form. <br className="style-8"/> It's easy.</h2>
                                    <form className="style-9" method="post" name="contactForm"
                                          noValidate="novalidate">
                                        <div className="style-10">
                                            <div className="style-11">
                                                <input type="text" className="style-12" name="fname"
                                                       placeholder="First name"/>
                                            </div>
                                            <div className="style-13">
                                                <input type="text" className="style-14" name="lname"
                                                       placeholder="Last name"/>
                                            </div>
                                        </div>
                                        <div className="style-15">
                                            <div className="style-16">
                                                <input type="text" className="style-17" name="email"
                                                       placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="style-18">
                                            <div className="style-19">
                                                    <textarea className="style-20" name="message" cols="30" rows="7"
                                                              placeholder="Write your message"></textarea>
                                            </div>
                                        </div>
                                        <div className="style-21">
                                            <div className="style-22">
                                                <input type="submit" value="Send Message" className="style-23"/>
                                                <span className="style-24"></span>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="style-25"></div>
                                    <div className="style-26">
                                        Your message was sent, thank you!
                                    </div>
                                </div>
                                <div className="style-27">
                                    <h3 className="style-28">Let's talk about everything.</h3>
                                    <p className="style-29">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Nihil deleniti itaque similique magni. Magni, laboriosam perferendis
                                        maxime!</p>
                                    <p className="style-30"><a href="#" className="style-31">Read more</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;