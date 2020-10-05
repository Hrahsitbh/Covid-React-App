import React, { useEffect, useState, useCallback } from 'react';
import { fetchCountries } from '../../api/index';
import { NativeSelect, FormControl } from '@material-ui/core';
import './CountryPicker.css';

function CountryPicker(props) {
    const { handleCountires } = props;
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        (async function getCountires() {
            setCountries(await fetchCountries());
        })();
    }, []);
    const selectedCountry = useCallback((event) => { handleCountires(event.target.value) }, [handleCountires])
    return (
        <FormControl className="pick-country">
            <NativeSelect defaultValue="" onChange={selectedCountry}>
                <option value="">Global</option>
                {countries?.length &&
                    countries.map((country, index) => {
                        return (<option value={country} key={index}>{country}</option>);
                    })
                }
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;