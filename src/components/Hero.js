import { useState, useEffect } from "react";
import axios from "axios";
import "./Hero.css"
import logo from "../thetuliplogo.svg"

const Hero = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [hero, setHero] = useState();


    useEffect(() => {
        axios("http://localhost:4000/hero")
            .then(response => setHero(response.data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setLoading(false))
    }, []);

    return ( 
        <header className="hero">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!error && hero && (
                <>
                    <img src={hero.image} className="heroImg" alt="" />
                    <img src={logo} alt="" />
                    <h1 className="heroHeadline">{hero.headline}</h1>
                    
                </>
            )}
        </header>
     );
}
 
export default Hero;