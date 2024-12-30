import './App.css'
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
    <div className="app" style={{ color: data.textColor }}>
      <div className="app-container">
        <NavBar/>
        <Hero />
        <About />
        <Plans />
        <Reviews />
        <Preview />
        <Contact />
        <SideBar/>
      </div>
    </div>
  )
}

export default App
