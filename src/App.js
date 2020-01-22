import React from 'react';
import { ThemeProvider,StyleReset } from 'atomize';
import Navbar from './Navbar/Navbar'
import Main from './Main/Main'

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
    brand900: "info900",
  }
};


function App() {
  return (  
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <StyleReset/>
        <Navbar/>
        <Main/>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
