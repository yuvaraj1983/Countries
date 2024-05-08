import React, { useEffect, useState } from 'react';

const Tile = ({flagUrl, name, altFlag}) => {

    return ( <div style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        margin: '10px',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '8px',
        width: '200px'
        
    }}>
        <img src={flagUrl} alt={altFlag} style={{
            width: "100px", height: '100px'
        }} />

        <h2>{name}</h2>
    </div>
    )
}

const Countries = () => {
    const API_URL = 'https://restcountries.com/v3.1/all';
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) => setCountries(data))
        .catch((err) => console.log(err));
    },[])
    
    return (
        <div style={{
            display:"flex",
            justifyContent:'center',
            alignItems:'center',
            height:"100vh",
            flexWrap: 'wrap'
        }}>
           {
            countries.map((country) => (
                <Tile key={country.cca3} flagUrl={country.flags.png} name={country.name.common} altFlag={country.flags.alt} />
            ))
           }
        </div>
    )
}

export default Countries