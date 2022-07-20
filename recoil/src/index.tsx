import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Canvas from 'Canvas';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Atom } from 'examples/Atom';
import { Selector } from 'examples/Selector';

ReactDOM.render(
  <React.StrictMode>
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
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
