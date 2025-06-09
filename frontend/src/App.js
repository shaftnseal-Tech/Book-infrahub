import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Create from './components/Create';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const myWidth = 200;

  return (
    <div className="App">
      <Navbar
        drawerWidth={myWidth}
        content={
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/aboutus" element={<Aboutus />} />
            </Routes>
            {/* <Footer /> */}
          </>
        }
      />
    </div>
  );
}

export default App;
