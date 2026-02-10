import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ColoringPage from './pages/ColoringPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page/:id" element={<ColoringPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
