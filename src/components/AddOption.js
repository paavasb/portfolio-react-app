import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            error: undefined,
        }
    }
    handleFormSubmit(event) {
        event.preventDefault();
        console.log('testing');
        const formInput = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(formInput);
        
        this.setState(() => ({error}));

        if(!error) {
            event.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="option"></input>
                    <button>Add Options</button>
                </form>  
            </div>
        );
    }
}