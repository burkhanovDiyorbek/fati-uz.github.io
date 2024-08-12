import { useEffect, useState } from "react";
import PageTop from "../components/PageTop/PageTop";
import axios from "axios";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export const ScYoung = ({ setLoading, loading }) => {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/kengashlar/yosh-olimlar/")
          .then((req) => setData(req.data.results));
        setLoading(false);
      } catch (error) {
        setLoading("show-p");
        console.log(error);
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
      <PageTop data={{ h2: "sc-young" }} />
      {data?.map((item) => {
        return (
          <div className="container" key={item?.id}>
            <div className="section-slice">
              <div className="row1">
                <h2>{item?.[`title_${lang}`]}</h2>
                <img src={item?.file} alt="img not found" />
              </div>
              <div className="row2">
                <p
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

ScYoung.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.bool,
};
