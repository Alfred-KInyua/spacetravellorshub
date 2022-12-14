import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from 'react-redux';
import { toggleReservedStatus } from '../../../redux/rockets';

const Rocket = (props) => {
  const {
    id, name, description, image, reserved,
  } = props;
  const dispatch = useDispatch();
  const toggleReserved = () => {
    dispatch(toggleReservedStatus(id));
  };

  return (
    <div className="d-flex flex-row bd-highlight mb-3 justify-content-center">
      <div style={{ width: '400px' }}>
        <img
          style={{ width: '300px' }}
          className="p-3"
          alt="Responsive"
          src={image}
        />
      </div>
      <div className="mt-3">
        <div>
          <h2>{name}</h2>
        </div>
        <div>
          {reserved && <span className="badge bg-primary"> Reserved</span>}
          {' '}
          {description}
        </div>
        <div>
          {reserved ? (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={toggleReserved}
            >
              Cancel Reservation
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={toggleReserved}
            >
              Reserve Rocket
            </button>
          )}
        </div>
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
