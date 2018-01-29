import React from 'react';

export default class AddOption extends React.Component{

    state = {
        error: undefined
    };
    //syntaxe sans le plug in tansform class
    /*constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }*/

    //syntaxe sans le plug in  tansform class
    /*handleAddOption(e){*/

    handleAddOption = (e) => {
        e.preventDefault();
        const option = (e.target.option.value).trim();
        // handleAddOption renvoie un message d'erreur si besoin
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({error: error}));
        // on pourrait juste ecrire error, car les deux noms sont identiques

        if(!error){
            e.target.option.value = '';
        }

    }

    render(){
        return(
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add option</button>
                 </form>
             </div>
        );
    }

}