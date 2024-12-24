import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Calendar from './pages/Calendar';
import Safari from './pages/Safari';
import Maps from './pages/Maps';
import Photos from './pages/Photos';
import Notes from './pages/Notes';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/safari" element={<Safari />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}

export default App;
