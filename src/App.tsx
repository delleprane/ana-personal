import './App.css'
import { Helmet } from "react-helmet";

import data from "../data.json"
import { About } from './Components/About'
import { Hero } from './Components/Hero/Hero'
import { Plans } from './Components/Plans'
import { Reviews } from './Components/Reviews'
import { Preview } from './Components/Preview'
import { Contact } from './Components/Contact'
import { NavBar } from './Components/NavBar'
import { SideBar } from './Components/SideBar'

function App() {

  return (
    <>
    <Helmet>
        <title>Ana Personal Trainer - Transforme Sua Vida!</title>
        <meta name="description" content="Treinamento personalizado para alcançar seus objetivos de saúde e fitness. Conheça Ana, a Personal Trainer que vai transformar sua rotina de exercícios!" />
        <meta name="keywords" content="personal trainer, treino personalizado, saúde, fitness, exercícios, emagrecimento, fortalecimento muscular" />
        <meta property="og:title" content="Ana Personal Trainer - Transforme sua Vida!" />
        <meta property="og:description" content="Treinamento personalizado com Ana, a Personal Trainer que entende suas necessidades. Comece hoje sua jornada fitness!" />
        <meta property="og:image" content="/images/banners/personal.webp" />
        <meta property="og:url" content="https://personal-ana.vercel.app" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="app" style={{ color: data.textColor }}>
        <div className="app-container">
          <NavBar />
          <Hero />
          <About />
          <Plans />
          <Reviews />
          <Preview />
          <Contact />
          <SideBar />
        </div>
      </div>
    </>
  )
}

export default App
