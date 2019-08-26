import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class StaticCounter extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Same number, wow!`,
    });

    render() {
        return (
            <View style = { styles.container }>
                <Text style = { styles.paragraph }>
                    { this.props.count }
                </Text>
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