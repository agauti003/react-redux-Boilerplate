import React from 'react';
import ReactDom from 'react-dom';
import Root from './routes/Root';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import configureStore from './store/configureStore';

const store = configureStore();
ReactDom.render(
  <Root store={store} />,
  document.getElementById('root')
);
registerServiceWorker();