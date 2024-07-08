import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { navbarData } from "../../exports/navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Search } from "../Search/Search";
import { RxCross1 } from "react-icons/rx";
import i18n from "i18next";

export const Navbar = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [langVal, setLangValue] = useState("uz");

  useEffect(() => {
    i18n.changeLanguage(langVal);
    localStorage.setItem("i18lng", langVal);
  }, [langVal]);

  document.body.style = `overflow: ${
    showSearch || showMore ? "hidden" : "auto"
  }`;

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <Link to={"/"} className={styles.logo}>
          <img src="./src/assets/logo.png" alt="logo" />
        </Link>
        <div>
          <ul>
            {navbarData.map((item, index) => {
              const { id, content, to } = item;
              return (
                index < 3 && (
                  <li key={id} className="mob-hide">
                    <Link to={to}>{t(content)}</Link>
                  </li>
                )
              );
            })}
          </ul>
          <div
            className={styles.more}
            onClick={() => setShowMore((prev) => !prev)}
          >
            <p>More</p>
            {showMore ? <RxCross1 /> : <GiHamburgerMenu />}
          </div>
          {showMore && (
            <ul className={styles.more_content}>
              {navbarData.map((item, index) => {
                const { id, content, to } = item;
                return (
                  <li key={id} className={index < 3 ? "desk-hide" : ""}>
                    <Link to={to}>{t(content)}</Link>
                  </li>
                );
              })}
            </ul>
          )}
          <div
            className={styles.search}
            onClick={() => setShowSearch((prev) => !prev)}
          >
            <BiSearch />
          </div>
          <div className={styles.lang}>
            {langVal == "en" ? (
              <span onClick={() => setLangValue("uz")}>O`zb</span>
            ) : (
              <span onClick={() => setLangValue("en")}>Eng</span>
            )}
          </div>
          {showSearch && <Search />}
        </div>
      </div>
    </nav>
  );
};
