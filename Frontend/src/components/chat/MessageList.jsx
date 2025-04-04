import './MessageList.css';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div key={message.id} className={`message ${message.sender}`}>
          <div className="message-content">{message.text}</div>
          <div className="message-meta">{message.timestamp}</div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;