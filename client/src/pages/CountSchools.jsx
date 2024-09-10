import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import CountUp from 'react-countup';

const CountSchools = () => {
  const [counts, setCounts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5); 

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const locations = ['Ibadan', 'Lagos', 'Abuja', 'Delta', 'Imo', 'Ogun', 'Ondo', 'Osun', 'Anambra', 'Kano', 'Katsina', 'Sokoto'];
        const response = await axios.get('http://localhost:4000/countSchools', {
          params: { locations }
        });

        setCounts(response.data);
      } catch (error) {
        console.error('Error fetching school counts:', error);
        toast.error('An error occurred while fetching the school counts.');
      }
    };

    fetchCounts();
  }, []);

  const handleSeeMore = () => {
    setVisibleCount(prevCount => prevCount + 5); // Show 5 more cards on each click
  };

  const handleShowLess = () => {
    setVisibleCount(5); // Reduce the number of visible cards back to 5
  };

  return (
    <div className="container">
      <h2 className="heading">Number of Schools in Different Locations</h2>
      <div className="card-container">
        {counts.length > 0 ? (
          counts.slice(0, visibleCount).map(({ location, count }) => (
            <div className="card" key={location}>
              <h3>{`Schools in ${location}`}</h3>
              <CountUp start={0} end={parseInt(count)} duration={3.75} separator="," />
              <p>{`Number of schools: ${count}`}</p>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>

      <div className="button-container">
        {visibleCount < counts.length && (
          <button className="btn see-more" onClick={handleSeeMore}>
            See More
          </button>
        )}

        {visibleCount >= counts.length && counts.length > 5 && (
          <button className="btn show-less" onClick={handleShowLess}>
            Show Less
          </button>
        )}
      </div>

      {/* Mobile responsiveness */}
      <style jsx>{`
        .container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
        }

        .heading {
          text-align: center;
          margin-bottom: 20px;
          font-weight: bolder;
        }

        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
        }

        .card {
          background-color: white;
          color: black;
          padding: 25px;
          border-radius: 10px;
          border: 1px solid green;
          text-align: center;
          font-size: 1.5rem;
          flex: 1 1 calc(20% - 30px); /* 5 cards per row */
          max-width: calc(20% - 30px);
          box-sizing: border-box;
          transition: all 0.3s ease;
        }

        .card h3 {
          margin: 0;
          font-size: 1.75rem;
          color: #1aac84;
        }

        .card p {
          font-size: 1.3rem;
          color: green;
        }

        .button-container {
          text-align: center;
          margin-top: 20px;
        }

        .btn {
          background-color: green;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
        }

        .show-less {
          background-color: red;
        }

        /* Media queries for mobile responsiveness */
        @media (max-width: 768px) {
          .card {
            flex: 1 1 calc(50% - 20px); /* 2 cards per row on small screens */
            max-width: calc(50% - 20px);
          }
        }
      `}</style>
    </div>
  );
};

export default CountSchools;
