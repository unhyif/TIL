import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useInput } from 'hooks/useInput';
import { EMAIL_REGEX } from 'utils/constants';
import AuthAPI from 'apis/AuthAPI';

const Signup = ({ authAPI }: { authAPI: AuthAPI }) => {
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
    const resultCode = await authAPI.signup(email, password);

    if (resultCode !== 200) {
      setErrorMessage('에러가 발생했습니다. 다시 시도해 주세요');
      return;
    }
    navigate('/');
  };

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={onSubmit}>
        <input value={email} placeholder="ID" onChange={onEmailChange} />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={onPasswordChange}
        />
        <button disabled={!(isEmailValid && isPasswordValid)}>Sign up</button>
      </form>

      <Link to="/auth">Have an account?</Link>
    </>
  );
};

export default Signup;
