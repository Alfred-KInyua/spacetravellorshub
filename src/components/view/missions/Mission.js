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
      {missions[0].map((mission) => <h1 key={mission.id}>{mission.mission_name}</h1>)}
    </>
  );
};

export default Mission;
