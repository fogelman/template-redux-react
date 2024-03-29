import React from 'react';

import './config/ReactotronConfig';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
