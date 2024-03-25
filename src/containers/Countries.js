import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import VisitedCountries from "../components/VisitedCountries";

const Countries = () => {

    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] = useState(null);

    useEffect(() => {
        loadData();
    }, [])
    
    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
    }




    return ( 
        <>
        {JSON.stringify(countries)}
        <CountriesList countries = {countries} />
        <VisitedCountries visitedCountries = {visitedCountries} />
        </> 
    );
}
 
export default Countries;