import { useDebugValue, useState } from "react";
import useEventListener from "./useEventListener";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useDebugValue(isOnline ? 'Online useDebugValue' : 'Offline useDebugValue');

  useEventListener('online', () => {
    console.log('online', navigator.onLine);
    setIsOnline(navigator.onLine)
  });
  useEventListener('offline', () => {
    console.log('online', navigator.onLine);
    setIsOnline(navigator.onLine)
  });

  return isOnline;
}

export default useOnlineStatus