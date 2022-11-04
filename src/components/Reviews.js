import { useState, useEffect } from "react";
import axios from "axios";

const Reviews = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [reviews, setReviews] = useState();

    useEffect(() => {
        axios("http://localhost:4000/reviews")
            .then(response => setReviews(response.data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setLoading(false))
    }, []);

    return ( 
        <section className="reviews">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!error && reviews && (
                <>
                <h2>{reviews.headline}</h2>
                <p>{reviews.text}</p>
                <div>
                    {reviews.testimonials.map(testimonial => (
                        <article>
                            <div>
                                <p>{testimonial.text}</p>
                                <p>{testimonial.stars}</p>
                                </div>
                                <img src={testimonial.imageUrl} alt="" />
                                <p>{testimonial.name}</p>
                                <p>{testimonial.handle}</p>
                        </article>
                    ))}
                </div>
                </>
            )}
        </section>
     );
}
 
export default Reviews;