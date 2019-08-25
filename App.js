import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import Counter from './components/Counter';
import StaticCounter from './components/StaticCounter';

// Connect the screens to redux
let CounterContainer = connect(state => ({ count: state.count }))(Counter);
let StaticCounterContainer = connect(state => ({ count: state.count }))(StaticCounter);

let RootStack = createStackNavigator({
  Counter: CounterContainer,
  StaticCounter: StaticCounterContainer,
});

let Navigation = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return(
      <Provider store = {store}>
          <Navigation />
      </Provider>
    );
  };
};

