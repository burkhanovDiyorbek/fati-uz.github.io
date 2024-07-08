import { useTranslation } from "react-i18next";
import styles from "./news.module.css";
import { FaRegNewspaper } from "react-icons/fa6";
import { useState } from "react";

export const News = () => {
  const { t } = useTranslation();
  const [sortVal, setSortVal] = useState("newest");
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <div className="container">
          <h2>{t("news")}</h2>
          <p>
            The latest news and analysis from the British Academy, our community
            and leading SHAPE thinkers.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="community">
          <ul className="news-sort">
            <li>Sort by</li>
            <li
              className={sortVal == "newest" ? "active" : ""}
              onClick={() => setSortVal("newest")}
            >
              Published (newest)
            </li>
            <li
              className={sortVal == "oldest" ? "active" : ""}
              onClick={() => setSortVal("oldest")}
            >
              Published (oldest)
            </li>
            <li
              className={sortVal == "a-z" ? "active" : ""}
              onClick={() => setSortVal("a-z")}
            >
              A-Z
            </li>
            <li
              className={sortVal == "z-a" ? "active" : ""}
              onClick={() => setSortVal("z-a")}
            >
              Z-A
            </li>
          </ul>
          <div className="cards">
            <div className="card">
              <div className="content">
                <div className="news-title">
                  <FaRegNewspaper />
                  <p>{t("news")}</p>
                  <span>5 JUL 2024</span>
                </div>
                <h2>
                  Funding announced for Official Development Assistance
                  Challenge-Oriented Research Grants 2024
                </h2>
                <p>
                  The 48 successful research projects under the programme will
                  address current global policy challenges, related to themes
                  such as antimicrobial resistance, environmental resilience and
                  climate action, and pandemic preparedness.
                </p>
                <img
                  src="./../src/assets/icons/arrow.svg"
                  alt="arrow"
                  className="arrow"
                />
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="news-title">
                  <FaRegNewspaper />
                  <p>{t("news")}</p>
                  <span>5 JUL 2024</span>
                </div>
                <h2>
                  Funding announced for Official Development Assistance
                  Challenge-Oriented Research Grants 2024
                </h2>
                <p>
                  The 48 successful research projects under the programme will
                  address current global policy challenges, related to themes
                  such as antimicrobial resistance, environmental resilience and
                  climate action, and pandemic preparedness.
                </p>
                <img
                  src="./../src/assets/icons/arrow.svg"
                  alt="arrow"
                  className="arrow"
                />
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="news-title">
                  <FaRegNewspaper />
                  <p>{t("news")}</p>
                  <span>5 JUL 2024</span>
                </div>
                <h2>
                  Funding announced for Official Development Assistance
                  Challenge-Oriented Research Grants 2024
                </h2>
                <p>
                  The 48 successful research projects under the programme will
                  address current global policy challenges, related to themes
                  such as antimicrobial resistance, environmental resilience and
                  climate action, and pandemic preparedness.
                </p>
                <img
                  src="./../src/assets/icons/arrow.svg"
                  alt="arrow"
                  className="arrow"
                />
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="news-title">
                  <FaRegNewspaper />
                  <p>{t("news")}</p>
                  <span>5 JUL 2024</span>
                </div>
                <h2>
                  Funding announced for Official Development Assistance
                  Challenge-Oriented Research Grants 2024
                </h2>
                <p>
                  The 48 successful research projects under the programme will
                  address current global policy challenges, related to themes
                  such as antimicrobial resistance, environmental resilience and
                  climate action, and pandemic preparedness.
                </p>
                <img
                  src="./../src/assets/icons/arrow.svg"
                  alt="arrow"
                  className="arrow"
                />
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="news-title">
                  <FaRegNewspaper />
                  <p>{t("news")}</p>
                  <span>5 JUL 2024</span>
                </div>
                <h2>
                  Funding announced for Official Development Assistance
                  Challenge-Oriented Research Grants 2024
                </h2>
                <p>
                  The 48 successful research projects under the programme will
                  address current global policy challenges, related to themes
                  such as antimicrobial resistance, environmental resilience and
                  climate action, and pandemic preparedness.
                </p>
                <img
                  src="./../src/assets/icons/arrow.svg"
                  alt="arrow"
                  className="arrow"
                />
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="news-title">
                  <FaRegNewspaper />
                  <p>{t("news")}</p>
                  <span>5 JUL 2024</span>
                </div>
                <h2>
                  Funding announced for Official Development Assistance
                  Challenge-Oriented Research Grants 2024
                </h2>
                <p>
                  The 48 successful research projects under the programme will
                  address current global policy challenges, related to themes
                  such as antimicrobial resistance, environmental resilience and
                  climate action, and pandemic preparedness.
                </p>
                <img
                  src="./../src/assets/icons/arrow.svg"
                  alt="arrow"
                  className="arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
