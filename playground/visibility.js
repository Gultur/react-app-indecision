class Visibility extends React.Component{

    constructor(props){
        super(props);

        this.onToggleVisibility = this.onToggleVisibility.bind(this);
        this.state = {
            visible:false
        };
    }

    onToggleVisibility(){

        this.setState((prevState) => {
            return {
                visible : !prevState.visible
            }
        });
    }

    render(){

        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onToggleVisibility}>
                {this.state.visible? 'Hide details' : 'Show details'}
                </button>
                {this.state.visible && <p>this is some info</p>}
                </div>
        );
    }

}

ReactDOM.render(<Visibility />, document.getElementById("app"));

//const app = {
//   visible: false
//}

///const onToggleVisibility = (e)=>{

//   app.visible = !app.visible;

//   render();
//}


// const render = () => {

//     const jsx = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={onToggleVisibility}>
//         {app.visible? 'Hide details' : 'Show details'}
//         </button>
//         {app.visible && <p>this is some info</p>}
//     </div>
//     );

//     ReactDOM.render(jsx, document.getElementById("app"));

// }

// render();