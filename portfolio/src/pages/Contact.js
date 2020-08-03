import React from 'react'
import ContactBox from "../components/ContactBox"

const Contact = () => {
    return (
        <div>
            <div class="container-sm">
                <section class="my-5">
                    <h1 class="h1-responsive font-weight-bold text-center my-5 permanentMarkerFont tealText" data-aos="fade-up" data-aos-duration="2000">Contact Me</h1>
                    <p class="text-center w-responsive mx-auto pb-5 caveatFont" style={{fontSize: '20px', textIndent: '50px'}}>
                        As an enthusiastic young professional who is deeply invested in developing professionally and 
                        rising to the challenge of new learning opportunities, I welcome any opportunity to collaborate 
                        and exercise my skills. In employing my abilities as a creative, versatile, and ardent 
                        developer, I am confident that I can serve as a beneficial addition to your staff if provided 
                        the opportunity.
                        <br />
                        If you'd like to get in touch to discuss collaboration, employment, or your own inquiry, please 
                        feel free to contact me below as I'd love to hear from you!
                    </p>
                    <ContactBox />
                </section>
            </div>
        </div>
    )
}

export default Contact;
