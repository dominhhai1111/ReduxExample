import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class StaticCounter extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('count'),
    });

    componentDidMount() {
        this.updateCount();
    }

    componentDidUpdate() {
        this.updateCount();
    }

    updateCount() {
        this.props.navigation.setParams({ count: this.props.count });
    }

    render() {
        return (
            <View style = { styles.container }>
                <Text style = { styles.paragraph }>
                    { this.props.navigation.getParam('count') }
                </Text>
            </View>
        );
    }
}