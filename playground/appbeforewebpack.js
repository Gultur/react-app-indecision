import React from 'react';
import ReactDOM from 'react-dom';

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

// on peut definir des props par défaut
/*IndecisionApp.defaultProps = {
    options:[]
}*/

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
    title: 'Indecision'
};

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

const Options = (props) => {
    // pour appeler une methode d'un "parent", elle doit avoir été passée en props
// comme ici pour handleDeleteOptions
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
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

}

const Option = (props) => {
       return(

            <li>Options : {props.optionText}
            <button onClick={(e) => {props.handleDeleteOption(props.optionText)}}>remove</button>
            </li>

        );
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e){
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                 </form>
             </div>
        );
    }

}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))