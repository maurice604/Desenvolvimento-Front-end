import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        const { pokemons } = this.props;

        return(
            <section className="poke-list">
                {pokemons.map(poke => <Pokemon poke={poke} />
                )}
            </section>
        );
    }
} 

export default Pokedex;
