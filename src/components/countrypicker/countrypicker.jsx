import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './countrypicker.module.css';
import {apiCountries} from '../../api';
const CountryPicker = ({handleCountryChange}) =>{
    const [countries, setCountries] = useState([]);

    useEffect(()=> {
        const fetchCountries = async () =>{
            setCountries(await apiCountries());
        }
        fetchCountries()
    }, []);
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
               <option value="">Global</option>
               {countries.map((country,i) => <option key={i} value={country.name}>{country.name}</option>)} 



            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
