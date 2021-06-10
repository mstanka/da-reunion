import styles from './AboutUs.module.css';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <>
      <section className={styles.page_content}>
        <section className={styles.intro}>
          <p className={styles.introtext}>
            Jsme holky, co ostrov prolezly skrz naskrz, nasbíraly poznatky každá
            svou cestou a během pobytů nasbíraly tipy od místních. Toto vše jsme
            jsme Vám sepsaly do našich stránek tak, aby se Vám informace co
            nejrychleji a nejkomfortněji hledaly.
          </p>
        </section>
        <div className={styles.wrapper}>
          <section className={styles.about_us}>
            <div className={styles.img_us}>
              <Image
                src={'/images/marketa.jpg'}
                width={1200}
                height={800}
                alt="Markéta"
              />
            </div>
            <div className={styles.text_us}>
              <h2> Markéta </h2>
              <p>
                Turistika patří mezi moje oblíbené činnosti a pokud je kolem
                krásná příroda, tak jako na ostrově Réunion, užívám si ji tím
                víc.{' '}
              </p>
              <p>
                Na ostrově jsem strávila 14 dnů dovolené a prošla část
                vnitrozemí v oblasti kráterů Mafate, Salazie a Cilaos. Během
                svých cest ráda fotím a i touto obrazovou cestou vám ráda předám
                svoje zážitky a zkušenosti.
              </p>
            </div>
          </section>

          <section className={styles.about_us}>
            <div className={styles.text_us}>
              <h2> Káťa </h2>
              <p>
                Na ostrově jsem strávila 6 měsíců jako au-pair. Žila jsem v
                napůl české a napůl reunionské rodině, spřátelila jsem se
                místními studenty a od všech jsem sondovala tipy na výlety,
                které Vám ráda předám. Já osobně jsem spíše plážový a koupací
                typ, tipy na hory dostanete zase od Markét. :){' '}
              </p>
              <p>
                Ostrov má spoustu specifik, na které je třeba dávat si pozor,
                jako např. nevyzpytatelnost počasí a dopravy, ale také
                nejkrásnější západy slunce, panoramata hor a modře čisté laguny
                a moře. Budu se těšit, že z našich zážitků získáte cenné info a
                na místě Vám pomůže!
              </p>
            </div>
            <div className={styles.img_us}>
              <Image
                src={'/images/kata.jpg'}
                width={600}
                height={400}
                alt="Káťa"
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
