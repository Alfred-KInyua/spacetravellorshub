import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mission from './components/view/missions/Mission';
import Rocket from './components/view/rocket/Rocket';
import Nav from './components/view/nav/Nav';
import Profile from './components/view/profile/Profile';

const App = () => (
  <div className="container">
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="missions" element={<Mission />} />
        <Route path="myprofile" element={<Profile />} />
      </Routes>
    </Router>
  </div>
);

export default App;
