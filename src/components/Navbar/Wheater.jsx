import React, { useEffect, useState } from "react";
import styles from "./wheater.module.css";
// import { useTranslation } from "react-i18next";

export const Wheater = React.memo(() => {
  const [data, setData] = useState();
  // const [region, setRegion] = useState("Tashkent");
  // const { t } = useTranslation();
  // const regions = [
  //   { id: 0, value: "Tashkent" },
  //   { id: 1, value: "Qarshi" },
  //   { id: 2, value: "Bukhara" },
  //   { id: 3, value: "Samarkand" },
  //   { id: 4, value: "Fergana" },
  //   { id: 5, value: "Andijan" },
  //   { id: 6, value: "Namangan" },
  //   { id: 7, value: "Sirdaryo" },
  //   { id: 8, value: "Navoiy" },
  //   { id: 9, value: "Urganch" },
  //   { id: 10, value: "Nukus" },
  //   { id: 11, value: "Termiz" },
  //   { id: 12, value: "Jizzax" },
  // ];
  const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${"Tashkent"}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "083310e32dmsh44fc2c0f9936546p1d7799jsnb3e6524c3288",
      "x-rapidapi-host": "weather-api138.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetching();
  }, []);

  return (
    <div className={styles.div}>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}
          alt={data?.weather?.description}
        />
        <span>{Math.ceil(data?.main?.temp - 271)} °C</span>
        <p>Tashkent</p>
      </div>
      {/* <div className={styles.select}>
        <p>{region}</p>
        <ul>
          {regions?.map((item) => {
            return (
              <li onClick={() => setRegion(item?.value)} key={item?.id}>
                {t(`month.${item?.id}`)}
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
});

Wheater.displayName = "wheater";
