import React from "react"
import '../App.css'

export default function About () {
    return(
       <section className="About">
      
            <div className="about-header">
                    <img src="src/assets/naamakuva.jpg"></img>
                <h1>I'm Juho</h1>
            </div>
            <p>Welcome to my site
                Currently i'm learning <b>react</b> and web-development.
            </p>

            <h1>Skills</h1>
            <p>Languages / frameworks i have been mainly using. This site is done with React!</p>
            <ul>
                <li>C/C++</li>
                <li>Python</li>
                <li>React</li>
            </ul>
            <h1>Education</h1>
            <p>University of Oulu, Bachelors of Information processings science, 2017 - 2023</p>
       </section>
    )
}