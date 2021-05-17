import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', shortenUrl: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    let uri = encodeURI(this.state.value);
    const ACCESS_TOKEN = 'df3da57af354180d30d6fecd5abab350bee48c52'
    let url = `https://api-ssl.bitly.com/v4/shorten`;
    let data = {
      "group_guid": "Bl5h7aJzSZV",  
      "domain": "bit.ly",  
      "long_url": uri  
    }
    fetch(url,{
      method: 'POST',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((data) =>{
      alert("Shorted URL is: " +data.link);
      this.setState({shortenUrl: data.link});
    })
    event.preventDefault();
  }

  render() {
    return (
      <div className="container flex h-screen justify-center items-center">
        <form onSubmit={this.handleSubmit}>
          <label>git@github.com:sumitsharmacr/link-shortner-app.git
            Enter URL:
            <input type="text" value={this.state.value} onChange={this.handleChange} className="min-w-1/4 ml-2 mr-2 mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="https://john@example.com"/>
          </label>
          <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-wait" value="Submit" />
        </form>
        <div>
          <a href={this.state.shortenUrl}>Output Copy Here: {this.state.shortenUrl}</a>
          
        </div>
      </div>
    );
  }
}


export default App;
