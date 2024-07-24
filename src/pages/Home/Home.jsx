import { useTranslation } from "react-i18next";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { navbarData } from "../../exports/navbar";
import { GrDown } from "react-icons/gr";

export const Home = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);

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
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>{t("about")}</h2>
            <a href="/about">
              <button>{t("more")}</button>
            </a>
          </div>
          <div className="row2">
            <div className="cards">
              <Link to={"/about"} className="card">
                <h3>
                  The British Academy has partnered with Panos Pictures, an
                  agency specialising in global social issues, on a photography
                  commission to bring to life the themes of `Courting India`.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident reprehenderit possimus et amet quibusdam ad rem
                  eligendi iusto sit sequi cumque nisi qui veniam laboriosam
                  praesentium nemo, suscipit neque. Quos minus enim, natus at
                  recusandae ipsam dolorum sed hic nulla aspernatur dolor! Eos
                  facere, sunt dicta obcaecati voluptate ab placeat? Temporibus,
                  repellat eligendi magni amet, modi earum saepe facere nihil
                  nam provident unde, aliquid voluptas et assumenda commodi ad
                  sequi inventore veritatis consequatur cupiditate? Commodi nam
                  quia aut aperiam, tenetur, excepturi dignissimos suscipit sint
                  numquam, omnis debitis. Dolore temporibus vitae dolores
                  repudiandae eius! Eum, labore culpa rerum delectus accusamus
                  odio exercitationem nulla inventore, sed saepe atque ducimus
                  animi rem cum, ut mollitia aliquam dignissimos corrupti maxime
                  minus illo reiciendis? Molestiae animi perspiciatis ullam vel
                  incidunt minima cum eos id voluptatem possimus quo, minus
                  earum ducimus exercitationem nihil non voluptatum modi.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="img-cards">
          <h2>{t("centers")}</h2>
          <div className="cards">
            {Array(6)
              .fill(0)
              .map((_, index) => {
                return (
                  <div className="card" key={index}>
                    <Link to={"/centers-and-departments?id=1"}>
                      <img src="./assets/book-img.jpg" alt="" />
                      <h3>New Centre for Innovative Education</h3>
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
              <h2>Journal of the British Academy relaunched</h2>
            </Link>
            <p>
              The Journal of the British Academy has been relaunched to improve
              access to its diverse range of world-class SHAPE research. The
              Journal has expanded its scope, spotlighting interdisciplinary
              research from across the British Academy, including from British
              Academy Fellows, its funded research programmes, and academic
              events and activities.
            </p>
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
          {Array(4)
            .fill(0)
            .map((_, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card-img">
                    <img src="./assets/user.jpg" alt="user" />
                  </div>
                  <div className="content">
                    <h2>GULIRA’NO ALIJON QIZI ABDUG’ANIYEVA</h2>
                    <ul>
                      <li>
                        <input type="checkbox" name="doc" id={`e1${index}`} />
                        <label htmlFor={`e1${index}`}>
                          <span>Mehnat faoliyati</span>
                          <GrDown />
                        </label>
                        <ol>
                          <li>
                            1994-yil Namangan viloyati Pop tumanida tug’ilgan.
                          </li>
                          <li>
                            2013-yil O‘zbekiston Milliy Universiteti (bakalavr)
                            ni tamomlagan.
                          </li>
                          <li>
                            2019-yil O‘zbekiston Milliy Universiteti (magistr)ni
                            tamomlagan.
                          </li>
                          <li> 2023-yildan tayanch doktorant.</li>
                        </ol>
                      </li>
                      <li>
                        <input type="checkbox" name="doc" id={`e2${index}`} />
                        <label htmlFor={`e2${index}`}>
                          <span>Ilmiy faoliyat</span>
                          <GrDown />
                        </label>
                        <ol>
                          <li>
                            <b>Dissertatsiya mavzusi: </b>“O‘zbekiston SSRdagi
                            ijtimoiy-iqtisodiy jarayonlar va aholi (1925 -
                            1940-yillar)” (Ilmiy rahbar: tarix fanlari doktori,
                            dotsent Muxayyo Srajiddinovna Isakova).
                          </li>
                          <li>
                            1925 - 1940-yillarda O‘zbekistondagi tarixiy
                            jarayonlar, ijtimoiy-iqtisodiy o‘zgarishlar aholi
                            soni, yoshi, jinsi, millati umuman aholi
                            o‘zgarishlariga ta’siri arxiv hujjatlari asosida
                            o‘rganiladi.
                          </li>
                        </ol>
                      </li>
                      <li>
                        <input type="checkbox" name="doc" id={`e3${index}`} />
                        <label htmlFor={`e3${index}`}>
                          <span>Asarlari</span>
                          <GrDown />
                        </label>
                        <ol>
                          <li>
                            Ayolga e’tibor – kelajakka e’tibor. Ta’lim va
                            tarbiya jarayonida modernizatsiya, QDPU, To‘plam,
                            2018 y.
                          </li>
                          <li>
                            Tadbirkor ayol – yurtga madadkor. O‘zbekiston
                            tarixining dolzarb masalalari yosh tadqiqotchilar
                            nigohida. O‘zMu Tarix fakulteti. To‘plam. 2018 y.,
                            5-8 - betlar
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                        </ol>
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
                  <li key={index}>
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
