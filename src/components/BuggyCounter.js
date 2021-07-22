import React, { useState } from 'react';
import {
  Text, StyleSheet, Button, View,
} from 'react-native';
import CustomErrorComponent from './CustomErrorComponent';
// Import the Error Boundary Higher Order Component
import withErrorBoundary from './withErrorBoundary';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
  },
  number: {
    margin: 24,
    marginTop: 0,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const BuggyCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <View style={styles.container}>
      {
        counter === 5
          && <View>
            This will cause a Render error, because text
            strings must be rendered within a Text component
          </View>
      }
      <Text style={styles.number}>
        {counter}
      </Text>
      <Button
        title="Increase counter"
        onPress={() => handleClick()}
      />
    </View>
  );
};

// Wrap the component with the ErrorBoundary HOC and export it
export default withErrorBoundary(BuggyCounter, CustomErrorComponent);
