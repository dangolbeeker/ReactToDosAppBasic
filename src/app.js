import React, { Component} from 'react';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

   // <input value={this.state.term} onChange={this.onChange} />

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });
      }
    
       <form className="App" onSubmit={this.onSubmit}>
           <input value={this.state.term} onChange={this.onChange} />
           <button>Submit</button>
       </form>
    
    render() {
        return (
            <div></div>
        );
    }
}