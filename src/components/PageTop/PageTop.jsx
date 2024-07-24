import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { FaAngleDoubleRight } from "react-icons/fa";

const PageTop = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="page-top">
      <div className="container">
        <h2>{t(data?.h2)}</h2>
        <p>
          <a href="/">{t("home-page")}</a>
          <FaAngleDoubleRight />
          <span>{t(data?.h2)}</span>
        </p>
      </div>
      <img src="/assets/top-bg.png" alt="" />
    </div>
  );
};

PageTop.propTypes = {
  data: PropTypes.object,
};

export default PageTop;
