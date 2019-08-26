import React from 'react';

export default class Count extends React.Component {
    render() {
      return <Text>Count: { this.props.value }</Text>
    };
}