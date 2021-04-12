import './App.scss';

//Component Imports {Home}
import Header from './components/Header/Header';
import NavbarMobile from './components/Navbar-Mobile/Navbar';
import Home from './components/Home/Home';

//Component Imports {Projects}
import Projects from './components/Projects/Projects';

//Components Import {Individual Project}
import ProjectTemplate from './components/IndividualProjects/ProjectTemplate';

//React Router DOM Imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/projects/:id" component={ProjectTemplate}/>
        </Switch>
        <NavbarMobile />
      </Router>
    </div>
  );
}

export default App;