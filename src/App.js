import React from 'react';
import { ThemeProvider,StyleReset } from 'atomize';

const theme = {
  colors: {
    brand100: "info100",
    brand200: "info200",
    brand300: "info300",
    brand400: "info400",
    brand500: "info500",
    brand600: "info600",
    brand700: "info700",
    brand800: "info800",
    brand900: "info9  00",
  }
};


function App() {
  return (  
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <StyleReset/>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
