import { useState, useEffect } from "react";
import axios from "axios";

const Rooms = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [rooms, setRooms] = useState();

    useEffect(() => {
        axios("http://localhost:4000/rooms")
            .then(response => setRooms(response.data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setLoading(false))
    }, []);

    return ( 
    <section className="rooms">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!error && rooms && (
            <>
                <h2>{rooms.headline}</h2>
                <p>{rooms.text}</p>
                <div>
                    {rooms.roomtypes.map(room => (
                       <article>
                            <img src={room.image} alt="" />
                            <p>{room.type}</p>
                            <p>{room.guests}</p>
                            <p>{room.size}</p>
                            <p>{room.description}</p>
                            <p>{room.price}</p>
                            <a href="#">Booking</a>
                       </article> 
                    ))}
                </div>
            </>
        )}

    </section> 
    );
}
 
export default Rooms;