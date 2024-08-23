import { createContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { SlotType } from '../models/Slot';
import { TransitionComponent } from '../components/Transition/Transition';

export const TransitionPageContext = createContext<{
  goTo: (route: string) => void;
}>({ goTo: (route: string) => route });

export const TransitionPageProvider = ({ children }: SlotType) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState(false);
  const [cssClass, setCssClass] = useState('');

  const goTo = (route: string) => {
    if (location.pathname === route) return;
    setActive(true);
    setTimeout(() => {
      setCssClass('start');
    }, 0);
    setTimeout(() => {
      navigate(route);
      window.scrollTo(0, 0);
      setCssClass('end');
    }, 500);
    setTimeout(() => {
      setActive(false);
    }, 1e3);
  };

  return (
    <TransitionPageContext.Provider value={{ goTo }}>
      {active &&
        createPortal(
          <TransitionComponent cssClass={cssClass} />,
          document.body
        )}
      {children}
    </TransitionPageContext.Provider>
  );
};
