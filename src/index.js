import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import {
  Provider
} from 'react-redux';
import {
  loadProducts
} from './actions/productActions';
import routes from './routes';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();

store.dispatch(loadProducts());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>{routes}</App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
