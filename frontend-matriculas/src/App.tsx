import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Overview from './pages/dashboard/Overview';
import Alumnos from './pages/dashboard/Alumnos';
import Cursos from './pages/dashboard/Cursos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/overview" />} />
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/alumnos" element={<Alumnos />} />
        <Route path="/dashboard/cursos" element={<Cursos />} />
      </Routes>
    </Router>
  );
}

export default App;
