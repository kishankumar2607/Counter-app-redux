import React from 'react';
import {Provider} from 'react-redux';

//
import Home from './src/screens/Home';
import CounterScreen from './src/screens/CounterScreen';

// import store
import {store} from './src/Redux/store';

export default function App() {
  return (
    <Provider store={store}>
      {/* <Home /> */}
      <CounterScreen />
    </Provider>
  );
}
