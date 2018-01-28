import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';



// on peut definir des props par défaut
/*IndecisionApp.defaultProps = {
    options:[]
}*/

export default class IndecisionApp extends React.Component{


    state = {
        options: [],
        selectedOption: undefined,
        subtitle: "Put your life in the hand of a computer"
    };
    
    // old syntaxe
    /*
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

    //methode lifecycle,  qui se lance à l'initialisation
    // les lifecycle ne sont disponibles que pour les classes
    // un composant stateless ne peut pas l'utiliser
    componentDidMount(){

        try {
            const json = localStorage.getItem('options');
              const options = JSON.parse(json);

              if(options){ this.setState(() => ({options}));}
        } catch(e){}
    }

    // methode lifecycle qui se lance après modifications des valeurs states ou props
    // on peut passer les valeurs prevProps et preState en argument
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    // méthode lifecycle qui se lance quand le component est unmout
  
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }*/

    handleDeleteOption = () => {
        //old syntax
    /* handleDeleteOptions(){*/
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

    handleDeleteOption = (optionToRemove) => {
        //old syntax
    /*handleDeleteOption(optionToRemove){*/
        this.setState((prevState) => ({
            //filter permet de trier un tableau
            //une valeur true indique que l'on va conserver l'option
            // d'ou le test qui renvoit false en cas de match entre l'option a supprimer
            // et celle du tableau
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handlePickOption = () => {
        //old syntax
    /*handlePickOption(){*/
        const randomNum = Math.floor(Math.random()* this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }))
        console.log(option);
    }

    handleClearselectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    handleAddOption = (option) => {
    //old syntax
/*    handleAddOption(option){*/

        if(!option){
            return 'enter valid value to add item';
        } else if (this.state.options.indexOf(option)>-1){
            return 'this option already exist '
        }else{

            this.setState((prevState) => ({options: prevState.options.concat([option])}));

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


    render() {

        const subtitle = 'Put your life in the hands of a computer';

        // pour que le component enfant puisse appeler une methode d'un parent, elle doit avoir été passée en props
        // comme ici pour handleDeleteOptions pour le component options, ce sera la fonction de Indecision app qui sera effectuée
        return (
            <div>
                <Header subtitle={this.state.subtitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length >0} handlePick={this.handlePickOption}/>
                    <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearselectedOption={this.handleClearselectedOption}/>
            </div>
        );
    }
    
}