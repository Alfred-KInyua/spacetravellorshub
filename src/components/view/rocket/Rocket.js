import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GetRocketsFromApi } from '../../../redux/Rockets';

const Rocket = () => {
  useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetRocketsFromApi());
  }, [dispatch]);

  return <div />;
};

export default Rocket;
