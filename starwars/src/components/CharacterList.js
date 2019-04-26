import React from 'react'; 
import Character from './Character'; 

import './StarWars.css'; 

// Creating CharacterList as a functional component that takes in props. 
function CharacterList (props) {
    return (
        <div class="characterList">
            {/* CharacterList receives the characterData, and needs to pass it down to Character as an array.  */}
            {props.characterData.map((characterData) => (
            
            // {/* CharacterList will display each character through a React Component, which receives each Character's Data via a prop from the mapped array */}
            <Character characterData={characterData} /> 
            ))}
        </div>
    );
}

export default CharacterList; 