import PageTop from "../components/PageTop/PageTop";

export const ScientificDegree = () => {
  return (
    <section>
      <PageTop data={{ h2: "scientific-degree" }} />
      <div className="aside red">
        <div className="aside-container">
          <div className="aside-img">
            <img src="./assets/header.jpg" alt="jpg" />
          </div>
          <div className="aside-content">
            <h2>Ilmiy daraja beruvchi kengash</h2>
            <p>
              Fanlar akademiyasi Tarix instituti huzuridagi DSc.02/30.12.2019.
              Tar.56.01 raqamli ilmiy kengash tarkibi
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <ul className="councils">
          {Array(16)
            .fill(0)
            .map((item, index) => {
              return (
                <li key={index}>
                  <span>07.00.01</span>
                  <h2>Rahbarxon Hamidovna Murtazayeva</h2>
                  <ol>
                    <li>
                      <b>Ish joyi: </b>Tarix instituti
                    </li>
                    <li>
                      <b>Lavozim: </b> Direktor
                    </li>
                    <li>
                      <b>Ilmiy darajasi: </b> tarix fanlari doktori
                    </li>
                    <li>
                      <b>Ilmiy unvini: </b> professor
                    </li>
                  </ol>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};
