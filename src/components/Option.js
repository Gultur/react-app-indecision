import React from 'react';

const Option = (props) => (


     <li>Options : {props.optionText}
     <button className="button button--link" onClick={(e) => {props.handleDeleteOption(props.optionText)}}>remove</button>
     </li>

 );


export default Option;