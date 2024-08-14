import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import PageTop from "../components/PageTop/PageTop";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import PropTypes from "prop-types";
export const Abstracts = ({ setLoading, loading }) => {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState("");
  const [paginate, setPaginate] = useState(6);
  const [data, setData] = useState([]);
  const lang = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/kutobxona/avtoreferat/")
          .then((req) => setData(req.data.results));
        setLoading(false);
      } catch (error) {
        console.log(error);
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
  return (
    <section>
      <PageTop data={{ h2: "abstracts" }} />
      <div className="books">
        <div className="container">
          <div className="top">
            <h2>{t("abstracts")}</h2>
            <label>
              <input
                type="text"
                placeholder={t("search")}
                onInput={(e) => setSearch(e.target.value)}
              />
              <FaSearch />
            </label>
          </div>
        </div>
        <div className="container">
          <div className="img-cards">
            <div className="cards">
              {data
                ?.filter((item) =>
                  item?.[`title_${lang}`]
                    ?.toLowerCase()
                    ?.includes(search?.toLowerCase())
                )
                ?.map((item) => {
                  return (
                    <div className="card" key={item?.id}>
                      <img src={item?.cover_img} alt="book img" />
                      <h3>{item?.[`title_${lang}`]}</h3>
                      <a href={item?.file} target="_blank" className="arrow">
                        <img src="./assets/icons/arrow.svg " alt="arrow img" />
                      </a>
                    </div>
                  );
                })}
              <div className="load-more">
                {paginate > 6 && (
                  <button onClick={() => setPaginate((prev) => prev - 3)}>
                    Kamroq <BiUpArrow />
                  </button>
                )}
                {data?.length > 6 ? (
                  <button onClick={() => setPaginate((prev) => prev + 3)}>
                    Yana <BiDownArrow />
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Abstracts.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
