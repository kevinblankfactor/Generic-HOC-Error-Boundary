import React from 'react';
import {
  Text, StyleSheet, Button, View,
} from 'react-native';
// Import the Error Boundary Higher Order Component
import withErrorBoundary from './withErrorBoundary';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  number: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('This is a test error catched by the Error Boundary HOC.');
    }
    return (
      <View style={styles.container}>
        <Text style={styles.number}>
          {this.state.counter}
        </Text>
        <Button
          title="Increase counter"
          onPress={() => this.handleClick()}
        />
      </View>
    );
  }
}

const CustomErrorScreen = () => (
  <View>
    <Text>
      Custom Error Screen
    </Text>
  </View>
);

// Wrap the component with the ErrorBoundary HOC and export it
export default withErrorBoundary(BuggyCounter, CustomErrorScreen);
