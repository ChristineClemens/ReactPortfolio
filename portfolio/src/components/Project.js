
import React from 'react'

const Project = (props) => {
    console.log(props);
    return (
        <div>
            <article className="mb-4" data-aos-delay="500" data-aos-duration="600" data-aos={props.animation}>
                <section className="card h-100 shadow mb-5 bg-white rounded">
                    <img src={props.image} className="card-img-top" alt={props.title} />
                    <summary className="card-body" style={{textAlign: 'center'}}>
                        <h5 className="card-title cardLabel">{props.title}</h5>
                        <p className="card-text">A collaborative full-stack share community project that allows for users to contribute to and participate in the circulation of used books.</p>
                    </summary>
                    <div className="card-footer text-center">
                        <a href={props.deployed} 
                           className="btn btn-primary permanentMarkerFont a:hover" 
                           style={{padding: '0 20px 0 20px', fontSize: '25px', backgroundColor: 'lightGray', border: '1px solid lightGray'}}>
                           View
                        </a>
                        <a href={props.github} target="_blank">
                            <img className="btn smallLogo" src="./assets/GitHubLogo.png" />
                        </a>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default Project;
