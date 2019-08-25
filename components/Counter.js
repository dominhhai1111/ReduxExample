import React from 'react';
import Count from './components/Count';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

let CountContainer = connect(state => ({ value: state.count }))(Count);

class Counter extends React.Component {
    static navigationOptions = {
        title: <CountContainer />
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