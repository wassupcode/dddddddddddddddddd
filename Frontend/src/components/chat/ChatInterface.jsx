import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import TopBar from './TopBar';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './ChatInterface.css';

const ChatInterface = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, {
      id: Date.now(),
      text: newMessage.text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    }]);
  };

  return (
    <div className="chat-interface">
      <TopBar user={user} />
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatInterface;