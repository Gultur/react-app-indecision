import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';



// on peut definir des props par défaut
/*IndecisionApp.defaultProps = {
    options:[]
}*/

class IndecisionApp extends React.Component{
    
    constructor(props){
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : [],
        }

    }


    componentDidMount(){

        try {
            const json = localStorage.getItem('options');
              const options = JSON.parse(json);

              if(options){ this.setState(() => ({options}));}
        } catch(e){}
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleDeleteOptions(){
        /*this.setState(() => {
            return {
                options: []
            };
        });*/

        //le code peut être simplifié
        //en cas d'affecation d'un objet il faut l'entourer de ()
        //sinon les {} sont pris pour une fonction et non un object
        this.setState(()=>({options: []}));
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            //filter permet de trier un tableau
            //une valeur true indique que l'on va conserver l'option
            // d'ou le test qui renvoit false en cas de match entre l'option a supprimer
            // et celle du tableau
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handlePickOption(){
        const randomNum = Math.floor(Math.random()* this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option){

        if(!option){
            return 'enter valid value to add item';
        } else if (this.state.options.indexOf(option)>-1){
            return 'this option already exist '
        }else{

            this.setState((prevState) => ({options: prevState.options.concat([option])}));

      }
    }

    render() {

        const subtitle = 'Put your life in the hands of a computer';

        // pour que le component enfant puisse appeler une methode d'un parent, elle doit avoir été passée en props
        // comme ici pour handleDeleteOptions pour le component options, ce sera la fonction de Indecision app qui sera effectuée
        return (
            <div>
                <Header subtitle={this.state.subtitle}/>
                <Action hasOptions={this.state.options.length >0} handlePick={this.handlePickOption}/>
                <Options options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
    
}