import PageTop from "../../components/PageTop/PageTop";
import { useTranslation } from "react-i18next";

export const TradeUnion = () => {
  const { t } = useTranslation();
  return (
    <section>
      <PageTop data={{ h2: "trade-union" }} />
      <div className="container">
        <div className="community">
          <h2 className="title">{t("trade-union")}</h2>
          <div className="cards">
            <div className="card">
              <div className="content">
                <p>PRESIDENT OF THE BRITISH ACADEMY</p>
                <h2>Professor Julia Black PBA</h2>
                <span>Tarix fanlari doktori, professor</span>
                <ul>
                  <li>
                    <b>Email:</b>
                    <a href="email:azamatziyo@fati.uz">azamatziyo@fati.uz</a>
                  </li>
                  <li>
                    <b>Phone:</b>
                    <a href="tel:+998712335470">+998 71 233-54-70</a>
                  </li>
                  <li>
                    <b>Days:</b>
                    <a>Dushanba-Juma</a>
                  </li>
                </ul>
              </div>
              <div className="picture">
                <img src="./assets/user.jpg" alt="user" />
              </div>
            </div>
            <div className="card">
              <div className="content">
                <p>PRESIDENT OF THE BRITISH ACADEMY</p>
                <h2>Professor Julia Black PBA</h2>
                <span>Tarix fanlari doktori, professor</span>
                <ul>
                  <li>
                    <b>Email:</b>
                    <a href="email:azamatziyo@fati.uz">azamatziyo@fati.uz</a>
                  </li>
                  <li>
                    <b>Phone:</b>
                    <a href="tel:+998712335470">+998 71 233-54-70</a>
                  </li>
                  <li>
                    <b>Days:</b>
                    <a>Dushanba-Juma</a>
                  </li>
                </ul>
              </div>
              <div className="picture">
                <img src="./assets/user.jpg" alt="user" />
              </div>
            </div>
            <div className="card">
              <div className="content">
                <p>PRESIDENT OF THE BRITISH ACADEMY</p>
                <h2>Professor Julia Black PBA</h2>
                <span>Tarix fanlari doktori, professor</span>
                <ul>
                  <li>
                    <b>{t("email")}:</b>
                    <a href="email:azamatziyo@fati.uz">azamatziyo@fati.uz</a>
                  </li>
                  <li>
                    <b>{t("phone")}:</b>
                    <a href="tel:+998712335470">+998 71 233-54-70</a>
                  </li>
                  <li>
                    <b>{t("days")}:</b>
                    <a>Dushanba-Juma</a>
                  </li>
                </ul>
              </div>
              <div className="picture">
                <img src="./assets/user.jpg" alt="user" />
              </div>
            </div>
            <div className="card">
              <div className="content">
                <p>PRESIDENT OF THE BRITISH ACADEMY</p>
                <h2>Professor Julia Black PBA</h2>
                <span>Tarix fanlari doktori, professor</span>
                <ul>
                  <li>
                    <b>Email:</b>
                    <a href="email:azamatziyo@fati.uz">azamatziyo@fati.uz</a>
                  </li>
                  <li>
                    <b>Phone:</b>
                    <a href="tel:+998712335470">+998 71 233-54-70</a>
                  </li>
                  <li>
                    <b>Days:</b>
                    <a>Dushanba-Juma</a>
                  </li>
                </ul>
              </div>
              <div className="picture">
                <img src="./assets/user.jpg" alt="user" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
