// import Container from './components/Container';
// import Header from './components/Header';
// import Dashboard from './components/Dashboard';
// import HTML from './pages/HTML';
// import ImagesInHTML from './pages/ImagesInHTML';
import Home from './pages/Home';
import Layout from './components/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/style/base/custom-antd.css';

function App() {
  return (
    <Router>
      {/* <Container>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path='/html'>
            <HTML />
          </Route>
          <Route path='/html/images-in-html'>
            <ImagesInHTML />
          </Route>
        </Switch>
      </Container> */}
      <Layout>
        <Home />
      </Layout>
    </Router>
  );
}

export default App;
