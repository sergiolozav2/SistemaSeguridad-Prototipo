/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

export function useSocket(url: string) {
  const [socket, setSocket] = useState(() => {
    return new WebSocket(url);
  });

  const [lastData, setLastData] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const restartAttemptsRef = useRef(0);
  const [paused, setPause] = useState(false);
  const pauseUpdateRef = useRef(paused);

  function togglePause() {
    pauseUpdateRef.current = !pauseUpdateRef.current;
    setPause(pauseUpdateRef.current);
  }

  useEffect(() => {
    function open() {
      setOpen(true);
      restartAttemptsRef.current = 0;
    }

    function message(event: MessageEvent<string>) {
      if (!pauseUpdateRef.current) {
        setLastData(event.data);
      }
    }

    function close() {
      setOpen(false);
    }
    socket.addEventListener("open", open);
    socket.addEventListener("message", message);
    socket.addEventListener("close", close);
    return () => {
      console.log("Limpieza necesaria")
      if (socket) {
        socket.close();
        socket.removeEventListener("close", close);
        socket.removeEventListener("open", open);
        socket.removeEventListener("message", message);
      }
    };
  }, [socket, url]);

  return { lastData, open, togglePause, paused };
}
