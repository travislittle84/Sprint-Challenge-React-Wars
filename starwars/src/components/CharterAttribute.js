import React from 'react'

function CharacterAttribute(props) {
    return (
        <li><span className="attribute-description">{props.description}: </span><span className="attribute">{props.attribute}</span></li>
    );
}

export default CharacterAttribute;