import { useTranslation } from "react-i18next";
import PageTop from "../components/PageTop/PageTop";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

export const Sources = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [paginate, setPaginate] = useState(6);
  console.log(search);
  return (
    <section>
      <PageTop data={{ h2: "sources" }} />
      <div className="books">
        <div className="container">
          <div className="top">
            <h2>{t("sources")}</h2>
            <label>
              <input
                type="text"
                placeholder="search anything"
                onInput={(e) => setSearch(e.target.value)}
              />
              <FaSearch />
            </label>
          </div>
        </div>
        <div className="container">
          <div className="img-cards">
            <div className="cards">
              {Array(paginate)
                .fill(0)
                .map((_, index) => {
                  return (
                    <div className="card" key={index}>
                      <img src="./assets/book-img.jpg" alt="book img" />
                      <h3>
                        Investing in a 21st Century Educational Research System
                      </h3>
                      <img
                        src="./assets/icons/arrow.svg "
                        alt="arrow img"
                        className="arrow"
                      />
                    </div>
                  );
                })}
              <div className="load-more">
                {paginate > 6 && (
                  <button onClick={() => setPaginate((prev) => prev - 3)}>
                    Kamroq <BiUpArrow />
                  </button>
                )}
                <button onClick={() => setPaginate((prev) => prev + 3)}>
                  Yana <BiDownArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
