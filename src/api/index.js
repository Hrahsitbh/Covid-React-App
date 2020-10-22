import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export async function fetchData(country) {
    let modifiedUrl = url;
    if (country) {
        modifiedUrl = `${url}/countries/${country}`;
    }
    try {
        const { data: { confirmed, recovered, deaths, countryDetail, lastUpdate } = {} } = await axios.get(modifiedUrl);
        return { confirmed, recovered, deaths, countryDetail, lastUpdate };
    } catch (error) {
        alert(error.response?.data?.error?.message);
    }
}

export async function fetchDailyData() {
    try {
        const { data } = await axios.get(`${url}/daily`);
        // let data = [
        //     {
        //         confirmed: { total: 4000 },
        //         deaths: { total: 40 },
        //         reportDate: "2020-01-22"
        //     },
        //     {
        //         confirmed: { total: 5000 },
        //         deaths: { total: 100 },
        //         reportDate: "2020-01-24"
        //     },
        //     {
        //         confirmed: { total: 6000 },
        //         deaths: { total: 200 },
        //         reportDate: "2020-01-26"
        //     },
        //     {
        //         confirmed: { total: 3000 },
        //         deaths: { total: 700 },
        //         reportDate: "2020-01-29"
        //     },
        //     {
        //         confirmed: { total: 4000 },
        //         deaths: { total: 1000 },
        //         reportDate: "2020-02-01"
        //     },
        //     {
        //         confirmed: { total: 5000 },
        //         deaths: { total: 2000 },
        //         reportDate: "2020-02-05"
        //     },
        //     {
        //         confirmed: { total: 6000 },
        //         deaths: { total: 2200 },
        //         reportDate: "2020-02-07"
        //     },
        //     {
        //         confirmed: { total: 10000 },
        //         deaths: { total: 3200 },
        //         reportDate: "2020-02-08"
        //     },
        //     {
        //         confirmed: { total: 20000 },
        //         deaths: { total: 4400 },
        //         reportDate: "2020-02-09"
        //     },
        //     {
        //         confirmed: { total: 40000 },
        //         deaths: { total: 5000 },
        //         reportDate: "2020-02-12"
        //     },
        //     {
        //         confirmed: { total: 50000 },
        //         deaths: { total: 7000 },
        //         reportDate: "2020-02-15"
        //     },
        //     {
        //         confirmed: { total: 60000 },
        //         deaths: { total: 13000 },
        //         reportDate: "2020-02-20"
        //     }
        // ];
        const modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
    } catch (error) {
        alert(error.response?.data?.error?.message);
    }
}

export async function fetchCountries() {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        const modifiedData = countries.map(country => country.name);
        return modifiedData;
    } catch (error) {
        alert(error.response?.data?.error?.message);
    }
}