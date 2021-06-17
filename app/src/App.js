import Container from './components/Container';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import HTML from './pages/HTML';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/style/base/custom-antd.css';

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/html'>
            <HTML />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
