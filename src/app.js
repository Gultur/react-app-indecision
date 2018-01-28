import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/normalize.css/normalize.css'
import './styles/styles.scss';
import IndecisionApp from './components/IndecisionApp';

/*class OldSyntax{
    constructor(){
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this)
    }

    getGreeting() {
        return `Hi, My name is $(this.name)`;
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);*/


// plugin babel 
/*class NewSyntax{
    name = "jen";
    getGreeting = () => {
        return `Hi, My name is $(this.name)`;
    }
}
const newSyntax = new NewSyntax();
console.log(newSyntax);*/

/*
const Layout = (props) => {
    return(
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    )
};
const template  = (
        <div>
            <h1>Page Title</h1>
            <p>This is my page</p>
        </div>
);
*/
// option 1, passer une variable en props , utiliser {props.content} dans le return du Layout
//ReactDOM.render(<Layout content={template} />, document.getElementById('app'))
//option 2, passer directement le jsx, utiliser {props.children} dans le return du Layout
/*ReactDOM.render((
    <Layout>
        <div>
            <h1>Page Title</h1>
            <p>This is my page</p>
        </div>
    </Layout>),
     document.getElementById('app'))*/
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))