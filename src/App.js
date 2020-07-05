import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import image from './image.png';
class App extends Component {
  state = { data: {}, country: "" };
  async componentDidMount() {
    const data = await fetchData();
    // console.log(data);
    this.setState({ data: data });
  }
  handleCountryChange = async (country) => {
    console.log(country);
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />

        <Cards data={this.state.data} />

        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
