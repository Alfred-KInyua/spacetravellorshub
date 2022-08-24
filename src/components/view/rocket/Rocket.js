import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../../redux/rockets';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <div>
      <h1>Rocket Page</h1>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>{rocket.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rocket;
