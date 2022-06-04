import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';
import Navbar from './components/navbar/Navbar';

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
