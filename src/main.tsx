import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AllProviders } from './utils/combineProviders';
import { version } from '../package.json';
import App from './App.tsx';
import './index.scss';

console.log(
  `%cOne ${version}`,
  'padding: 2px 4px; background: #ff0057; color: #fff;'
);

createRoot(document.getElementById('_one_1em0m_3')!).render(
  <StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </StrictMode>
);
