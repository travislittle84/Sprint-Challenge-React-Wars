import React, { Component } from 'react';

import CharacterAttribute from './CharterAttribute'

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterPlanet: {}
        };
    }

    componentDidMount() { 
        this.getPlanet(this.props.character.homeworld);
      }
    
      getPlanet = URL => {  // Get Planet data from API URL stored in props.character.homeworld
        fetch(URL)
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.setState({ characterPlanet: data });
          })
          .catch(err => {
            throw new Error(err);
          });
      };

    render() {
        return (
            <div className="character">
                <h1>{this.props.character.name}</h1>
                <CharacterAttribute  description="Gender" attribute={this.props.character.gender}/>
                <CharacterAttribute  description="YOB" attribute={this.props.character.birth_year}/>
                <CharacterAttribute  description="Homeworld" attribute={this.state.characterPlanet.name}/>
                <CharacterAttribute  description="Homeworld Climate" attribute={this.state.characterPlanet.climate}/>   
            </div>
            
        );
    }
    
}

export default Character;