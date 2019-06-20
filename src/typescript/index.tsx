import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloWorld } from './components/helloworld';

ReactDOM.render(
  <HelloWorld propMessage="Example" />,
  document.getElementById("app")
);