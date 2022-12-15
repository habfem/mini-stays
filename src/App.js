import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'

const App = () => {
  return (

    <Router>
      <Header />
      <main className='py-5'>
        <Container>
          <Routes>
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
