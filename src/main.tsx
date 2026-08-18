import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register service worker for PWA
const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('PWA: Need refresh');
  },
  onOfflineReady() {
    console.log('PWA: Offline ready');
  },
  onRegisterError(error) {
    console.error('PWA: Registration error', error);
  },
  onRegistered(r) {
    console.log('PWA: Registered SW', r);
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
