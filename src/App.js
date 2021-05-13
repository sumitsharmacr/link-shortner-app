import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container flex h-screen justify-center items-center">
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter URL:
            <input type="text" value={this.state.value} onChange={this.handleChange} className="min-w-1/4 ml-2 mr-2 mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="https://john@example.com"/>
          </label>
          <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-wait" value="Submit" />
        </form>
        <div>
          Output Copy Here: 
        </div>
      </div>
    );
  }
}


export default App;
