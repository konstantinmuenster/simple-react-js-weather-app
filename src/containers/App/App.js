import React from 'react';
import classes from './App.module.css';
import assetMapping from '../../assets/assetMapping.json';
import Card from '../../elements/Card/Card';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import Preview from '../../components/Preview/Preview';
import ErrorNotice from '../../components/ErrorNotice/ErrorNotice';
import { MoonLoader } from 'react-spinners';
import { API_URL, API_KEY } from '../../utils/constants';

const App = () => {
  const [error, setError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchBarInput, setSearchBarInput] = React.useState('');
  const [weatherDetails, setWeatherDetails] = React.useState({
    temperature: null,
    description: ''
  });

  const tryAgainHandler = () => {
    setSearchBarInput('');
    setWeatherDetails({});
    setError(false);
  };

  const setWeather = () => {
    const city = searchBarInput;
    const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;

    setIsLoading(true);
    setError(false);
    setWeatherDetails({});

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        // If city exists, update weather details
        if (data.cod === 200) {
          setWeatherDetails({
            temperature: data.main.temp,
            description: data.weather[0].main
          });
        } else {
          // If city doesn't exist, throw error
          throw data.cod;
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={classes.AppWrapper}>
      <Header
        color={
          assetMapping.colors[
            // Set header color based on weather condition; if error, set color to red
            error ? 'error' : weatherDetails.description
          ]
        }
        onClickHandler={tryAgainHandler}
      />
      <main className={classes.AppMain}>
        <SearchBar
          value={searchBarInput}
          onChangeHandler={(e) => setSearchBarInput(e.target.value)}
          onClickHandler={setWeather}
          error={error}
        />
        <Card>
          {isLoading ? (
            <MoonLoader />
          ) : error ? (
            <ErrorNotice onClickHandler={tryAgainHandler} />
          ) : weatherDetails.temperature && weatherDetails.description !== '' ? (
            <WeatherDetails data={weatherDetails} />
          ) : (
            <Preview />
          )}
        </Card>
      </main>
      <Footer onClickHandler={tryAgainHandler} />
    </div>
  );
};

export default App;
