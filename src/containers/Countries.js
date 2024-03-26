import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import VisitedCountries from "../components/VisitedCountries";
import "./Countries.css"

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
    }

    const handleVisit = (e) => {
        if(e.target.checked){
            let visited = [...visitedCountries, countries[e.target.value]];
            let array = [...countries];
            array.splice(e.target.value, 1)
            setCountries(array)
            setVisitedCountries(visited)
            console.log(countries[0])
        }
    }

    const handleRemoveVisit = (e) => {
        if(e.target.checked){
            let notVisited = [...countries, visitedCountries[e.target.value]];
            let array = [...visitedCountries];
            array.splice(e.target.value, 1)
            setCountries(notVisited)
            setVisitedCountries(array)
        }
    }


    return ( 
        <div id="countries">
            <section>
                <CountriesList countries = {countries} handleVisit={handleVisit}/>
            </section>
            <section>
                <VisitedCountries visitedCountries = {visitedCountries} handleRemoveVisit={handleRemoveVisit}/>
            </section>
        </div> 
    );
}
 
export default Countries;