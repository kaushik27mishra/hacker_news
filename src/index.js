import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import App from './App';

const debug =
    process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();


ReactDOM.render(
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <App/>
    </StyletronProvider>, 
document.getElementById('root'));

serviceWorker.unregister();