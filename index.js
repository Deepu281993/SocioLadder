import {AppRegistry} from 'react-native';
import React from 'react';

import App from '@app/App';
import {name as appName} from './app.json';
import {Root} from 'native-base';
import {Provider} from 'react-redux';
import configureStore from '@redux/store';

const store = configureStore();
const SocioLadderApp = prop => (
  <Root>
    <Provider store={store}>
      <App />
    </Provider>
  </Root>
);
AppRegistry.registerComponent(appName, () => SocioLadderApp);
