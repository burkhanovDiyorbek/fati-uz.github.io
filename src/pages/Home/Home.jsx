import { useTranslation } from "react-i18next";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { navbarData } from "../../exports/navbar";
import { GrDown } from "react-icons/gr";
import axios from "axios";
import PropTypes from "prop-types";

export const Home = ({ setLoading, loading }) => {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [doctaurantsData, setDoctaurantsData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [quickLinksData, setQuickLinksData] = useState([]);
  const [centersData, setCentersData] = useState([]);
  const lang = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/doktarantura/doktarantura/")
          .then((req) => setDoctaurantsData(req.data.results));
        await axios
          .get("/qoshimcha-malumotlar/yangiliklar/")
          .then((req) => setNewsData(req.data.results));
        await axios
          .get("/qoshimcha-malumotlar/havolalar/")
          .then((req) => setQuickLinksData(req.data.results));
        await axios
          .get("/markazlar-va-bolimlar/markazlar_bolimlar/")
          .then((req) => setCentersData(req.data));
        setLoading(false);
      } catch (error) {
        setLoading("show-p");
      }
    };
    fetchData();
  }, []);
  if (loading === "show-p") {
    return <p className="show-p-error">{t("show-p-error")}</p>;
  }
  if (loading === true) {
    return <div className="loader"></div>;
  }
  console.log(centersData);

  return (
    <section className={styles.section + " column"}>
      <header className={styles.header}>
        <div className={styles["header-bg"]}></div>
        <div className={styles.logo}>
          <img src="./assets/logo-light.png" alt="logo" />
        </div>
        <div className={styles["menu-mob"]}>
          <div
            className={styles["mob-icon"]}
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <BiMenu />
          </div>
        </div>
        <ul className={showMenu ? styles.show : ""}>
          {navbarData.map((item) => {
            const { id, content } = item;
            return (
              <li key={id}>
                <input type="radio" name="menu" id={id} />
                <label htmlFor={id}>
                  {!item?.links ? (
                    <Link to={item.to}>{t(content)}</Link>
                  ) : (
                    <p>{t(content)}</p>
                  )}
                  {item.links ? (
                    <ol>
                      {item?.links?.map((item) => {
                        const { id, content, to } = item;
                        return (
                          <li key={id} onClick={() => setShowMenu(false)}>
                            <Link to={to}>{t(content)}</Link>
                          </li>
                        );
                      })}
                    </ol>
                  ) : (
                    ""
                  )}
                </label>
              </li>
            );
          })}
        </ul>
      </header>
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>{t("latest_news")}</h2>
            <a href="/news">
              <button>{t("all_news")}</button>
            </a>
          </div>
          <div className="row2">
            <div className="cards">
              {newsData.reverse().map((item, index) => {
                if (index < 3) {
                  return (
                    <Link
                      to={"/news/" + item?.id}
                      className="card"
                      key={item?.id}
                    >
                      <h3>{item?.[`title_${lang}`]}</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            item?.[`content_${lang}`].slice(0, 300) + "...",
                        }}
                      />
                      <img
                        src="./assets/icons/arrow.svg"
                        alt="arrow"
                        className="arrow"
                      />
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>{t("about")}</h2>
            <Link to="/about">
              <button>{t("more")}</button>
            </Link>
          </div>
          <div className="row2">
            <div className="cards">
              <h3>{t("home_about_h3")}</h3>
              <br />
              <p>{t("home_about_p")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="img-cards">
          <h2>{t("centers")}</h2>
          <div className="cards">
            {centersData.map((item) => {
              return (
                <div className="card" key={item?.id}>
                  <Link to={"/centers-and-departments/" + item?.id}>
                    <img src={item?.fotogalereya?.[0]?.img_url} alt="" />
                    <h3>{t("centers" + item?.id)}</h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="img-cards">
          <h2>{t("councils")}</h2>
          <ul>
            <li className="no-border">
              <Link to={"scientific-degree"}>
                <p>{t("scientific-degree")}</p>
                <img src="./assets/icons/arrow.svg" alt="arrow" />
              </Link>
            </li>
            <li className="no-border">
              <Link to={"scientific-degree"}>
                <p> {t("sc-young")}</p>
                <img src="./assets/icons/arrow.svg" alt="arrow" />
              </Link>
            </li>
            <li className="no-border">
              <Link to={"scientific-degree"}>
                <p> {t("sc-council")}</p>
                <img src="./assets/icons/arrow.svg" alt="arrow" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="aside">
        <div className="aside-container">
          <div className="aside-img">
            <img src="./assets/header.jpg" alt="jpg" />
          </div>
          <div className="aside-content">
            <Link to={"/journal"}>
              <h2>{t("journal")}</h2>
            </Link>
            <p>{t("journal_context")}</p>
            <Link to={"/journal"}>
              <img
                src="./assets/icons/arrow-light.svg"
                alt="arrow"
                className="arrow"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="container doc-con">
        <h2>{t("doctaurants")}</h2>
        <div className="doctaurants">
          {doctaurantsData?.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <img src={item?.file} alt="user" />
                </div>
                <div className="content">
                  <h2>{item?.[`title_${lang}`]}</h2>
                  <ul>
                    <li>
                      <input type="checkbox" name="doc" id={`e1${index}`} />
                      <label htmlFor={`e1${index}`}>
                        <span>Mehnat faoliyati</span>
                        <GrDown />
                      </label>
                      {item?.[`mehnat_faolyati_${lang}`] ? (
                        <ol
                          dangerouslySetInnerHTML={{
                            __html: item?.[`mehnat_faolyati_${lang}`],
                          }}
                        />
                      ) : (
                        <ol>
                          <p>Nothing to see...</p>
                        </ol>
                      )}
                    </li>
                    <li>
                      <input type="checkbox" name="doc" id={`e2${index}`} />
                      <label htmlFor={`e2${index}`}>
                        <span>Ilmiy faoliyat</span>
                        <GrDown />
                      </label>
                      {item?.[`ilimiy_faolyati_${lang}`] ? (
                        <ol
                          dangerouslySetInnerHTML={{
                            __html: item?.[`ilimiy_faolyati_${lang}`],
                          }}
                        />
                      ) : (
                        <ol>
                          <p>Nothing to see...</p>
                        </ol>
                      )}
                    </li>
                    <li>
                      <input type="checkbox" name="doc" id={`e3${index}`} />
                      <label htmlFor={`e3${index}`}>
                        <span>Asarlari</span>
                        <GrDown />
                      </label>
                      {item?.[`asarlar_${lang}`] ? (
                        <ol
                          dangerouslySetInnerHTML={{
                            __html: item?.[`asarlar_${lang}`],
                          }}
                        />
                      ) : (
                        <ol>
                          <p>Nothing to see...</p>
                        </ol>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <Link to={"/doctaurants"}>
          <button>{t("more")}</button>
        </Link>
      </div>
      <div className="container">
        <div className="img-cards" style={{ margin: "70px 0 90px" }}>
          <h2>{t("gatherings")}</h2>
          <ul>
            {Array(4)
              .fill(0)
              .map((_, index) => {
                return (
                  <li key={index} className="no-border">
                    <Link to={"seminar?id=" + (index + 1)}>
                      <p>{t("seminar" + (index + 1))}</p>
                      <img
                        src="./assets/icons/arrow.svg"
                        alt="arrow"
                        className="arrow"
                      />
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="img-cards">
          <h2>{t("library")}</h2>
          <div className="cards">
            <div className="card">
              <img src="./assets/book-img.jpg" alt="book img" />
              <h3>Investing in a 21st Century Educational Research System</h3>
              <img
                src="./assets/icons/arrow.svg "
                alt="arrow img"
                className="arrow"
              />
            </div>
            <div className="card">
              <img src="./assets/book-img.jpg" alt="book img" />
              <h3>Investing in a 21st Century Educational Research System</h3>
              <img
                src="./assets/icons/arrow.svg "
                alt="arrow img"
                className="arrow"
              />
            </div>
            <div className="card">
              <img src="./assets/book-img.jpg" alt="book img" />
              <h3>Investing in a 21st Century Educational Research System</h3>
              <img
                src="./assets/icons/arrow.svg "
                alt="arrow img"
                className="arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="quick-links">
          <h2>Foydali havolalar</h2>
          <div className="cards">
            {quickLinksData?.map((item) => {
              return (
                <a
                  className="card no-border"
                  href={item?.link}
                  target="_blank"
                  key={item?.id}
                >
                  <div className="card-img">
                    <img src={item?.file} alt="quick link" />
                  </div>
                  <p>{item?.[`title_${lang}`]}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

Home.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
