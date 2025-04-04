import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './layout.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content-area">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;