import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import {Routes, Route, Link} from 'react-router-dom';

function App() {

  return (
   <>
    <Link to='/'>Home</Link><br />
    <Link to='/contact'>Contact</Link><br />
    <Link to='/about'>About</Link>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/About' element={<About />} />
    </Routes>
   </>
  )
}

export default App  
