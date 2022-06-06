// window.addEventListener('online', (event) => {
//   console.log("You are now connected to the network.");
// });
//useEventListener('online', (event) => {}, window)

import { useEffect } from "react";

const useEventListener = (eventType, callback, element = window) => {

  // const callbackRef = useRef(callback);

  // useEffect(() => {
  //   callbackRef.current = callback;
  // }, [callback]);

  useEffect(() => {
    if (!element) return;

    // const handler = (event) => callbackRef.current(event);

    element.addEventListener(eventType, callback);

    return () => element.removeEventListener(eventType, callback);

  }, [eventType, element, callback]);
}

export default useEventListener