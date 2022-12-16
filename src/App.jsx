import Header from './components/Header'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer"
  
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'

function App() {

  const [show, setShow] = useState(false)

  const [resume, setResume] = useState(false)
  const docs = [ { uri: require("./assets/Jon_Ziemann_Resume.pdf") } ]

  return (
    <div className='container-fluid'>
      {!resume ? (<><Header resume={resume} setResume={setResume} />
        <About />
        <Portfolio />
        <Footer show={show} setShow={setShow} />
        <Contact show={show} setShow={setShow} /></>) : (<DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />)}

    </div>
  );
}

export default App;
