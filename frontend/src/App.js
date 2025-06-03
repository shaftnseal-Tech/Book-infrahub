import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/aboutus" element={<Aboutus />} />
     </Routes>
    </div>
  );
}

export default App;
