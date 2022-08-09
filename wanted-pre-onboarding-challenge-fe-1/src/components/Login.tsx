import { FormEvent, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useInput } from 'hooks/useInput';
import { EMAIL_REGEX } from 'utils/constants';
import AuthAPI from 'apis/AuthAPI';
import axios from 'apis/axios';

const Login = ({ authAPI }: { authAPI: AuthAPI }) => {
  const [email, onEmailChange] = useInput();
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [password, onPasswordChange] = useInput();
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => setIsEmailValid(EMAIL_REGEX.test(email)), [email]);
  useEffect(() => setIsPasswordValid(password.length >= 8), [password]);

  const navigate = useNavigate();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { resultCode, data } = await authAPI.login(email, password);

    if (resultCode !== 200) {
      setErrorMessage('에러가 발생했습니다. 다시 시도해 주세요');
      return;
    }

    const token = data.token;
    localStorage.setItem('TOKEN', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    navigate('/');
  };

  return localStorage.getItem('TOKEN') ? (
    <Navigate to="/" />
  ) : (
    <>
      <Link to="/">Home</Link>

      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={onSubmit}>
        <input value={email} placeholder="ID" onChange={onEmailChange} />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={onPasswordChange}
        />
        <button disabled={!(isEmailValid && isPasswordValid)}>Log in</button>
      </form>

      <Link to="signup">Join Us</Link>
    </>
  );
};

export default Login;
