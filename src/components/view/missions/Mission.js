/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../../redux/Missions';
import 'bootstrap/dist/css/bootstrap.css';

const Mission = () => {
  const missions = useSelector((state) => state.missions);
  console.log(`store data ${missions.length}`);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions({ limit: 1 }));
  }, [dispatch]);

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              {mission.reserved ? (
                <td>
                  <span className="badge text-bg-primary p-3">Active Member</span>
                </td>
              ) : (
                <td>
                  <span className="badge text-bg-secondary p-3">Not A Member</span>
                </td>
              )}

              {mission.reserved ? (
                <td colSpan="2">
                  <button type="button" className="btn btn-outline-danger">Leave Mission</button>
                </td>
              ) : (
                <td colSpan="2">
                  <button type="button" className="btn btn-outline-secondary">Join Mission</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Mission;
