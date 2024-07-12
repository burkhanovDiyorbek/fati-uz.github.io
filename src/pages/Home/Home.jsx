import { useTranslation } from "react-i18next";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section + " column"}>
      <img src="./assets/header.jpg" alt="img" className={styles.slide} />
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
              <Link to={"/news/1"} className="card">
                <h3>
                  The British Academy joins partners to host hustings in
                  science, innovation and technology
                </h3>
                <p>
                  The British Academy has partnered with Panos Pictures, an
                  agency specialising in global social issues, on a photography
                  commission to bring to life the themes of `Courting India`.
                </p>
                <img
                  src="./assets/icons/arrow.svg"
                  alt="arrow"
                  className="arrow"
                />
              </Link>
              <Link to={"/news/1"} className="card">
                <h3>
                  The British Academy joins partners to host hustings in
                  science, innovation and technology
                </h3>
                <p>
                  The British Academy has partnered with Panos Pictures, an
                  agency specialising in global social issues, on a photography
                  commission to bring to life the themes of `Courting India`.
                </p>
                <img
                  src="./assets/icons/arrow.svg"
                  alt="arrow"
                  className="arrow"
                />
              </Link>
              <Link to={"/news/1"} className="card">
                <h3>
                  The British Academy joins partners to host hustings in
                  science, innovation and technology
                </h3>
                <p>
                  The British Academy has partnered with Panos Pictures, an
                  agency specialising in global social issues, on a photography
                  commission to bring to life the themes of `Courting India`.
                </p>
                <img
                  src="./assets/icons/arrow.svg"
                  alt="arrow"
                  className="arrow"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="aside">
        <div className="aside-container">
          <div className="aside-img">
            <img src="./assets/header.jpg" alt="jpg" />
          </div>
          <div className="aside-content">
            <h2>Journal of the British Academy relaunched</h2>
            <p>
              The Journal of the British Academy has been relaunched to improve
              access to its diverse range of world-class SHAPE research. The
              Journal has expanded its scope, spotlighting interdisciplinary
              research from across the British Academy, including from British
              Academy Fellows, its funded research programmes, and academic
              events and activities.
            </p>
            <img
              src="./assets/icons/arrow-light.svg"
              alt="arrow"
              className="arrow"
            />
          </div>
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
      <div className="aside green">
        <div className="aside-container">
          <div className="aside-img">
            <img src="./assets/header.jpg" alt="jpg" />
          </div>
          <div className="aside-content">
            <h2>Journal of the British Academy relaunched</h2>
            <p>
              The Journal of the British Academy has been relaunched to improve
              access to its diverse range of world-class SHAPE research. The
              Journal has expanded its scope, spotlighting interdisciplinary
              research from across the British Academy, including from British
              Academy Fellows, its funded research programmes, and academic
              events and activities.
            </p>
            <img
              src="./assets/icons/arrow-light.svg"
              alt="arrow"
              className="arrow"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="quick-links">
          <h2>Foydali havolalar</h2>
          <div className="cards">
            <a className="card" href="/" target="_blank">
              <div className="card-img">
                <img
                  src="	https://my.gov.uz/svg/logotype.svg"
                  alt="quick link"
                />
              </div>
              <p>Davlat Xizmatlari Markazi</p>
            </a>
            <a className="card" href="https://jadidlar.uz" target="_blank">
              <div className="card-img">
                <img src="./assets/jadidlar.svg" alt="quick link" />
              </div>
              <p>Jadidlar.uz</p>
            </a>
            <a className="card" href="https://tarix-manba.uz" target="_blank">
              <div className="card-img">
                <img src="./assets/quick-links.jpg" alt="quick link" />
              </div>
              <p>Tarix Manba</p>
            </a>
            <a className="card" href="/" target="_blank">
              <div className="card-img">
                <img
                  src="https://uzbmb.uz/upload/file/setting/Logo.png"
                  alt="quick link"
                />
              </div>
              <p>UZBMB.UZ</p>
            </a>
            <a className="card" href="/" target="_blank">
              <div className="card-img">
                <img src="./assets/quick-links.jpg" alt="quick link" />
              </div>
              <p>Hukumat Portali</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
