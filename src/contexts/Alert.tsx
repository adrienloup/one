import { createContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { AlertType } from '../models/Alert';
import { SlotType } from '../models/Slot';
import { Alerts } from '../components/Alerts/Alerts';
import { Alert } from '../components/Alert/Alert';

export const AlertContext = createContext<AlertType[]>([]);

export const AlertDispatchContext = createContext<{
  addAlert: (alert: AlertType) => void;
  removeAlert: (id: string) => void;
}>({
  addAlert: (alert: AlertType) => alert,
  removeAlert: (id: string) => id,
});

export const AlertProvider = ({ children }: SlotType) => {
  const [alerts, setAlerts] = useState<AlertType[]>([]);

  const addAlert = (alert: AlertType) => {
    const id =
      Math.random().toString(36).slice(2, 9) +
      new Date().getTime().toString(36);
    setAlerts((prev) => [{ ...alert, id: id }, ...prev]);
    return id;
  };

  const removeAlert = (id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={alerts}>
      <AlertDispatchContext.Provider value={{ addAlert, removeAlert }}>
        {alerts.length > 0 &&
          createPortal(
            <Alerts>
              {alerts.map((alert: AlertType) => (
                <Alert
                  key={alert.id}
                  onRemove={() => {
                    removeAlert(alert.id as string);
                  }}
                  {...alert}
                />
              ))}
            </Alerts>,
            document.body
          )}
        {children}
      </AlertDispatchContext.Provider>
    </AlertContext.Provider>
  );
};
