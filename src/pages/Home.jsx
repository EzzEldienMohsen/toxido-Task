import { Outlet } from 'react-router-dom';
import Header from './../components/Header';
const Home = () => {
  return (
    <div data-theme="dracula">
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
