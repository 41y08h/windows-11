import { useEffect, useState } from "react";

function zerofy(n) {
  if (n.toString().length > 1) return n;

  return `0${n.toString()}`;
}

export default function useNow() {
  // eslint-disable-next-line
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((old) => old + 1);
    }, 1000 * 60);

    return () => {
      clearInterval(interval);
    };
  }, [number]);

  useEffect(() => {
    const ms = (60 - new Date().getSeconds()) * 1000;
    const timeout = setTimeout(() => {
      setNumber((old) => old + 1);
    }, ms);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const value = {
    time: `${zerofy(new Date().getHours())}:${zerofy(new Date().getMinutes())}`,
    date: `${zerofy(new Date().getDate())}-${zerofy(
      new Date().getMonth()
    )}-${zerofy(new Date().getFullYear())}`,
  };

  return value;
}
