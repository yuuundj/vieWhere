import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StadiumPage from './pages/StadiumPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stadium/:stadiumId" element={<StadiumPage />} />
    </Routes>
  );
}

export default App;
