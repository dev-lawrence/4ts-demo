import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RootLayout = () => {
  const location = useLocation();
  const isRoomDetailsPage = location.pathname.includes('/room/');

  return (
    <>
      <Header isRoomDetailsPage={isRoomDetailsPage} />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
