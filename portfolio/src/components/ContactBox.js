import React from 'react'

const ContactBox = () => {
    return (
        <div className="row">       
            <div className="col-lg-5 mb-lg-0 mb-4">
                <figure className="card">
                    <article className="card-body">
                        <figcaption className="form-header blue accent-1">
                            <h3 className="mt-2 permanentMarkerFont tealText"><i className="fas fa-envelope"></i>Get in touch:</h3>
                        </figcaption>
                        <p className="dark-grey-text caveatFont">I'll get back to you as soon as I can!</p>
                        
                        <section className="md-form">
                            <i className="fas fa-user prefix grey-text"></i>
                            <input type="text" id="form-name" className="form-control" placeholder="First name Last name..." />
                            <label for="form-name">Your name</label>
                        </section>

                        <section className="md-form">
                            <i className="fas fa-envelope prefix grey-text"></i>
                            <input type="text" id="form-email" className="form-control" placeholder="MyEmail@gmail.com..." />
                            <label for="form-email">Your email</label>
                        </section>

                        <section className="md-form">
                            <i className="fas fa-tag prefix grey-text"></i>
                            <input type="text" id="form-subject" className="form-control" placeholder="Ex. Collaboration Inquiry..." />
                            <label for="form-Subject">Subject</label>
                        </section>

                        <section className="md-form">
                            <i className="fas fa-pencil-alt prefix grey-text"></i>
                            <textarea id="form-text" className="form-control md-textarea" placeholder="Your detailed message..." rows="4"></textarea>
                            <label for="form-text">Send message</label>
                        </section>
                        <section id="submitBtnDiv" className="text-center"></section>
                    </article>
                </figure>
            </div>

            <aside className="col-lg-7">
                <figure id="map-container-section" className="z-depth-1-half map-container-section mb-4" style={{height: '400px'}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.2517907885003!2d-79.40309013383315!3d43.68452850842131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b335de13bd52d%3A0x3e1118e8139c8004!2sToronto%2C%20ON%20M4V%201J7!5e0!3m2!1sen!2sca!4v1590015819387!5m2!1sen!2sca"
                        style={{border:'0'}} allowfullscreen>
                    </iframe>
                </figure>

                <article className="row text-center caveatFont"  style={{border: '1px solid lightgray', borderRadius: '3px', paddingTop: '6px'}}>

                    <section className="col-md-4" style={{borderRight: '1px solid lightgray'}}>
                        <a className="btn-floating blue accent-1">
                        <i className="fas fa-map-marker-alt"></i>
                        </a>
                        <div data-aos-delay="1500" data-aos-duration="600" data-aos="flip-left">
                            <img src="../assets/MapIcon.PNG" style={{height: '50px'}} alt="MapIcon"></img>
                            <p>Toronto, Canada</p>
                        </div>
                    </section>

                    <section className="col-md-4" style={{borderRight: '1px solid lightgray'}}>
                        <a className="btn-floating blue accent-1">
                        <i className="fas fa-phone"></i>
                        </a>
                        <div data-aos-delay="1500" data-aos-duration="600" data-aos="flip-left">
                            <img src="../assets/PhoneIcon.PNG" style={{height: '50px'}} alt="PhoneIcon"></img>
                            <p>+1-(416)-828-7698</p>
                        </div>
                    </section>

                    <section className="col-md-4">
                        <a className="btn-floating blue accent-1">
                        <i className="fas fa-envelope"></i>
                        </a>
                        <div data-aos-delay="1500" data-aos-duration="600" data-aos="flip-left">
                            <img src="../assets/EmailIcon.PNG" style={{height: '50px'}} alt="EmailIcon"></img>
                            <p>christineclemens.tesol@gmail.com</p>
                        </div>
                    </section>
                </article>
            </aside>
        </div>
    )
}

export default ContactBox;
