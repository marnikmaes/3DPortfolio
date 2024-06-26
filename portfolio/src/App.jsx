import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import {Home, About, Projects} from './pages';
import Navbar from './components/Navbar';
import Internship from './pages/Internship';

const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/internship' element={<Internship/>} />
                {/* <Route path='/contact' element={<Contact/>} /> */}
            </Routes>
        </Router>
    </main>
  )
}

export default App
