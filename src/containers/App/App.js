import React, { Component } from 'react';

import { MoonLoader } from 'react-spinners';

import classes from './App.module.css';
import assetMapping from '../../assets/assetMapping.json';
import Card from '../../elements/Card/Card';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import Preview from '../../components/Preview/Preview';
import ErrorNotice from '../../components/ErrorNotice/ErrorNotice';

class App extends Component {

  state = {
    searchBarInput: '',
    weatherDetails: {
      temperature: null,
      description: ''
    },
    loading: false,
    error: false
  }

  // Handle search bar input
  searchBarHandler = (e) => {
    this.setState({
      searchBarInput: e.target.value
    })
  }

  // Reset state after clicking on logo or Try Again button
  tryAgainHandler = () => {
    this.setState({
      searchBarInput: '',
      weatherDetails: {},
      error: false
    })
  }

  // Fetch weather information and save it to state
  setWeather = () => {
    const city = this.state.searchBarInput;
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    this.setState({weatherDetails: {}, loading: true, error: false}, () => {
      fetch(URL)
        .then(res => res.json())
        .then(data => {
          if(data.cod === 200) {
            this.setState({
              weatherDetails: {
                temperature: data.main.temp,
                description: data.weather[0].main
              },
              loading: false
            });
          } else {
            throw data.cod
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({
            loading: false,
            error: true
          });
        });
    });
  }

  render() {

    // Conditionally render content of card
    let cardContent = <Preview />;
    if (this.state.loading) {
      cardContent = <MoonLoader />;
    } else if (this.state.error) {
      cardContent = <ErrorNotice onClickHandler={this.tryAgainHandler} />;
    } else if (this.state.weatherDetails.temperature && this.state.weatherDetails.description !== '') {
      cardContent = <WeatherDetails data={this.state.weatherDetails} />;
    }

   return (
      <div className={classes.AppWrapper}>
        <Header 
          color={assetMapping.colors[
            // Set header color based on weather type; if error, set color to red
            (this.state.error) ? "error" : this.state.weatherDetails.description
          ]} 
          onClickHandler={this.tryAgainHandler} />
        <main className={classes.AppMain}>
          <SearchBar 
            value={this.state.searchBarInput} 
            onChangeHandler={this.searchBarHandler} 
            onClickHandler={this.setWeather} 
            error={this.state.error} />
          <Card>
            {cardContent}
          </Card>
        </main>
        <Footer onClickHandler={this.tryAgainHandler} />
      </div>
    );
  }
}

export default App;
