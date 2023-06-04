import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import DetailPage from './pages/UserPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/user/:userId' element={<DetailPage />} />
    </Routes>
  );
}

export default App;
