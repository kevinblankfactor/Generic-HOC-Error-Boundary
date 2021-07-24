# Description
In this project I combined both the 
<a href = "https://reactjs.org/docs/higher-order-components.html">Higher-Order Components</a> 
with <a href = "https://reactjs.org/docs/error-boundaries.html">Error Boundaries</a> React's
patterns to make a simple and flexible solution for handling UI errors. you could 
just copy the source code from the repo or download the complete project and start 
playing around with it.

# Installation

Download or clone the source code, open your terminal in the project directory, 
do ***npm install*** (or ***yarn install***). Then, go to the ***ios*** folder 
(type ***cd ios*** in your terminal when already on the root directory) and do
***pod install*** (you must have Xcode installed from the App Store). Finally, 
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

Import the **withErrorBoundary** HOC in the screen/component you want to add the
Error Boundaries capabilities and wrap the screen/component with this:

    // BuggyCounter.js
    import withErrorBoundary from './withErrorBoundary';

    ... BuggyCounter's code

    export default withErrorBoundary(BuggyCounter);

# Custom Error Component/Screen

If you need to implement a custom error component (or screen), just create it 
and pass it as props through the withErrorBoundary HOC as follows:

    const CustomErrorComponent = () => (
      <View>
        <Text>
          Custom Error Component
        </Text>
      </View>
    );

    export default withErrorBoundary(BuggyCounter, CustomErrorComponent);

# Screenshots

### Main
<br>
<img src="./src/assets/main.png" height="500" alt="main" />

### UI custom error component
<br>
<img src="./src/assets/UIerrorMessage.png" height="500" alt="UI custom error component" />

### UI default error component
<br>
<img src="./src/assets/defaultUIerrorMessage.png" height="500" alt="UI default error component" />

### Console Error
<br>
<img src="./src/assets/consoleError.png" height="500" alt="Console Error" />

# Demo

<a href = "https://snack.expo.dev/@kevwas/generic-hoc-error-boundary">https://snack.expo.dev/@kevwas/generic-hoc-error-boundary</a>
