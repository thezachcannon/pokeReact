import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider.js';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import PokeView from './components/PokeView'
import './App.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class App extends Component {
  
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
        <section className=''>
        <PokeView />
        </section>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
