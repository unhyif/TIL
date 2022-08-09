import axios from './axios';

export default class AuthAPI {
  async signup(email: string, password: string) {
    const { status } = await axios.post('/users/create', { email, password });
    return status;
  }

  async login(email: string, password: string) {
    const { status, data } = await axios.post('/users/login', {
      email,
      password,
    });
    return { resultCode: status, data };
  }

  logout() {
    localStorage.clear();
    window.location.href = '/';
  }
}
