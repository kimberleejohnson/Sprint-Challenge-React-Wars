import React from 'react'; 

// Creating Chracter as a functional component that takes in props 

function Character (props) {
    return (
        <div>
            {/* Receiving each character's Data via a prop, the Character component can then call on different data on each CharacterData element */}
            <h1>{props.characterData.name}</h1>
            <h3>Birth year: {props.characterData.birth_year}</h3>
            <h3>Gender: {props.characterData.gender}</h3>
            <h3>Height: {props.characterData.height}</h3>
            <h3>Mass: {props.characterData.mass}</h3>
        </div>
    )
}

export default Character; 