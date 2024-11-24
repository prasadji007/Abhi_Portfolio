import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
      </Router>
  );
}

export default App;
