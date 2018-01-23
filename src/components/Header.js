import React from 'react';

const Header = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>            
    );
}

// on peut definir des props par défaut en cas de titre non renseigné
Header.defaultProps = {
    title: 'Indecision The App'
};

export default Header;