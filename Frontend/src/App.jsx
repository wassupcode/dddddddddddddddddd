import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './components/layout/MainLayout';
import ChatInterface from './components/chat/ChatInterface';
import SettingsPanel from './components/settings/SettingsPanel';
import AdminPanel from './components/admin/AdminPanel';
import TextGeneration from './components/tools/TextGeneration';
import ImageGeneration from './components/tools/ImageGeneration';
import VideoProcessing from './components/tools/VideoProcessing';
import CodeAssistant from './components/tools/CodeAssistant';
import AuthForm from './components/auth/AuthForm';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<AuthForm />} />
          
          <Route element={<PrivateRoute><MainLayout /></PrivateRoute>}>
            <Route path="/" element={<ChatInterface />} />
            <Route path="/settings" element={<SettingsPanel />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/tools/text" element={<TextGeneration />} />
            <Route path="/tools/image" element={<ImageGeneration />} />
            <Route path="/tools/video" element={<VideoProcessing />} />
            <Route path="/tools/code" element={<CodeAssistant />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;