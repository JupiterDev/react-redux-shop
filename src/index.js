import React from 'react'
import ReactDOM from 'react-dom'

import store from './store'
import { Provider } from 'react-redux'

import 'semantic-ui-css/semantic.min.css'
import './index.sass'

import App from './containers/App';

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
