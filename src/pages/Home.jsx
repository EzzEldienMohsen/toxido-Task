import { Outlet } from 'react-router-dom';
import Header from './../components/Header';
import { Footer } from '../components';
const Home = () => {
  return (
    <div data-theme="dracula">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
