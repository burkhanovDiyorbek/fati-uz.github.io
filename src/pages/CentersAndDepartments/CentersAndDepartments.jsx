import styles from "./centers-and-departments.module.css";
import PageTop from "../../components/PageTop/PageTop";
import { useLocation } from "react-router-dom";
import Slider from "../../components/Slider";

const slideData = [
  { id: 0, img_link: "./assets/about-header.jpg" },
  { id: 2, img_link: "./assets/structure.jpg" },
  { id: 1, img_link: "./assets/top-bg.png" },
];

export const CentersAndDepartments = () => {
  const { search } = useLocation();
  let id = search.at(-1);


  return (
    <section className={styles.section}>
      <PageTop data={{ h2: "centers" + id }} />
      <Slider slideData={slideData} />
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>tarixi</h2>
          </div>
          <div className="row2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
              dignissimos quas obcaecati et iste necessitatibus pariatur nam
              fugiat ipsum excepturi assumenda minus eligendi repudiandae
              perferendis corrupti nostrum tempora animi! Voluptatum numquam ab,
              magnam earum ullam maxime porro. Ullam ratione voluptate
              distinctio autem atque possimus, veniam eaque molestiae mollitia
              enim qui soluta dolorem quas et voluptatum molestias tenetur ipsa
              eligendi alias minima, nulla eos magni! Cum molestiae similique
              aspernatur quae sed quia excepturi velit ullam aperiam inventore
              assumenda nesciunt itaque id, adipisci maiores molestias omnis
              soluta magnam! Asperiores, a beatae vel dicta voluptatum aliquid
              porro iusto? Nobis, obcaecati neque commodi numquam maiores nam
              asperiores quia ipsum consequuntur. Ipsa ex architecto eaque
              autem. Officiis veniam consequuntur maxime quod ipsam numquam non
              voluptas, dolore porro animi unde facere a est ipsum voluptates
              assumenda quia! Cum, velit perspiciatis. Architecto
              exercitationem, dolor sunt officiis esse earum ut ratione
              excepturi placeat pariatur aperiam repellat temporibus ab.
              Perferendis perspiciatis tempora quos inventore mollitia placeat
              ut, ab nesciunt tenetur pariatur, provident animi voluptate quae
              optio odio iste eaque quisquam omnis officia repudiandae, ad
              minima at facere voluptatem. Laborum corrupti alias odit beatae
              molestias? Libero error amet, consectetur dolor maiores eos
              molestias eligendi possimus tempora reprehenderit. Eaque sunt
              voluptatem doloremque provident ducimus qui veniam assumenda, et
              praesentium similique. Accusamus, accusantium laborum ex magni
              dolor aliquid consequuntur veniam aperiam quisquam, rerum,
              repudiandae impedit amet dolorum. Culpa delectus provident nobis
              officia quia harum amet modi officiis autem obcaecati, quibusdam
              explicabo corporis iste deleniti accusantium. Officia quia dolorum
              aperiam inventore sunt reiciendis corrupti sapiente quod earum
              illum eaque voluptatibus quis debitis a, voluptatum velit ea unde
              facilis aut ut provident. Sequi, rem tempora error soluta odio
              repellat expedita delectus, voluptatem molestiae ullam provident
              earum perspiciatis placeat aliquam vero veritatis doloremque qui.
              Est numquam suscipit alias laborum maiores pariatur ut repellat
              earum delectus. Iure officiis, at aspernatur ratione corporis
              deleniti aut deserunt tenetur ex odio, tempora eum dolorem! Nulla
              voluptatum ad rerum facilis rem ea laudantium magni, incidunt
              assumenda voluptatibus fuga? Perspiciatis beatae ab repellendus
              similique totam maiores ex eos quo dignissimos, eum, sed nemo
              dolorum vel nobis sunt voluptatum omnis optio laborum sint dolore
              ea dolor neque veritatis. Ipsa vel nulla autem dolorum repellendus
              libero, eum modi earum minima repellat in explicabo ex optio,
              dolores quibusdam id nobis cumque? Provident rerum ea repellat
              totam fugit odit, numquam nisi nostrum iusto, eos quia magni
              corporis esse. Excepturi aperiam accusantium quae distinctio
              exercitationem ut sit deserunt repellat corrupti, animi, magni
              mollitia nihil doloribus iusto qui tempora alias aliquid
              repellendus, iste corporis vero tempore. Officiis dicta quo
              repellendus incidunt dolorem quis, nulla at non facilis voluptatem
              eveniet, tempore totam nisi voluptatibus sit! Ut ullam iure beatae
              assumenda quos officiis amet blanditiis rerum sapiente officia
              aperiam inventore reiciendis molestiae odit dicta sequi
              perspiciatis quia, corrupti provident adipisci facere quod
              dolores. Autem magnam ullam reiciendis doloremque unde nisi iure
              aliquam. Quasi quos voluptatibus illum quaerat, eius sequi
              officiis repudiandae pariatur non odio assumenda temporibus autem
              porro! Dolore atque nihil maiores nulla consequatur autem omnis
              porro tenetur, vero aspernatur recusandae reprehenderit ipsa
              nobis, harum, veniam asperiores placeat debitis excepturi neque
              nisi quibusdam. Blanditiis, ipsa. Doloribus recusandae earum
              consectetur quas corrupti. Debitis corporis eos, aut assumenda
              accusantium sequi libero commodi natus nam placeat praesentium
              vero cupiditate. Et eveniet facilis inventore rerum? Commodi,
              odio! Animi iure at pariatur, atque nulla dicta nostrum
              reprehenderit eveniet officia nemo adipisci eum ullam tempora?
              Inventore quo assumenda adipisci minima cum sint. Dicta, neque
              eveniet consequatur vel illum modi beatae atque numquam
              consectetur sunt sint ad, exercitationem enim impedit
              perspiciatis? Facere ipsa expedita debitis, veritatis consectetur
              eaque exercitationem cupiditate facilis doloribus quos velit
              delectus illo inventore ea fugit repellat sit repudiandae vero,
              repellendus molestiae laudantium nulla sunt! Assumenda maxime
              animi rem praesentium cum sed, amet, corrupti accusantium nulla,
              voluptatem reiciendis nihil iusto similique modi ipsum tempora
              distinctio quisquam ad? Facere quisquam nihil explicabo suscipit
              fugit recusandae vitae aut, eum totam maxime consectetur iste,
              labore aliquam voluptate beatae minus veritatis accusantium atque.
              A iusto ut fuga laudantium expedita sapiente. Molestiae hic magnam
              velit recusandae nemo quas, nostrum accusantium ab et dicta
              fugiat? Inventore fugiat soluta consectetur quas nobis repudiandae
              quam!
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="community">
          <h2 className="title">xodimlar</h2>
          <div className="cards">
            <div className="card">
              <div className="content">
                <p>PRESIDENT OF THE BRITISH ACADEMY</p>
                <h2>Professor Julia Black PBA</h2>
                <span>Tarix fanlari doktori, professor</span>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <p>PRESIDENT OF THE BRITISH ACADEMY</p>
                <h2>Professor Julia Black PBA</h2>
                <span>Tarix fanlari doktori, professor</span>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <p>PRESIDENT OF THE BRITISH ACADEMY</p>
                <h2>Professor Julia Black PBA</h2>
                <span>Tarix fanlari doktori, professor</span>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <p>PRESIDENT OF THE BRITISH ACADEMY</p>
                <h2>Professor Julia Black PBA</h2>
                <span>Tarix fanlari doktori, professor</span>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <p>PRESIDENT OF THE BRITISH ACADEMY</p>
                <h2>Professor Julia Black PBA</h2>
                <span>Tarix fanlari doktori, professor</span>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <p>PRESIDENT OF THE BRITISH ACADEMY</p>
                <h2>Professor Julia Black PBA</h2>
                <span>Tarix fanlari doktori, professor</span>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <p>PRESIDENT OF THE BRITISH ACADEMY</p>
                <h2>Professor Julia Black PBA</h2>
                <span>Tarix fanlari doktori, professor</span>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <p>PRESIDENT OF THE BRITISH ACADEMY</p>
                <h2>Professor Julia Black PBA</h2>
                <span>Tarix fanlari doktori, professor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="img-cards" style={{ marginTop: "70px" }}>
          <h2>gallery</h2>
          <div className="cards">
            <div className="card">
              <img src="./assets/about-header.jpg" alt="about" />
            </div>
            <div className="card">
              <img src="./assets/about-header.jpg" alt="about" />
            </div>
            <div className="card">
              <img src="./assets/about-header.jpg" alt="about" />
            </div>
            <div className="card">
              <img src="./assets/about-header.jpg" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
