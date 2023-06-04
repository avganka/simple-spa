import {Route, Routes} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import DetailPage from './pages/UserPage';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className='mt-4 mb-5'>
        <Container>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/user/:userId' element={<DetailPage />} />
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;
