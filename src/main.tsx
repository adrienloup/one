import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AllProviders } from './utils/combineProviders';
import { version } from '../package.json';
import App from './App.tsx';
import './index.scss';

console.log(
  `%c[One]%c${version}%c@jff`,
  'padding: 4px 3px 3px; background: #242424; font-weight: bold; color: #ff0057;',
  'padding: 4px 3px 3px; background: #ff0057; font-weight: bold; color: #242424;',
  'padding: 4px 3px 3px; background: #242424; font-weight: bold; color: #ff0057;'
);

createRoot(document.getElementById('_one_1em0m_3')!).render(
  <StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </StrictMode>
);
