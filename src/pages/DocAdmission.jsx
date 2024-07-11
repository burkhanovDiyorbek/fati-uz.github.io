import PageTop from "../components/PageTop/PageTop";

export const DocAdmission = () => {
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
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>Tayanch doktoranturaga:</h2>
          </div>
          <div className="row2">
            <ol>
              <li>
                magistr akademik darajasiga (mutaxassislik dasturlari bo‘yicha)
                ega bo‘lganlar;
              </li>
              <li>
                falsafa doktori (PhD) ilmiy darajasini olish uchun dissertasiya
                tadqiqoti asosini tashkil qilishi mumkin bo‘lgan ilmiy
                natijalar, shu jumladan, ilmiy jurnallarda chop etilgan kamida
                bitta maqola hamda tegishli yo‘nalishlar bo‘yicha ikkitadan kam
                bo‘lmagan ilmiy to‘plamlarga kiritilgan ma&apos;ruza tezislariga
                ega bo‘lganlar qabul qilinadi.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>Stajyor-tadqiqotchilik va tayanch doktorantura</h2>
          </div>
          <div className="row2">
            <ol>
              <h3 style={{ marginBottom: "15px", fontStyle: "italic" }}>
                o‘qishga talabgorlar 15-sentyabrdan - 15-oktyabrga qadar
                Innovatsion rivojlanish vazirligining
                http://phd.mininnovation.uz yagona tizimi orqali tegishli
                hujjatlarni taqdim etadilar
              </h3>
              <li>ariza;</li>
              <li>qisqacha biografik ma&apos;lumotnoma;</li>
              <li>magistr diplomi nusxasi;</li>
              <li>
                nashr etilgan ilmiy ishlar ro‘yxati va ularning nusxalari.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>Doktoranturaga:</h2>
          </div>
          <div className="row2">
            <ol>
              <li>
                fan nomzodi yoki falsafa doktori (PhD) yoki ularga
                tenglashtirilgan xorijiy davlatlarda olingan ilmiy darajaga ega
                bo‘lganlar;
              </li>
              <li>
                fan nomzodi yoki falsafa doktori (PhD) ilmiy darajasi yoki
                ularga tenglashtirilgan boshqa ilmiy darajalar olgandan so‘ng
                muhim ilmiy yutuqlarga erishish, shu jumladan, fan doktori (DSc)
                ilmiy darajasini olish uchun dissertasiya tadqiqoti asosini
                tashkil qilishi mumkin bo‘lgan ilmiy jurnallarda chop etilgan
                kamida uchta ilmiy maqola hamda ilmiy-amaliy konferensiyalar,
                seminarlar va tegishli ilmiy yo‘nalishlar bo‘yicha ilmiy
                to‘plamlarda kamida ikkita tezisga ega bo‘lganlar qabul
                qilinadi.
              </li>
              <h3 style={{ fontStyle: "italic" }}>
                <p style={{ display: "inline-block", width: "40px" }}></p>{" "}
                Doktoranturada o‘qishga talabgorlar 15-sentyabrdan -
                15-oktyabrga qadar Innovatsion rivojlanish vazirligining
                http://phd.mininnovation.uz yagona tizimi orqali tegishli
                hujjatlarni taqdim etadilar:
              </h3>
              <ol className="nth-ol">
                <li>ariza;</li>
                <li> qisqacha biografik ma&apos;lumotnoma;</li>
                <li>
                  oliy ma&apos;lumot, fan nomzodi yoxud falsafa doktori (PhD)
                  yoki xorijiy davlatlarda unga tenglashtirilgan ilmiy darajaga
                  ega bo‘lganligi to‘g‘risidagi diplom nusxasi;
                </li>
                <li>
                  tadqiqot mavzusi bo‘yicha ilmiy ma&apos;ruza va fan doktori
                  (DSc) ilmiy darajasini olish uchun tayyorlangan doktorlik
                  dissertasiyasi rejasining mufassal loyihasi;
                </li>
              </ol>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
