import React, { Component } from 'react';

import { MoonLoader } from 'react-spinners';

import classes from './App.module.css';
import Card from '../../elements/Card/Card';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import Preview from '../../components/Preview/Preview';
import ErrorNotice from '../../components/ErrorNotice/ErrorNotice';

class App extends Component {
  render() {
    return (
      <div className={classes.AppWrapper}>
        <Header />
        <main className={classes.AppMain}>
          <SearchBar />
          <Card>
            <WeatherDetails />
            {/* <MoonLoader /> */}
            {/* <Preview /> */}
            {/* <ErrorNotice /> */}
          </Card>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
