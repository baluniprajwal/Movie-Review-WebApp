import React, { useState, useEffect, useRef } from 'react';
import Api from '../api/Api.jsx'; // Import your Axios instance or fetch API
import { useParams } from 'react-router-dom'; // Assuming you're using React Router
import { formatDistanceToNow } from 'date-fns';

const AddReview = ({ movie,setMovie }) => {
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);
  const revText = useRef();
  const params = useParams();
  const movieId = params.movieId;
  const userid = localStorage.getItem("userName");
  useEffect(() => {
    // Fetch previous reviews when component mounts
    const fetchReviews = async () => {
      try {
        const response = await Api.get(`/api/v1/movies/${movieId}`);
        setReviews(response.data.reviewIds);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]); // Fetch reviews whenever movieId changes

  const addReview = async (e) => {
    try { 
      const response = await Api.post("/api/v1/reviews", { reviewBody: reviewText, imdbId: movieId ,userId : userid});
      const newReview = { body: reviewText };
      setReviews([...reviews, newReview]);
      setReviewText('');
      // After adding a new review, fetch and update the review list
      const response2 = await Api.get(`/api/v1/movies/${movieId}`);
        setReviews(response.data.reviewIds);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
  <div className='bg-black flex h-screen overflow-hidden'>
    <div className="ml-20 flex flex-col gap-7">
      <h2 className='text-white text-xl font-oswald'>Reviews</h2>
      <img src={movie?.poster} alt="poster" className='object-contain' />
    </div>
    <div className="flex justify-center ml-auto mr-20 w-[100%] h-[100%]">
      <div className='text-white w-[50%]'>
        <h2 className='font-oswald text-lg'>Add Review</h2>
        <form onSubmit={addReview} className='flex flex-col gap-3'>
          <textarea ref={revText} value={reviewText} onChange={(e) => setReviewText(e.target.value)} className="bg-white text-black p-2 border border-gray-300 rounded-md mb-2" />
          <button className='bg-gold text-black px-4 py-2 rounded-md hover:bg-white duration-300 font-oswald' type="submit">Submit Review</button>
        </form>
        <h2 className="text-white font-oswald text-lg mt-7">Previous Reviews</h2>
        <div className="review-box h-[55%] overflow-y-auto mt-4 border border-white rounded-xl ">
          <ul className='flex flex-col'>
            {reviews.map((rev, index) => (
              <li key={index} className='bg-black p-4 border-b border-white shadow-md text-white'>
                <span className="">Posted by: {(rev.userId === userid)? "you" : rev.userId}</span>
                <p className='mt-2'>{rev.body}</p>
                <p className='text-sm text-gray-400 mt-1'>{formatDistanceToNow(new Date(rev.createdAt))} ago</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>

  );
};

export default AddReview;

