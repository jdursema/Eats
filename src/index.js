import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './Reducers';
import thunk from 'redux-thunk';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
&& window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();