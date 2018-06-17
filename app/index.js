import React, { Component } from 'react';
import ReactDom from 'react-dom';

const API_KEY = '57c9f1900f0f27b5a37922590165602b';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      city: 'San Francisco',
      country_code: 'cl',
      description: null
    }
  }

  componentDidMount() {
    this.grabWeather(this.state.city);
  }

  grabWeather(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${city}`).then(response =>{
      console.log(response.headers.get('Server'));
      return response.json();
    }).then(json => {
      this.setState({
        description: json.weather[0].description
      });
    });
  }

  render() {
    return (
      <div>This an example of how to work with js and jsx!
        <h1>Weather report for {this.state.city}!</h1>
        <h2>{this.state.description}</h2>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
