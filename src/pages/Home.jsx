import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';
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
