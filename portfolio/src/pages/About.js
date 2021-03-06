import React from 'react'

const About = () => {
    return (
    <div className="container-sm" style={{paddingBottom: '50px'}}>

        <article className="jumbotron jumbotron-fluid jumbotron-image" style={{backgroundImage: 'url(./assets/jumbotron-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <section className="container">
                <h1 className="permanentMarkerFont tealText" 
                    style={{textAlign: 'right', paddingRight:'2%'}}>
                    About
                </h1>
                <p className="lead tealText caveatFont" 
                style={{textAlign: 'right', fontSize: '3.5vw'}}>
                A brief overview of my personal and professional experience.
                </p>
            </section>
        </article>

        <main className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-9">
                    <h2 data-aos="fade-right" data-aos-duration="3000" className="permanentMarkerFont">Hi, I'm Christine!</h2>
                    <br/>    
                <main className="row">            
                <figure className="col-sm-12 col-md-3 col-lg-3">
                    <img className="img-thumbnail" 
                        src="./assets/portrait.jpg" 
                        alt="Portrait"
                        style={{padding: '10px', border: '3px solid rgb(147,230,206)', borderRadius: '40px 0 40px 0'}} />
                </figure>
                <article className="col-sm-12 col-md-9 col-lg-9 caveatFont">
                    <p style={{textIndent: '50px', fontSize: '20px'}}>
                        I'm a front-end developer based here in Toronto, galvanizing a background in 
                        aesthetic design and education in order to provide a comprehensive user 
                        experience that promotes inclusivity. I've recently earned a Certificate in 
                        Full-Stack Development from the University of Toronto School of Continuing 
                        Studies, equipping me with the skills necessary to effectively execute responsive 
                        designs that promote an intuitive, comprehensive user experience. I'm very 
                        enthusiastic about pursuing new learning opportunities and innovatively paving 
                        creative avenues in both individual and collaborative design environments to 
                        produce meaningful work. 
                    </p>
                    <p style={{textIndent: '50px', fontSize: '20px'}}>
                        My objective is to expand my knowledge of front-end 
                        development so as to ensure that this experience appeals to a global audience. 
                        My aptitude for articulating interpersonal communication has allowed me to 
                        successfully collaborate with others to execute the development of multiple 
                        non-profit based web applications designed to benefit and enhance communities, 
                        demonstrating my potential to thrive as an asset to a development team.
                    </p>
                    <br/>
                </article>
                </main>
                </div>
                <aside className="col-sm-12 col-md-12 col-lg-3">
                    <article className="card">
                        <section className="card-body">
                            <h5 className="card-title" id="funFacts" style={{textAlign: 'center'}}>
                                Quick Facts:
                            </h5>
                            <br/>
                            <h6 className="card-subtitle mb-2 text-muted permanentMarkerFont" style={{textAlign: 'center'}}>
                                Technologies
                            </h6>
                            <p className="card-text" style={{textAlign: 'center'}}>
                                Git, HTML5, CSS3, Bootstrap, JavaScript, Node.js, Express.js, MySQL, MongoDB, 
                                Handlebars, Postman, React, npm, RESTful APIs
                            </p>
                            <h6 className="card-subtitle mb-2 text-muted permanentMarkerFont" style={{textAlign: 'center'}}>
                                LinkedIn
                            </h6>
                            <p className="linkedin" style={{textAlign: 'center'}}>
                                <a href="https://www.linkedin.com/in/christine-clemens-aaba61b7/" target="_blank">
                                    <img className="btn logo" data-aos-delay="1500" data-aos-duration="600" data-aos="flip-left" src="./assets/LinkedInLogo.png" />
                                </a>
                            </p>
                            <h6 className="card-subtitle mb-2 text-muted permanentMarkerFont" style={{textAlign: 'center'}}>
                                GitHub
                            </h6>
                            <p className="github" style={{textAlign: 'center'}}>
                                <a href="https://github.com/ChristineClemens" target="_blank">
                                    <img className="btn logo" data-aos-delay="1500" data-aos-duration="600" data-aos="flip-left" src="./assets/GitHubLogo.png" />
                                </a>
                            </p>
                            <p className="text-center">
                            <a href="./assets/Christine Clemens - Developer Resume.pdf" target="_blank"
                            className="btn btn-primary permanentMarkerFont a:hover" 
                            style={{"padding":"0 20px 0 20px","fontSize":"20px","backgroundColor":"lightGray","border":"1px solid lightGray"}}>
                            Resume
                            </a>
                            </p>
                        </section>
                    </article>
                </aside>
            </div>
        </main>
    </div>
    )
}

export default About;
