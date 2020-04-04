const appRoot = document.getElementById('app');

let details = "These are some important details";
let toggleOn = false;
let buttonTextOff = 'Show details';
let buttonTextOn = 'Hide details';
const onClickHandler = () => {
    toggleOn = !toggleOn;
    render();
};
const render = () => {
    const toggleTemplate = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onClickHandler}>
                {toggleOn ? buttonTextOn : buttonTextOff}
            </button>
            {toggleOn && <p>{details}</p>}
        </div>
    );

    ReactDOM.render(toggleTemplate, appRoot);
};

render();