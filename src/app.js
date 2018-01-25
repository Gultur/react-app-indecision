import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

class OldSyntax{
    constructor(){
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this)
    }

    getGreeting() {
        return `Hi, My name is $(this.name)`;
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);


// plugin babel 
class NewSyntax{
    name = "jen";
    getGreeting = () => {
        return `Hi, My name is $(this.name)`;
    }
}
const newSyntax = new NewSyntax();
console.log(newSyntax);

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))