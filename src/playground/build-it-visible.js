const appRoot = document.getElementById('app');

let details = "These are some important details";
let buttonTextOff = 'Show details';
let buttonTextOn = 'Hide details';
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !(prevState.visibility)
            }
        });
    }

    render() {
        return (
            <div>
                <h1>VisibilityToggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? buttonTextOn : buttonTextOff}
                </button>
                {this.state.visibility && <p>{details}</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, appRoot);
// const onClickHandler = () => {
//     toggleOn = !toggleOn;
//     render();
// };
// const render = () => {
//     const toggleTemplate = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onClickHandler}>
//                 {toggleOn ? buttonTextOn : buttonTextOff}
//             </button>
//             {toggleOn && <p>{details}</p>}
//         </div>
//     );

//     ReactDOM.render(toggleTemplate, appRoot);
// };

// render();