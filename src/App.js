import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes >
          <Route path='/' element={<Resume />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
