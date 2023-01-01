import Header from './components/Header'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'

import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'

function App() {

  const [show, setShow] = useState(false)

  return (
    <div className='container-fluid'>
      <Header />
      <About />
      <Portfolio />
      <Footer show={show} setShow={setShow} />
      <Contact show={show} setShow={setShow} />
    </div >
  )
}

export default App
