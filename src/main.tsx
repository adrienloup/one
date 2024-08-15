import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AllProviders } from './utils/combineProviders';
import App from './App.tsx';
import './index.scss';

createRoot(document.getElementById('_one_1em0m_3')!).render(
  <StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </StrictMode>
);
