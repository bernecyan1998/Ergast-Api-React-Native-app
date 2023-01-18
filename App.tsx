import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Navigation} from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/stores/store';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <Navigation />
    </SafeAreaView>
  );
}
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
