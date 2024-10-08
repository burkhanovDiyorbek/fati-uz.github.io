import { useTranslation } from "react-i18next";
import styles from "./footer.module.css";
import { footerData } from "../../exports/navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Footer = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios
          .get("/qoshimcha-malumotlar/aloqa/")
          .then((req) => setData(req.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container}+" container"`}>
        <div className={styles.column}>
          <div className={styles.row1}>
            <p>
              <b>{t("footer_title_b")}</b>
              {t("footer_title_p")}
            </p>
            <Link to={"/"}>
              <img
                src="/assets/logo-light.png"
                alt="logo light"
                className={styles.logo}
              />
            </Link>
          </div>
          <div className={styles.row2}>
            <div>
              <h2>{t("site_map")}</h2>
              <nav>
                <ul>
                  {footerData.map((item, index) => {
                    const { id, content, to } = item;
                    return (
                      index < 4 && (
                        <li key={id}>
                          <Link to={to}>{t(content)}</Link>
                        </li>
                      )
                    );
                  })}
                </ul>
                <ul>
                  {footerData.map((item, index) => {
                    const { id, content, to } = item;
                    return (
                      index > 4 && (
                        <li key={id}>
                          <Link to={to}>{t(content)}</Link>
                        </li>
                      )
                    );
                  })}
                </ul>
              </nav>
            </div>
            <nav>
              <div>
                <h2>{t("subscribe")}</h2>
                <ul>
                  <li>
                    <a href={data?.[0]?.telegram} target="_blank">
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a href={data?.[0]?.facebook} target="_blank">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href={data?.[0]?.instagram} target="_blank">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href={data?.[0]?.youtube} target="_blank">
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2>{t("visit_us")}</h2>
                <ul>
                  <li>Toshkent sh.</li>
                  <li>Mirobod tumani</li>
                  <li>Shahrisabz tor ko`chasi, 5-uy</li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>{t("rights")}</p>
          <p>
            © Copyright {new Date().getFullYear()} - Web developed by #bUrkHaNov
          </p>
        </div>
      </div>
    </footer>
  );
};
