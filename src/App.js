import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aprovacao from './pages/aprovado';

function App() {
  return (
    <Router basename="/landing-aprovados2025">
      <Routes>
      <Route path="/" element={<Aprovacao />} />
        <Route path="/:id" element={<Aprovacao />} />
      </Routes>
    </Router>
  );
}

export default App;
