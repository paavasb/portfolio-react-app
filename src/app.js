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
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.optionList);
        //alert('Removing All');
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll} disabled={this.props.optionList.length === 0}>Remove All</button>
                {this.props.optionList.map((option)=> <Option key={option} optionText={option} />)}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleFormSubmit(event) {
        event.preventDefault();
        const formInput = event.target.elements.option.value.trim();

        if(formInput) {
            alert('Option Added: ' + formInput);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="option"></input>
                    <button>Add Options</button>
                </form>  
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));