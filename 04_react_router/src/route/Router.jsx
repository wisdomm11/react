import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Footer from "../pages/Footer"
import Compmany from "../pages/Compmany"
import Gallery from "../pages/Gallery"
import Edit from "../pages/Edit"
import Edit2 from "../pages/Edit2"

const Router = () => {
  return (
    <>
        <Routes>
          <Route path="/" element= {<Home/>}></Route>
          <Route path="/about" element= {<About/>}></Route>
          <Route path="/footer" element= {<Footer/>}></Route>
          <Route path="/company" element= {<Compmany/>}></Route>
          <Route path="/gallery" element= {<Gallery/>}></Route>
          <Route path="/edit/:id" element= {<Edit/>}></Route>
          <Route path="/edit2" element= {<Edit2/>}></Route>
        </Routes>
    </>
    
  )
}

export default Router