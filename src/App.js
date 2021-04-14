import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import './App.css';

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1> 404: Page Not Found</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' exact component={Portfolio} />
        <Route exact path='/projects/:id' exact component={Project} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
