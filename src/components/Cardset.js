import React, { useState, useEffect, Children } from "react";
import './../css/cardSet.css';

function CardTile(props){
    return (
        <div className="tile">
            {props.children}
        </div>
    )
}


// // Fetch set of cards dealt to the player
// // Return loaded CardSet component
// function fetchPlayerCardSet(){
    
// }


function CardSet(props){
    // cardSet = fetchPlayerCardSet()
    const [cardSet, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    
    // Fetch cardSet using a GET api
    useEffect(()=>{
        setLoading(true);
        fetch('https://api.github.com/users/gearon')
        .then((response)=> response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
    },[]);
    
    console.log(cardSet);
    if(loading){
        return (<h2>Wait bitches the data is still loading!</h2>);
    }

    if(error){
        return (<pre>error fetching the data</pre>)
    }
    if (cardSet){
        const sampleData= {0: 20, 1: 1, 2: 11, 3: 5, 4: 15, 5: 23, 6: 7, 7: 14, 8: 15, 9: 23, 10: 15, 11: 14, 12: 22, 13: 24, 14: 4, 15: 1, 16: 24, 17: 3, 18: 9, 19: 11, 20: 22, 21: 7, 22: 14, 23: 22, 24: 23}
        return (
            <div>
                <h1>CardSet</h1>
                <div className="cardWrapper">
                    {Object.keys(sampleData).map(id=>(
                        <CardTile key={id} id = {id} isMarked = {false} >
                            {sampleData[id]}
                        </CardTile>
                    ))}
                </div>
            </div>
        )
    }
    
}

export default CardSet;