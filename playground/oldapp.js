
// jsx - javascript xml


const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault(); 
    console.log("form Submited");
    const option = e.target.elements.option.value;
    
    if(option){
        app.options.push(option)
        e.target.elements.option.value = "";
        render();
    }
};

const onMakeDecision = () =>{

    const randomNum = Math.floor(Math.random()* app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const onRemovaAll = (e) => {
    app.options = [];
    render();
}

const render = () => {
    const template = (
        <div>
            <h1> {app.title} </h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here are your options' : 'no options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onMakeDecision} disabled={app.options.length < 1}>What Should i do?</button>
            <button onClick={onRemovaAll}> Remove All </button>
            <ol>
            {
                app.options.map((option)=>{

                    return <li key={option}>{option}</li>;
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>

            
    
        </div>
    );


    // render (ce que l'on veut afficher, où)
    ReactDOM.render(template, appRoot);

}



    const appRoot = document.getElementById("app");
    render();

