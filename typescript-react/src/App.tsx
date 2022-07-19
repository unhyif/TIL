import { AppContext } from 'contexts/AppContext';
import Person, { GenderEnum } from 'components/Person';

const App = () => (
  <AppContext.Provider value={{ isTall: true }}>
    <Person name="J" age={0} gender={GenderEnum.female} grade="fourth" />
  </AppContext.Provider>
);

export default App;
