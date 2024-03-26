const VisitedCountries = ({visitedCountries, handleRemoveVisit}) => {
    const countryElems = visitedCountries.map((country, index) => {
        return (
            <div key={country.cca3}>
                <li>{country.name.common}</li>
                <label name="isNotVisited" />
                <input type={"checkbox"} name="isNotVisited" value={index} onChange={handleRemoveVisit} />
            </div>
        )
    })
    return ( 
        <>
            <h2>Visited Countries: </h2>
            <ul>
                {countryElems}
            </ul>
        </>
    );
}
 
export default VisitedCountries;