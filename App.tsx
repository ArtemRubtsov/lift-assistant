import { AppNavigator } from './src/navigation/AppNavigator';
import { useEffect } from 'react';

import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}


