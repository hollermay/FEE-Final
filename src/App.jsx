import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImageGrid from './components/Imagegrid'
import Trends from './components/Trends'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className='main'>
      <Navbar/>
      <Hero/>
      </div>
      <ImageGrid/>
      <Trends/>
      <Footer/>
    </div>
  )
}

export default App
