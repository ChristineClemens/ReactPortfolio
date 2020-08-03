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
            <div>
        </div>
    </div>
</div>
    )
}

export default ContactBox;
