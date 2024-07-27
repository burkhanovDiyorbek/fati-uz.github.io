import { useState } from "react";
import PageTop from "../components/PageTop/PageTop";
import { useTranslation } from "react-i18next";

export const GlobalResearchers = () => {
  const [year, setYear] = useState(2016);
  const { t } = useTranslation();
  return (
    <section>
      <PageTop data={{ h2: "global-researchers" }} />
      <div className="aside green">
        <div className="aside-container">
          <div className="aside-img">
            <img src="./assets/header.jpg" alt="header" />
          </div>
          <div className="aside-content">
            <h2>{t("global-researchers")}</h2>
            <p style={{ marginBottom: "30px" }}>
              O&rsquo;zR FA Tarix institutiga kelgan chet ellik mutaxassislar
              (2016-2020)
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="global-researchers">
          <div className="top">
            <ul>
              {Array(6)
                .fill(2016)
                .map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => setYear(2016 + index)}
                      className={2016 + index == year ? "active" : ""}
                    >
                      {2016 + index}
                    </li>
                  );
                })}
            </ul>
          </div>
          <ul>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
