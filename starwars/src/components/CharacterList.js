import React from 'react'; 
import Character from './components/Character'; 

// Creating CharacterList as a functional component that takes in props. 
function CharacterList (props) {
    return (
        <div>
            {/* CharacterList will display each character, which it takes in as a React Component */}
            <Character /> 
        </div>
    );
}

export default CharacterList; 