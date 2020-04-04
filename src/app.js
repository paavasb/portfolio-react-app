class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['One', 'Two', 'Four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options optionList={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionList.map((option)=> <p key={option}>{option}</p>)}
                <Option />
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text"></input>
                    <button>Add Options</button>
                </form>  
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));