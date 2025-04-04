import { useAuth } from '../../context/AuthContext';
import './SettingsPanel.css';

const SettingsPanel = () => {
  const { user, logout } = useAuth(); // Используем useAuth вместо AuthContext

  return (
    <div className="settings-panel">
      <h2>Настройки</h2>
      <div className="user-info">
        <p>Email: {user?.email}</p>
        <p>Роль: {user?.isAdmin ? 'Администратор' : 'Пользователь'}</p>
      </div>
      <button onClick={logout} className="logout-btn">
        Выйти
      </button>
    </div>
  );
};

export default SettingsPanel;