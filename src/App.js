import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import store from './store';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App = () => (
  <Provider store={store}>
    <>
      <Routes />
      <GlobalStyle />
      <ReduxToastr transitionIn="fadeIn" transitionOut="fadeOut" timeOut={4000} />
    </>
  </Provider>
);

export default App;
