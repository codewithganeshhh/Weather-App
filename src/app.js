import React, { Component } from "react";
import Form from "./components/form/form.js";
import Weather from "./components/weather/weather.js";
import Error from "./components/error/error";
import MapWithAMarker from "./components/map/map";
import "./app.scss";

const myKey = "15a78bdf7be0fd8857aa0222e8baa4b1";
// const googleMap = `https://maps.googleapis.com/maps/api/js?key=${myKey}&v=3.exp&libraries=geometry,drawing,places`
const googleMap = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
      icon: '',
      main: '',
      celsius: null,
      temp_max: null,
      temp_min: null,
      description: '',
      error: false
    };
  }

  getWeather = async e => {
    e.preventDefault();

    const country = e.target.country.value;
    const city = e.target.city.value;

    if (!(country && city) || city === '' || country === '') {
      await this.setState({ error: true });
      if(this.state.error){
        setTimeout(() => {
          this.setState({ error: false });          
        }, 3500)
      }
      return;
    }

    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${myKey}`)
                 .then(response =>  response.json());

    this.setState({
      id: data.weather[0].id,
      city: `${data.name}, ${data.sys.country}`,
      country: data.sys.country,
      lat: data.coord.lat,
      lon: data.coord.lon,
      main: data.weather[0].main,
      celsius: Math.floor(data.main.temp - 273.15),
      temp_max: Math.floor(data.main.temp_max - 273.15),
      temp_min: Math.floor(data.main.temp_min - 273.15),
      description: data.weather[0].description,
      error: false
    });

  };

  render() {
    return (
      <div className="container text-center appBody pt-5">
        <div className="row">
          <div className="col-md-12 errorHeight">
            { this.state.error && <Error /> }
          </div>
          <div className="col-md-12">
            <Form loadweather={this.getWeather} />
          </div>
          <div className="col-md-12">
            <Weather
              id={this.state.id}
              cityname={this.state.city}
              temp_celsius={this.state.celsius}
              temp_max={this.state.temp_max}
              temp_min={this.state.temp_min}
              description={this.state.description}
            />
          </div>
          {/* <div className="col-md-6 container mt-5">
            { this.state.lat && (
                  <MapWithAMarker
                    googleMapURL={googleMap}
                    loadingElement={<div style={{ height: `100%`, borderRadius: `10px` }} />}
                    containerElement={<div style={{ height: `440px`, border: `1px double black`, borderRadius: `10px` }} />}
                    mapElement={<div style={{ height: `100%`, borderRadius: `10px` }} />}
                    lat={this.state.lat}
                    lon={this.state.lon}
                  />
              )
            }
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;