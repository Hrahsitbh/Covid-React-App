import React, { Component } from 'react';
import { fetchData } from './api';
import { Cards, Chart, CountryPicker } from './components';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            country: ''
        };
        this.handleCountires = this.handleCountires.bind(this);
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        (() => { this.setState({ data: fetchedData }); })();
    }

    async handleCountires(chosenCountry) {
        const fetchedData = await fetchData(chosenCountry);
        this.setState({ data: fetchedData, country: chosenCountry });
        console.log(fetchedData);
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className="container">
                <img className="covid-img" src="https://i.ibb.co/7QpKsCX/image.png" alt="coron-icon" />
                <Cards data={data} />
                <CountryPicker handleCountires={this.handleCountires} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;