import React from 'react';

class Pokemon extends React.Component {
    render() {
        const {id, name, type, averageWeight: {value, measurementUnit}, image, moreInfo } = this.props.poke;

        return (
            <section className="poke-card">
                <h3>{name}</h3>
                <span>{id}</span>
                <img src={image} alt="Imagem do Pokemon" />
                <span>{type}</span>
                <span>{moreInfo}</span>
                <span>{value}</span>
                <span>{measurementUnit}</span>
            </section>
        )
    }
}

export default Pokemon