
import '../App.css'

export default function Hero ({title}) {
    return (
        <section 
        className="Hero"
        >
            <h1>{title}</h1>
            <div>
                Warm welcome to my simple and boring website. Check those cool links below!
            </div>
            <div className="about-links">
               
                <a href="https://github.com/Juryynan">
                    <button><img src="src/assets/github.png"></img>GitHub</button>
                </a>
             
                <a href="src/assets/CV_web.pdf">
                    <button><img src="src/assets/download.png"></img>CV</button>
                </a>
          

            </div>
        </section>
    )
}