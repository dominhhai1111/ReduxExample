import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import Counter from './components/Counter';
import StaticCounter from './components/StaticCounter';
import countApp from './reducers/reducers';

// Connect the screens to redux
let CounterContainer = connect(state => ({ count: state.count }))(Counter);
let StaticCounterContainer = connect(state => ({ count: state.count }))(StaticCounter);

let RootStack = createStackNavigator({
  Counter: CounterContainer,
  StaticCounter: StaticCounterContainer,
});

let Navigation = createAppContainer(RootStack);

let store = createStore(countApp);

export default class App extends React.Component {
  render() {
    return(
      <Provider store = {store}>
          <Navigation />
      </Provider>
    );
  };
};

