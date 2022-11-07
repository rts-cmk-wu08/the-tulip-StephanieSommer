import { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [gallery, setGallery] = useState();

    useEffect(() => {
        axios("  http://localhost:4000/gallery")
            .then(response => setGallery(response.data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setLoading(false))
    }, []);

    return ( 
        <section className="gallery">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!error && gallery && (
                <>
                    <h2>{gallery.headline}</h2>
                    <p>{gallery.text}</p>
                    <div>
                        {gallery.images.map(image =>(
                            <img src={image.url} alt="" />
                        ))}
                    </div>
                </>
            )}
        </section>
     );
}
 
export default Gallery;