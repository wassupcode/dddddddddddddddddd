const TopBar = () => {
    return (
      <div className="top-bar">
        <div className="chat-title">Новый чат</div>
        <div className="chat-actions">
          <button className="action-btn">История</button>
          <button className="action-btn">Экспорт</button>
        </div>
      </div>
    );
  };
  
  export default TopBar;