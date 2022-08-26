import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../../redux/rockets';
import Rocket from './Rocket';

let initial = true;

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initial) {
      dispatch(getRockets());
      initial = false;
    }
  }, [dispatch]);

  const ulStyle = {
    marignLeft: 0,
    paddingLeft: 0,
  };

  return (
    <div>
      <ul style={ulStyle}>
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            name={rocket.name}
            description={rocket.description}
            image={rocket.image}
            reserved={rocket.reserved}
          />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
