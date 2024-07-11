import PageTop from "../components/PageTop/PageTop";
import { GrDown } from "react-icons/gr";

export const Doctaurants = () => {
  return (
    <styles>
      <PageTop data={{ h2: "doctaurants" }} />
      <div className="container">
        <div className="doctaurants">
          {Array(8)
            .fill(0)
            .map((_, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card-img">
                    <img src="./assets/user.jpg" alt="user" />
                  </div>
                  <div className="content">
                    <h2>GULIRA’NO ALIJON QIZI ABDUG’ANIYEVA</h2>
                    <ul>
                      <li>
                        <input type="checkbox" name="doc" id={`e1${index}`} />
                        <label htmlFor={`e1${index}`}>
                          <span>Mehnat faoliyati</span>
                          <GrDown />
                        </label>
                        <ol>
                          <li>
                            1994-yil Namangan viloyati Pop tumanida tug’ilgan.
                          </li>
                          <li>
                            2013-yil O‘zbekiston Milliy Universiteti (bakalavr)
                            ni tamomlagan.
                          </li>
                          <li>
                            2019-yil O‘zbekiston Milliy Universiteti (magistr)ni
                            tamomlagan.
                          </li>
                          <li> 2023-yildan tayanch doktorant.</li>
                        </ol>
                      </li>
                      <li>
                        <input type="checkbox" name="doc" id={`e2${index}`} />
                        <label htmlFor={`e2${index}`}>
                          <span>Ilmiy faoliyat</span>
                          <GrDown />
                        </label>
                        <ol>
                          <li>
                            <b>Dissertatsiya mavzusi: </b>“O‘zbekiston SSRdagi
                            ijtimoiy-iqtisodiy jarayonlar va aholi (1925 -
                            1940-yillar)” (Ilmiy rahbar: tarix fanlari doktori,
                            dotsent Muxayyo Srajiddinovna Isakova).
                          </li>
                          <li>
                            1925 - 1940-yillarda O‘zbekistondagi tarixiy
                            jarayonlar, ijtimoiy-iqtisodiy o‘zgarishlar aholi
                            soni, yoshi, jinsi, millati umuman aholi
                            o‘zgarishlariga ta’siri arxiv hujjatlari asosida
                            o‘rganiladi.
                          </li>
                        </ol>
                      </li>
                      <li>
                        <input type="checkbox" name="doc" id={`e3${index}`} />
                        <label htmlFor={`e3${index}`}>
                          <span>Asarlari</span>
                          <GrDown />
                        </label>
                        <ol>
                          <li>
                            Ayolga e’tibor – kelajakka e’tibor. Ta’lim va
                            tarbiya jarayonida modernizatsiya, QDPU, To‘plam,
                            2018 y.
                          </li>
                          <li>
                            Tadbirkor ayol – yurtga madadkor. O‘zbekiston
                            tarixining dolzarb masalalari yosh tadqiqotchilar
                            nigohida. O‘zMu Tarix fakulteti. To‘plam. 2018 y.,
                            5-8 - betlar
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                          <li>
                            Attention to Women is Attention to the future.
                            American journal of social and humanitarian
                            research, 2022 y., №3, 31-33 - pages
                          </li>
                        </ol>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </styles>
  );
};
