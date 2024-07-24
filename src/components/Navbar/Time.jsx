import { useEffect, useState } from "react";
import styles from "./time.module.css";

function gregorianToHijri(gregorianYear) {
  const hijriEpoch = 622;
  const hijriYearLength = 354.367;
  const gregorianYearLength = 365.2425;

  const yearsPassed = gregorianYear - hijriEpoch;
  const daysPassed = yearsPassed * gregorianYearLength;
  const hijriYearsPassed = daysPassed / hijriYearLength;

  const hijriYear = hijriYearsPassed + 1;
  return Math.floor(hijriYear);
}

export const Time = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setHour(date.getHours());
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());
    }, 1000);
  }, []);

  return (
    <div className={styles.div + " mob-hide"}>
      <div>
        <p>{hour < 10 ? "0" + hour : hour}</p>
        <span>:</span>
        <p>{minute < 10 ? "0" + minute : minute}</p>
        <span>:</span>
        <p>{second < 10 ? "0" + second : second}</p>
        <b></b>
        <p>
          {new Date().getFullYear()} /{" "}
          {gregorianToHijri(new Date().getFullYear())}
        </p>
      </div>
    </div>
  );
};
