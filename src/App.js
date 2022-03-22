import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import errorPage from './Pages/ErrorPage';
import UserPage from './Pages/UserPage';
import ParentalPage from './Pages/ParentalPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Menu />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <ProtectedRoute>
            <Route path="/parent" element={<ParentalPage />} isParent={true} />
          </ProtectedRoute>

          <Route path="/user" element={<UserPage />} isParent={false} />

          <Route path="*" element={<Navigate to={<errorPage />} isParent={false} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
