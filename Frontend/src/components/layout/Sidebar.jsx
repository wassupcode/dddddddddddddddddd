import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <aside className="sidebar">
      <div className="logo">AI Assistant</div>
      
      <nav className="main-nav">
        <NavLink to="/">Чат</NavLink>
        <NavLink to="/tools/text">Текст</NavLink>
        <NavLink to="/tools/image">Изображения</NavLink>
        <NavLink to="/tools/video">Видео</NavLink>
        <NavLink to="/tools/code">Код</NavLink>
      </nav>

      <div className="user-section">
        {user && (
          <>
            <NavLink to="/settings">Настройки</NavLink>
            {user.isAdmin && <NavLink to="/admin">Админ</NavLink>}
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;