import { FaRegNewspaper } from "react-icons/fa6";
import styles from "./newsabout.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const NewsAbout = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles["news-title"]}>
            <div>
              <FaRegNewspaper />
              <p>{t("news")}</p>
            </div>
          </div>
          <h2>Funding announced for Official Development Assistance</h2>
          <span>5 JUL 2024</span>
          <div className={styles.img}>
            <img src="./../src/assets/about-header.jpg" alt="img" />
          </div>
          <ul>
            <li>
              <span>
                The British Academy is pleased to announce the successful
                investigators of the ODA Challenge-Oriented Research Grants
                programme 2024.
              </span>
              <span>
                The programme supports researchers in the humanities and social
                sciences based in the UK and Brazil, Egypt, Indonesia, Jordan,
                Kenya, Malaysia, Philippines, South Africa, Turkey, Thailand,
                Vietnam and/or Least Developed Countries to develop and/or
                deepen international research collaborations on internationally
                focused ODA-eligible research projects on specific global
                challenges.
              </span>
            </li>
            <li>
              <h3>
                The 2024 ODA Challenge-Oriented Research Grants awardees are:
              </h3>
              <span>
                Please note: Awards are arranged alphabetically by surname of
                the grant recipient under each theme heading. The institution is
                that given at the time of application.
              </span>
            </li>
            <li>
              <h4>Antimicrobial Resistance</h4>
              <span>
                Research Team: Professor Alexandra Hughes, Newcastle University;
                Professor Alister Munthali, University of Malawi; Profesor Emma
                Roe, University of Southampton
              </span>
            </li>
            <li>
              <span>
                Research Team: Dr Helen Lambert, University of Bristol; Dr
                Mariam Taher Amin, Assiut University; Dr Nour Alhusein,
                University of Bristol; Dr Amira Fathy El-Gazzer, Badr University
              </span>
              <span>
                Exploring Social and Cultural Determinants of Antibiotic Use in
                Semi-Urban Egypt
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="img-cards">
          <h2>Latest News</h2>
          <div className="cards">
            <Link to={"news/1"} className="card">
              <img src="./../src/assets/book-img.jpg" alt="book" />
              <h3>Investing in a 21st Century Educational Research System</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, voluptatum.
              </p>
              <img
                src="./../src/assets/icons/arrow.svg "
                alt="arrow img"
                className="arrow"
              />
            </Link>
            <Link to={"news/1"} className="card">
              <img src="./../src/assets/book-img.jpg" alt="book" />
              <h3>Investing in a 21st Century Educational Research System</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, voluptatum.
              </p>
              <img
                src="./../src/assets/icons/arrow.svg "
                alt="arrow img"
                className="arrow"
              />
            </Link>
            <Link to={"news/1"} className="card">
              <img src="./../src/assets/book-img.jpg" alt="book" />
              <h3>Investing in a 21st Century Educational Research System</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, voluptatum.
              </p>
              <img
                src="./../src/assets/icons/arrow.svg "
                alt="arrow img"
                className="arrow"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
