import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/style/base/custom-antd.css';

function App() {
  return (
    <Router>
      <Layout>
        <Home />
      </Layout>
    </Router>
  );
}

export default App;
