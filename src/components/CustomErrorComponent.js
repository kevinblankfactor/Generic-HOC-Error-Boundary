import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    minHeight: 180,
    alignContent: 'space-around',
  },
  warning: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
    marginVertical: 3,
  },
});

const CustomErrorScreen = () => (
  <View style={styles.container}>
    <Text style={styles.warning}>
      Ups! Something went wrong.
    </Text>
    <Text style={styles.description}>
      Custom Error Component.
    </Text>
    <Text style={styles.description}>
      (this could also be a screen)
    </Text>
  </View>
);

export default CustomErrorScreen;
