import React from 'react';
import { useSelector } from 'react-redux';
import { selectMissions } from '../../../redux/Missions';
import profileStyles from './Profile.module.css';

const Profile = () => {
  const missions = useSelector(selectMissions);
  const rockets = useSelector((state) => state.rockets);
  const joinedRockets = rockets.filter((rockets) => rockets.reserved === true);
  const joinedMissions = missions.filter(
    (mission) => mission.reserved === true,
  );

  return (
    <div className={profileStyles.joinedSpaceHub}>
      <div className={profileStyles.joinedMissions}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>My Missions</th>
            </tr>
          </thead>
          <tbody>
            {joinedMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={profileStyles.joinedRockets}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>My Rockets</th>
            </tr>
          </thead>
          <tbody>
            {joinedRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
