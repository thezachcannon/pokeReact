import React, { Component } from 'react';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  };
class PokeCard extends Component {
    
    constructor(props){
        super(props)
        this.classes = props;
        this.state = {
            pokemon: null,
            flipped: false
        }
    }

    componentDidMount(){
        let vm = this;
        axios.get('https://pokeapi.co/api/v2/pokemon/' + this.props.pokeNo).then(function(rtnData){
            vm.setState({pokemon: rtnData.data});
        })
    }

    render(){
        return (            
            <div>
                {this.state.flipped}
                { this.state.pokemon != null ? (
                     <div onClick={this.flip}>
                         <img src={!this.flipped ? this.state.pokemon.sprites.front_default : this.state.pokemon.sprites.back_default} />
                        <p>{this.state.pokemon.name.capitalize()}</p>
                    </div>
                )
                    : (
                            <CircularProgress className='primary' />
                      )
                }
            </div>
        )
    }
}


export default withStyles(styles)(PokeCard);