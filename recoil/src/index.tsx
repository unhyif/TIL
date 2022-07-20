import ReactDOM from 'react-dom';
import './index.css';
import Canvas from 'Canvas';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Atom } from 'examples/Atom';
import { Selector } from 'examples/Selector';

ReactDOM.render(
  <RecoilRoot>
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/examples/atom">
            <Atom />
          </Route>
          <Route path="/examples/selector">
            <Selector />
          </Route>
          <Route>
            <Canvas />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  </RecoilRoot>,
  document.getElementById('root')
);
