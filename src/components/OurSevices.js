import { useState, useEffect } from "react";
import axios from "axios";

const Services = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [services, setServices] = useState();

    useEffect(() => {
        axios("http://localhost:4000/services")
            .then(response => setServices(response.data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setLoading(false))
    }, []);

    return ( 
        <section className="services">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!error && services && (
                <>
                    <h2>{services.headline}</h2>
                    <p>{services.text}</p>
                    <div>
                        {services.facilities.map(facility => (
                            <article>
                                <img src={facility.image} alt="" />
                                <p>{facility.name}</p>
                                <p>{facility.text1}</p>
                                <p>{facility.text2}</p>
                            </article>
                        ))}
                    </div>

                </>
            )}

        </section>
     );
}
 
export default Services;