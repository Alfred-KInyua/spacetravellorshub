import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GetRocketsFromApi } from '../../../redux/Rockets';
import ShowRockets from './DisplayMissions';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetRocketsFromApi());
  }, [dispatch]);

  return (
    <div>
      <hr />
      <table>
        <tr>
          <th>Rockets</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {rockets.map((itemArr) => itemArr.map((rockets) => (
          <ShowRockets
            name={rockets.rockets_name}
            description={rockets.description}
            key={rockets.rockets_id}
          />
        )))}
      </table>
    </div>
  );
};
export default Rocket;
