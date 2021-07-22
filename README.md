# Installation

Download or clone the source code, open your terminal in the project directory, 
do ***npm install*** (or ***yarn install***). Then, go to the ***ios*** folder 
(type ***cd ios*** in your terminal when already on the root directory) and do
***pod install*** (you must have xcode installed from the App Store). Finally, 
go back to the root directory of the project (type ***cd ..***) and type 
***npm run ios*** in your terminal. If you did well, the Metro bundler will 
start building the app an then this will open your iOS simulator, install the 
app and run it.

### List of commands in order:

    $ git clone https://github.com/Kevwas/Generic-HOC-Error-Boundary.git
    $ cd Generic-HOC-Error-Boundary
    $ npm install 
    $ cd ios
    $ pod install
    $ cd ..
    $ npm run ios

# Usage

Import the withErrorBoundary HOC in the screen/component you want to add the
Error Boundaries capabilities and wrap the screen/component with this:

    // BuggyCounter.js
    import withErrorBoundary from './withErrorBoundary';

    ... BuggyCounter's code

    export default withErrorBoundary(BuggyCounter);

## Custom Error Screen

If you need want to implement a custom error screen, just create it 
and pass it as props through the withErrorBoundary HOC as follows:

    const CustomErrorScreen = () => (
      <View>
        <Text>
          Custom Error Screen
        </Text>
      </View>
    );

    export default withErrorBoundary(BuggyCounter, CustomErrorScreen);


### Demo

    https://snack.expo.dev/@kevwas/generic-hoc-error-boundary