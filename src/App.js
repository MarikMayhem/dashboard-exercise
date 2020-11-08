import './App.scss';
import Header from './components/Navigation/Header/Header';
import Projects from './containers/Projects/Projects'
import { Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/projects" />
        </Route>
        <Route path="/projects" component={Projects} />
        <Route path="/dashboard" render={() => <h1>Dashboard</h1>} />
        <Route path="/calendar" render={() => <h1>Calendar</h1>} />
        <Route path="/statuses" render={() => <h1>Statuses</h1>} />
        <Route path="/people" render={() => <h1>People</h1>} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
