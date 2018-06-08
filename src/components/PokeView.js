import React, { Component } from 'react';
import PokeCard from './PokeCard'
import Grid from '@material-ui/core/Grid/Grid'

class Pokeview extends Component {
  render() {
    return (
      <div>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={16}>
          {[...Array(9).keys()].map((number) => 
              <PokeCard key={number} pokeNo={number + 1}/>
          )}
          </Grid>
        </Grid>
      </Grid>          
      </div>
    );
  }
}

export default Pokeview;
