
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

import { useState } from "react"

function App() {

  const [change, setChange] = useState(true);

  function contact(){
    setChange(false);
  }

  function about(){
    setChange(true);
  }

  return (
      <main className="container">
        <Navbar 
          onContact={contact} 
          onAbout={about} 
          title="JuhosStuff"
        />
        <Hero title="Welcome"/>
        {change ? 
          <About /> : <Contact />
        }
        <Footer />
      </main>
  )
}

export default App
