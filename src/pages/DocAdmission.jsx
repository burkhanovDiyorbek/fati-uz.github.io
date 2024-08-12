import { useEffect, useState } from "react";
import PageTop from "../components/PageTop/PageTop";
import axios from "axios";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export const DocAdmission = ({ setLoading, loading }) => {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/doktarantura/qabul-tartibi/")
          .then((req) => setData(req.data.results));
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
  console.log(data);

  return (
    <section>
      <PageTop data={{ h2: "doc-admission" }} />
      <div className="aside">
        <div className="aside-container">
          <div className="aside-img">
            <img src="./assets/header.jpg" alt="header jpg" />
          </div>
          <div className="aside-content">
            <h2>Qabul tartibi</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              deserunt fugit magni quo labore temporibus! Eligendi, temporibus
              maxime. Eum harum ipsum repellat ullam ratione cumque nostrum
              dolorum eligendi cupiditate iure.
            </p>
          </div>
        </div>
      </div>
      {data.map((item) => {
        return (
          <div className="container" key={item?.id}>
            <div className="section-slice">
              <div className="row1">
                <h2>{item?.[`title_${lang}`]}</h2>
              </div>
              <div className="row2">
                <ol
                  dangerouslySetInnerHTML={{
                    __html: item?.[`content_${lang}`],
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

DocAdmission.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.bool,
};
