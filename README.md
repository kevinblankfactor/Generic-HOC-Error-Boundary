# Usage

Import the withErrorBoundary HOC in the screen/component you want to add the
Error Boundaries capabilities and wrap the screen/component with this:

    $ // BuggyCounter.js
    $ import withErrorBoundary from './withErrorBoundary';

    $ ... BuggyCounter's code

    $ export default withErrorBoundary(BuggyCounter);

# Custom Error Screen

If you need want to implement a custom error screen, just create it 
and pass it as props through the withErrorBoundary HOC as follows:

    $ const CustomErrorScreen = () => (
    $   <View>
    $     <Text>
    $       Custom Error Screen
    $     </Text>
    $   </View>
    $ );

    $ export default withErrorBoundary(BuggyCounter, CustomErrorScreen);