/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../../redux/Missions';

const Mission = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <>
      <table>
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
            <tr>
              <td key={mission.mission_id}>{mission.mission_name}</td>
              <td key={mission.mission_id}>{mission.description}</td>
              <td><button type="button">Not A member</button></td>
              <td><button type="button">Join Mission</button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Mission;
