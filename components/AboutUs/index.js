import styles from '../AboutUs/AboutUs.module.css';
import ImageMarketa from 'next/image';
import ImageKata from 'next/image';

const AboutUs = () => {
  return (
    <>
      <section className={styles.page_content}>
        <h1> O nás </h1>
        <section className={styles.about_us}>
          <p>
            Jsme holky, co ostrov prolezly skrz naskrz, nasbíraly poznatky každá
            svou cestou a během pobytů nasbíraly tipy od místních. Toto vše jsme
            jsme Vám sepsaly do našich stránek tak, aby se Vám informace co
            nejrychleji a nejkomfortněji hledaly.
          </p>
          <div className={styles.img_us}>
            <ImageMarketa
              src={'/images/marketa.jpg'}
              width={350}
              height={250}
              alt="Markéta"
            />
          </div>
          <div className={styles.text_us}>
            <h2> Markéta </h2>
            <p>
              Turistika patří mezi moje oblíbené činnosti a pokud je kolem
              krásná příroda, tak jako na ostrově Réunion, užívám si ji tím víc.
              Na ostrově jsem strávila 14 dnů dovolené a prošla část vnitrozemí
              v oblasti kráterů Mafate, Salazie a Cilaos. Během svých cest ráda
              fotím a i touto obrazovou cestou vám ráda předám svoje zážitky a
              zkušenosti.
            </p>
          </div>
        </section>
        <section className={styles.about_us}>
          <div className={styles.text_us}>
            <h2> Káťa </h2>
            <p>
              Na ostrově jsem strávila 6 měsíců jako au-pair. Žila jsem v napůl
              české a napůl reunionské rodině, spřátelila jsem se místními
              studenty a od všech jsem sondovala tipy na výlety, které Vám ráda
              předám. Já osobně jsem spíše plážový a koupací typ, tipy na hory
              dostanete zase od Markét. :) Ostrov má spoustu specifik, na které
              je třeba dávat si pozor, jako např. nevyzpytatelnost počasí a
              dopravy, ale také nejkrásnější západy slunce, panoramata hor a
              modře čisté laguny a moře. Budu se těšit, že z našich zážitků
              získáte cenné info a na místě Vám pomůže!
            </p>
          </div>
          <div className={styles.img_us}>
            <ImageKata
              src={'/images/kata.jpg'}
              width={350}
              height={250}
              alt="Káťa"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
