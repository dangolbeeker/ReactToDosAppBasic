import React, { Component} from 'react';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (events) => {
        this.setState({ term: event.target.value });
    }

    <input value={this.state.term} onChange={this.onChange} />
    
    render() {
        return (
            <div></div>
        );
    }
}