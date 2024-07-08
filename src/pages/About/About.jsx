import { useTranslation } from "react-i18next";
import styles from "./about.module.css";

export const About = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1>{t("about")}</h1>
      </header>
      <div className={styles.desc}>
        <h2>
          ‘‘{t("footer_title_b")}
          {t("footer_title_p")}‘‘
        </h2>
      </div>
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>{t("we_do")}</h2>
          </div>
          <div className="row2">
            <h3 className="about_title">
              Mobilising the humanities and social sciences
            </h3>
            <p className="about_p">
              From artificial intelligence to climate change, from building
              prosperity to improving well-being – today’s complex challenges
              can only be resolved by deepening our insight into people,
              cultures and societies. We invest in researchers and projects
              across the UK and overseas, engage the public with fresh thinking
              and debates, and bring together scholars, government, business and
              civil society to influence policy for the benefit of everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>Institut direktorlari:</h2>
          </div>
          <div className="row2">
            <ul>
              <li>Zarif Radjabov (1943–1945)</li>
              <li>Аbdusamat Boboxojayev (1959–1964)</li>
              <li>Аxad Muhammadjonov (1996–1998)</li>
              <li>Mirsodiq Is{"'"}hoqov (1998–2000)</li>
              <li>Ravshan Аbdullayev (2011–2019)</li>
              <li>Azamat Ziyo (2019-yildan hozirga qadar)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="community">
          <h2 className="title">{t("community")}</h2>
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
                <img src="./../src/assets/user.jpg" alt="user" />
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
                <img src="./../src/assets/user.jpg" alt="user" />
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
                <img src="./../src/assets/user.jpg" alt="user" />
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
                <img src="./../src/assets/user.jpg" alt="user" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>{t("contact")}</h2>
          </div>
          <div className="row2">
            <ol>
              <li>
                <b>{t("addres")}</b>
                <p>
                  100060, Toshkent shahri, Mirobod tumani, Shahrisabz tor ko
                  {"'"}chasi, 5-uy
                </p>
              </li>
              <li>
                <b>{t("phone")}</b>
                <p>+99871 233-54-70, +99871 233-62-01</p>
              </li>
              <li>
                <b>{t("fax")}</b>
                <p>+99871 233-39-91</p>
              </li>
              <li>
                <b>{t("email")}</b>
                <p>info@fati.uz</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>{t("history_title")}</h2>
          </div>
          <div className="row2">
            <p className="his_desc">
              {`Tarix instituti 1943-yili (1970-yilgacha - O'zSSR FA Tarix va
            arxeologiya instituti) SSSR Fanlar akademiyasi O'zbekiston filiali
            Til, Adabiyot va Tarix instituti nomi bilan tashkil etilgan.
            Institut olimlari Vatanimiz tarixining yoritilmagan sahifalari,
            o'zbek xalqi etnogenezi va etnik tarixi, O'zbekistonning boy
            moddiy hamda ma'naviy madaniyati tarixini o'rganish bilan
            shug'ullangan. Institut tashkil etilgandan buyon Rossiya va
            Markaziy Osiyo respublikalarining yirik ilmiy markazlari bilan
            o'zaro hamkorlikda ilmiy-metodik anjumanlar, davra suhbatlari,
            seminarlar hamda simpoziumlar faoliyati "Tarix fanining dolzarb
            muammolari" mavzusidagi maqolalar to'plamlari tarzida chop
            etilgan. Tarix institutining ilmiy va tashkiliy faoliyatida tub
            o'zgarishlar O'zbekiston mustaqillikka erishganidan so'ng sodir
            bo'ldi. Sovet davrida tarix fani sof g'oyaviy va siyosiy
            xususiyatga ega bo'lib, kommunistik mafkurani targ'ib qilish uchun
            xizmat qildi. Mustaqillikning dastlabki yillaridan boshlab
            institut xodimlari sovet davri tarixining soxtalashtirilgan yoki
            unutilgan sahifalarini o'rganishga jiddiy e'tibor berdilar.
            O'zbekiston tarixidagi ko'plab muammolar yangi nuqtai nazardan
            xolisona baholandi. O'zbekiston Respublikasi Vazirlar
            Mahkamasining 1998-yil 27-iyuldagi "O'zbekiston Respublikasi
            Fanlar akademiyasi Tarix instituti faoliyatini takomillashtirish
            to'g'risida"gi Qarori tarixiy vazifalarni strategik o'zgartirish
            uchun asos bo'ldi. 1998-yildan boshlab institutda Yahyo G'ulomov
            nomidagi "O'zbek xalqi va davlatchiligi tarixi" mavzusida ilmiy
            konferensiya o'tkazib kelinmoqda. Mustaqillik yillarida institut
            tomonidan "O'zbekiston tarixi" maxsus tarixiy ilmiy jurnal, davriy
            nashrlar, "O'zbekiston tarixining yangi sahifalari" tadqiqot
            risolalari va O'zbekiston tarixining turli davrlariga
            bag'ishlangan bir qator yirik monografiyalar nashr etildi.
            Mustaqillik yillarida institut mamlakatimizda tarixiy
            tadqiqotlarni muvofiqlashtirish va malakali ilmiy kadrlar
            maktabini shakllantirish markaziga aylandi. Umuman olganda,
            hozirgi kunda institutning eng muhim tadqiqot yo'nalishlari
            quyidagilardan iborat: – Qadimgi davrlardan to hozirgi kungacha
            O'zbekistonning ijtimoiy-siyosiy va iqtisodiy tarixi sohasida
            fundamental hamda amaliy tadqiqotlar olib borish, tadqiqot
            usullari va uslublari sohasida yangi bilimlarga ega bo'lish; –
            O'zbek davlatchiligining rivojlanish bosqichlari va uning
            insoniyat sivilizatsiyasidagi rolini o'rganish; – O'zbek xalqining
            intellektual, madaniy va ma'naviy merosining rivojlanish
            bosqichlari, shaxs, shu jumladan islom sivilizatsiyasidagi tutgan
            o'rnini o'rganish; – O'zbek xalqining kelib chiqishi tarixi,
            madaniy antropologiya, O'zbekistonda yashovchi turli millat va
            elatlarning etnologiyasini o'rganish; – Mustaqillik davri tarixini
            o'rganish; – Tarixshunoslik va manbashunoslik tadqiqot uslublarini
            ishlab chiqish. Zamonaviy O'zbekiston tarixi metodologiyasining
            asosiy mezonlari tarixiylik, haqqoniylik, ilmiy ob'yektivlik,
            milliy va umuminsoniy qadriyatlardan iborat. So'nggi yillarda
            institut olimlari tomonidan o'tmishni to'liq va xolis tavsiflash
            uchun ilgari noma'lum yoki taqiqlangan ko'plab manbalar ilmiy
            muomalaga kiritildi. O'zbek xalqi va davlatchiligi tarixini
            o'rganishda mahalliy hamda xorijiy tarixshunoslik tadqiqotlariga
            alohida e'tibor berilmoqda. Shuningdek, Markaziy Osiyo tarixini
            o'rganish uchun Yevropa, AQSh, Osiyo va MDHning yirik ilmiy
            tadqiqot muassasalari bilan o'zaro hamkorlik yildan-yilga
            rivojlanib bormoqda. So'nggi yillarda institutda etnologiya,
            qadimiy va o'rta asrlar tarixi, moddiy madaniyat tarixi,
            shuningdek, O'zbekistonning mustamlakachilik davri tarixi bo'yicha
            ko'plab ilmiy asarlar yaratildi. Jadidchilik, O'zbekistonda Sovet
            hokimiyatiga qarshi kurash tarixi va Sho'ro hukumatining
            qatag'onchilik siyosati, O'zbekistonning ijtimoiy-iqtisodiy va
            siyosiy tarixi, o'zbek xalqining madaniyat sohasidagi yutuqlari
            yangicha ilmiy qarashlar asosida tadqiq etilmoqda. Mustaqillikdan
            so'ng O'zbekistonning zamonaviy tarixini o'rganish bo'yicha
            birinchi amaliy ishlar bajarildi. Umuman olganda, institutda
            2011-2021-yillar ichida 80 dan ortiq monografiyalar nashr etildi.
            Institut har yili quyidagi mutaxassisliklar bo'yicha doktorantura
            va tayanch doktoranturaga yosh mutaxassislarni qabul qiladi:
            07.00.01 – O'zbekiston tarixi; 07.00.07 – Etnografiya, etnologiya
            va antropologiya; 07.00.08 – Tarixshunoslik va tarixiy tadqiqot
            usullari. Hozirgi kunda institutda 2021-yil holatiga ko'ra 10
            nafar doktorant tahsil olmoqda.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
