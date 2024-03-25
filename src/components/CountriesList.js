const CountriesList = ({countries, handleVisit}) => {

    const countryElems = countries.map((country, index) => {
        return (
            <div key={index}>
                <li>{country.name.common}</li>
                <label name="isVisited" />
                <input type={"checkbox"} name="isVisited" value={index} onChange={handleVisit} />
            </div>
        )
    })



    return ( 
        <>
            <h2>Not Visited Countries: </h2>
            <ul>
                {countryElems}
            </ul>
        </>
        
    );
}
 
export default CountriesList;