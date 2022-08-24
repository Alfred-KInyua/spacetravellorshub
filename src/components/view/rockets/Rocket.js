import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from 'react-redux';
import { toggleReservedStatus } from '../../../redux/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const toggleReserved = () => {
    dispatch(toggleReservedStatus(props.id));
  };

  return (
    <div className="d-flex flex-row bd-highlight mb-3 justify-content-center">
      <div style={{ width: '400px' }}>
        <img
          style={{ width: '400px' }}
          className="p-3"
          alt="Responsive"
          src={props.image}
        />
      </div>
      <div className="mt-3">
        <div>
          <h2>{props.name}</h2>
        </div>
        <div>
          {props.reserved && <span> Reserved</span>} {props.description}
        </div>
        <button
          type="button"
          className="badge bg-primary p-3"
          onClick={toggleReserved}
        >
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
