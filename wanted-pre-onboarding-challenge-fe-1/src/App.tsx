import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'apis/axios';
import Home from 'components/Home';
import Login from 'components/Login';
import Signup from 'components/Signup';
import AuthAPI from 'apis/AuthAPI';

const authAPI = new AuthAPI();

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('TOKEN');

    // TODO
    if (!token) {
      alert('Your token is invalid.');
      navigate('/auth');
      return;
    }

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home authAPI={authAPI} />} />
      <Route path="/auth" element={<Login authAPI={authAPI} />} />
      <Route path="/auth/signup" element={<Signup authAPI={authAPI} />} />
    </Routes>
  );
}

export default App;
