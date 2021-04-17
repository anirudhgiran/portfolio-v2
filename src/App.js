import './App.scss';

//Component Imports {Home}
import Header from './components/Header/Header';
import NavbarMobile from './components/Navbar-Mobile/Navbar';
import Home from './components/Home/Home';

//Component Imports {Projects}
import Projects from './components/Projects/Projects';

//Components Imports {Contact}
import Contact from './components/Contact/Contact';

//Components Import {Individual Project}
import ProjectTemplate from './components/IndividualProjects/ProjectTemplate';

//React Router DOM Imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Responsive React Imports
import { IdResponsiveRenderOnlyIn, Responsive } from 'responsive-react';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/:id" component={ProjectTemplate} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Responsive displayIn={[IdResponsiveRenderOnlyIn.Mobile]}>
          <NavbarMobile />
        </Responsive>
      </Router>
    </div>
  );
}

export default App;