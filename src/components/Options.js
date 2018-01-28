import React from 'react';
import Option from './Option';

const Options = (props) => (
    // pour appeler une methode d'un "parent", elle doit avoir été passée en props
// comme ici pour handleDeleteOptions

    <div>
    <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option</p>}
        <ol>
            {props.options.map((option) => 
                <Option 
                key={option} 
                optionText={option}
                handleDeleteOption= {props.handleDeleteOption}/>
            )}
        </ol>
    </div>

);



export default Options;