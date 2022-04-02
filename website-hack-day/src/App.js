
import {BrowseRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavbarComponent.js'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
