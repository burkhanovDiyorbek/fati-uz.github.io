import { useEffect, useState } from "react";
import PageTop from "../components/PageTop/PageTop";
import { GrDown } from "react-icons/gr";
import axios from "axios";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export const Doctaurants = ({ setLoading, loading }) => {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/doktarantura/doktarantura/")
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
  // console.log(data[0].asarlar_uz);
  return (
    <section>
      <PageTop data={{ h2: "doctaurants" }} />
      <div className="container">
        <div className="doctaurants">
          {data.map((item, index) => {
            console.log(item?.[`mehnat_faolyati_${lang}`]);

            return (
              <div className="card" key={item?.id}>
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
                      <ol
                        dangerouslySetInnerHTML={{
                          __html: item?.[`mehnat_faolyati_${lang}`],
                        }}
                      />
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
      </div>
    </section>
  );
};
Doctaurants.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
