import { useEffect, useState } from "react";

export default function useNow() {
  // eslint-disable-next-line
  const [_, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000 * 60);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const value = {
    time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    date: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
  };

  return value;
}
