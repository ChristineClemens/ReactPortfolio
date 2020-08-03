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
        image: "./assets/WeatherDashboard.png",
        title: "Weather Dashboard",
        animation: "fade-down",
        description: "A simple weather application that displays both local weather and weather for searched locations using the Open Weather API.",
        deployed: "https://christineclemens.github.io/WeatherDashboard/",
        github: "https://github.com/ChristineClemens/WeatherDashboard"
    },
    {
        image: "./assets/README Generator Screenshot.png",
        title: "README.md Generator",
        animation: "fade-down-left",
        description: "A Node.js application that employs express.js to generate README.md files according to user specifications.",
        deployed: "https://christineclemens.github.io/AboutMe/portfolio.html",
        github: "https://github.com/ChristineClemens/READMEGenerator"
    },
    {
        image: "./assets/nutShell.png",
        title: "nutShell",
        animation: "fade-up-right",
        description: "A collaborative dashboard application design that consolidates multiple daily organization tools into one convenient space.",
        deployed: "https://christineclemens.github.io/Project1-nutShell/",
        github: "https://github.com/ChristineClemens/Project1-nutShell"
    },
    {
        image: "./assets/SampleTeamPage.png",
        title: "Sample Team Page",
        animation: "fade-up",
        description: "A Node.js application that generates an html file to display a team summary according to user specifications.",
        deployed: "https://christineclemens.github.io/AboutMe/portfolio.html",
        github: "https://github.com/ChristineClemens/EmployeeSummaryEngine"
    },
    {
        image: "./assets/BurgerLogger.png",
        title: "Burger Logger",
        animation: "fade-up-left",
        description: "A simple handlebars rendered application that tracks sandwich orders using MySQL and express.js api calls.",
        deployed: "https://infinite-badlands-97982.herokuapp.com/",
        github: "https://github.com/ChristineClemens/BurgerLogger"
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
