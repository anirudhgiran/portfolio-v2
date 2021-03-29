import './App.scss';

//Component Imports
import Header from './components/Header/Header';
import NavbarMobile from './components/Navbar-Mobile/Navbar';
import Home from './components/Home/Home';

//React Router DOM Imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Home/>
        <NavbarMobile/>
      </Router>
    </div>
  );
}

export default App;
