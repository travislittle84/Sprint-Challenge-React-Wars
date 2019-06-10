import React from 'react';

import Character from './Character';

function CharacterList(props) {
    return (
        <div className="character-list">
            {props.characterList.map(character => {
                return (
                    <div className="character-container">
                        <Character character={character} key={character.index}/>
                    </div>
                                        
                );
            })}
        </div>
    );  
}

export default CharacterList;