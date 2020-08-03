import React from 'react'
import Project from "../components/Project"

const projects = [
    {
        image: "./assets/PageExchange.png",
        title: "PageExchange",
        animation: "fade-down-right",
        description: "A collaborative full-stack share community project that allows for users to contribute to and participate in the circulation of used books.",
        deployed: "https://obscure-stream-03506.herokuapp.com/",
        github: "https://github.com/ChristineClemens/TheSemicolons"
    },
    {
        image: "./assets/PageExchange.png",
        title: "PageExchange",
        animation: "fade-down-right",
        description: "A collaborative full-stack share community project that allows for users to contribute to and participate in the circulation of used books.",
        deployed: "https://obscure-stream-03506.herokuapp.com/",
        github: "https://github.com/ChristineClemens/TheSemicolons"
    },
    {
        image: "./assets/PageExchange.png",
        title: "PageExchange",
        animation: "fade-down-right",
        description: "A collaborative full-stack share community project that allows for users to contribute to and participate in the circulation of used books.",
        deployed: "https://obscure-stream-03506.herokuapp.com/",
        github: "https://github.com/ChristineClemens/TheSemicolons"
    },
    {
        image: "./assets/PageExchange.png",
        title: "PageExchange",
        animation: "fade-down-right",
        description: "A collaborative full-stack share community project that allows for users to contribute to and participate in the circulation of used books.",
        deployed: "https://obscure-stream-03506.herokuapp.com/",
        github: "https://github.com/ChristineClemens/TheSemicolons"
    },
    {
        image: "./assets/PageExchange.png",
        title: "PageExchange",
        animation: "fade-down-right",
        description: "A collaborative full-stack share community project that allows for users to contribute to and participate in the circulation of used books.",
        deployed: "https://obscure-stream-03506.herokuapp.com/",
        github: "https://github.com/ChristineClemens/TheSemicolons"
    },
    {
        image: "./assets/PageExchange.png",
        title: "PageExchange",
        animation: "fade-down-right",
        description: "A collaborative full-stack share community project that allows for users to contribute to and participate in the circulation of used books.",
        deployed: "https://obscure-stream-03506.herokuapp.com/",
        github: "https://github.com/ChristineClemens/TheSemicolons"
    },
]

const Portfolio = () => {
    return (
        <div className="container-sm" style={{marginBottom: '50px'}}>
            <h1 className="h1-responsive font-weight-bold text-center my-5 permanentMarkerFont tealText" data-aos="fade-up" data-aos-duration="2000">Portfolio</h1>
                <p className="text-center w-responsive mx-auto pb-5 caveatFont" style={{fontSize: '20px', textIndent: '50px'}}>
                    Here, you can browse some of my recently deployed projects and access their GitHub repositories. 
                    Much of the work I've had the opportunity to complete thus far includes HTML and CSS design aspects, 
                    API call resource application, JavaScript-based technologies and the implementation of the MySQL database
                    engine. In the future, I look forward to applying these skills to developing digital education resources
                    and share community applications that promote inclusivity and a strong sense of community to enhance user 
                    experience. 
                </p>
            <main className="projectCards" style={{padding: '30px 0 30px 0'}}>
                {projects.map((projects, index) => <Project key={index} {...projects} />)}
            </main>
        </div>
    )
}

export default Portfolio;
