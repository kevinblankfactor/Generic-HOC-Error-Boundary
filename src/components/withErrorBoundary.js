import React from 'react';
import {
  Text, View, Button, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
  },
  text: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

function withErrorBoundary(WrappedComponent, CustomErrorScreen) {
  return class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

    // static componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    // Also, you could use navigation if an error is catched and go to another screen.
    // }

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        // And also, this UI could have a navigation option button for returning to another screen
        if (CustomErrorScreen !== undefined) {
          return (
            <View style={styles.container}>
              <CustomErrorScreen />
              <Button
                title="Try again"
                onPress={() => this.setState({ hasError: false })}
              />
            </View>
          );
        }
        return (
            <View style={styles.container}>
              <Text style={styles.text}>Something went wrong with this component.</Text>
              <Button
                title="Try again"
                onPress={() => this.setState({ hasError: false })}
              />
            </View>
        );
      }

      // If everything works as expected, then, returns the wrapped screen/component
      return <WrappedComponent />;
    }
  };
}
withErrorBoundary.propTypes = {
  errorScreen: PropTypes.element,
};

export default withErrorBoundary;
