import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

import BuggyCounter from './src/components/BuggyCounter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '3%',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '3%',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  textContainer: {
    marginHorizontal: '5%',
    marginVertical: '2%',
  },
});

const App = () => (
    <View style={styles.container}>
      <Text style={styles.title}>
        Testing of Generic Error Boundary Higher Order Component
      </Text>
      <View style={styles.textContainer}>
        <Text>
          Click on the numbers to increase the counters.
        </Text>
        <Text>
          The counter is programmed to throw an error when it reaches 5.
          This simulates a JavaScript error in a component.
        </Text>
      </View>
      <Card style={styles.card}>
        <BuggyCounter />
      </Card>
    </View>
);

export default App;
