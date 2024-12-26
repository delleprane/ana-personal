import './App.css'
import data from "../data.json"
import { About } from './Components/About'
import { Hero } from './Components/Hero/Hero'
import { Plans } from './Components/Plans'
import { Reviews } from './Components/Reviews'
import { Preview } from './Components/Preview'

function App() {

  return (
    <div className="app" style={{color: data.textColor}}>
      <div className="app-container">
       <Hero/>
       <About/>
       <Plans/>
       <Reviews/>
       <Preview/>
      </div>
    </div>
  )
}

export default App
