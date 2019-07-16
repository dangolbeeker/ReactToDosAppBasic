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

    
    render() {
        return (
            <div></div>
        );
    }
}