import React from 'react';
import Count from './Count';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Button } from 'react-native';

let CountContainer = connect(state => ({ value: state.count }))(Count);

export default class Counter extends React.Component {
    static navigationOptions = {
        title: 'Counter!',  
    };

    render() {
        return (
            <View style = { styles.container }>
                <Text style = { styles.paragraph }>
                    { this.props.count }
                </Text>
                <Button 
                    title = "Increment"
                    onPress = {() => this.props.dispatch({ type: 'INCREMENT' })}
                />
                <Button 
                    title = "Decrement"
                    onPress = {() => this.props.dispatch({ type: 'DECREMENT' })}
                />
                <Button 
                    title = "Go to static count screen"
                    onPress = {() => this.props.navigation.navigate('StaticCounter')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
});