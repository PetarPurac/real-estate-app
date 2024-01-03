import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
    <div>
      Real Estate App
    </div>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
