import React, { useEffect, useState } from 'react'
import { About } from './components/about/About'
import { Cover } from './components/cover/Cover'
import { Navbar } from './components/navbar/Navbar'
import { Projects } from './components/projects/Projects'
import './styles/home/home.css'

export const Home = () => {
  const [ScrollHeight, setScroll] = useState(0)

  const handleScroll = () => {
    const position = window.scrollY
    setScroll(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [ScrollHeight])

  return (
    <div className="home">
      <Navbar isScrolling={ScrollHeight} />
      <Cover />
      <About />
      <Projects />
      <footer style={{ color: 'white', margin: 'auto', textAlign: 'center' }}>
        Jose Jeisson Ceballos - Web Developer
      </footer>
    </div>
  )
}
