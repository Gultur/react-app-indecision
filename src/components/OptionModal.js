import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearselectedOption}

        >
        <h3>Selected Options</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearselectedOption}>Okay</button>
    </Modal>
    )
    
};

export default OptionModal;