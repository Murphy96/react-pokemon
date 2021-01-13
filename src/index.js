import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux'
import { history } from "./store/configure_store";
import store from './store'
import reportWebVitals from './reportWebVitals';

// css
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>, document.getElementById('root')
);
reportWebVitals()