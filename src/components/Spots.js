import { useState, useEffect } from "react";
import axios from "axios";
import { IoDiamondSharp } from "react-icons/io5"

const Spots = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [spots, setSpots] = useState();

    useEffect(() => {
        axios("http://localhost:4000/spots")
            .then(response => setSpots(response.data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setLoading(false))
    }, []);

    return ( 
        <section className="spots">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!error && spots && (
               <div>
                    {spots.map(spot => (
                        <article>
                            <IoDiamondSharp/>
                            <h3>{spot.name}</h3>
                            <p>{spot.text}</p> 
                        </article>
                    ))}
               </div>
            )}

        </section>
     );
}
 
export default Spots;