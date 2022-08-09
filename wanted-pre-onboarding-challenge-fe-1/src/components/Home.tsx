import AuthAPI from 'apis/AuthAPI';

const Home = ({ authAPI }: { authAPI: AuthAPI }) => (
  <main>
    <button onClick={authAPI.logout}>Log out</button>
  </main>
);

export default Home;
