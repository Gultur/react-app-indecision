import React from 'react';

//stateless component sont juste des fonctions de type render
// on les utilise s'il n'y a pas de state interne
//un affichage pure de données fournies par exemple
// on est appelle de la même façon <Action hasOptions/>
const Action = (props) => {

    return (
         <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should i do</button>
        </div>
    );
    
}
export default Action;