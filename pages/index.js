import Link from 'next/link';
import TipList from '../components/TipList';
import TripList from '../components/TripList';
import { getAllTips } from '../data/tips';
import { getAllTrips } from '../data/trips';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';
import Gallery from 'react-photo-gallery';
import { photos } from '../data/photos';

const Home = ({ tips, trips }) => {
  return (
    <>
      <main>
        <div className="container container_homepage">
          <div className="center">
            <section>
              <h2>
                Láká Vás ostrov Réunion? <br></br> Nebo si zatím nejste jisti,
                zda je to pro Vás ?
              </h2>
              <h2>
                Otevřete si naši{' '}
                <Link href="/galerie">
                  <span className="link_to_page">Galerii</span>
                </Link>{' '}
                a uvidíte sami:{' '}
              </h2>

              <div className="Homepage_section">
                <Gallery photos={photos.slice(0, 3)} />
                <Link href="/galerie">
                  <div className="know_more">
                    <p>další fotky </p>
                    <span className="arrow_know_more">
                      {' '}
                      <ArrowRightIcon />
                    </span>
                  </div>
                </Link>
              </div>
            </section>

            <section>
              <h2>
                Zajímá Vás, co čekat na ostrově? Mrkněte do našich{' '}
                <Link href="/tipy">
                  <span className="link_to_page">Tipů</span>
                </Link>
                :
              </h2>
              <div className="section__tips">
                <TipList tips={tips} count={3} />
                <Link href="/tipy">
                  <div className="know_more">
                    <p>další tipy</p>
                    <span className="arrow_know_more">
                      {' '}
                      <ArrowRightIcon />
                    </span>
                  </div>
                </Link>
              </div>
            </section>

            <section>
              <h2>
                Jste rozhodnuti, že poletíte? Pojďme spolu naplánovat výlety !
              </h2>
              <h2>
                Můžete se na ně proklikat buď přes{' '}
                <Link href="/mapa">
                  <span className="link_to_page">Mapu </span>
                </Link>
                :
              </h2>
              <Link href="/mapa">
                <img
                  src="/images/map_homepage.jpg"
                  alt="statická mapa"
                  className="map_homepage"
                />
              </Link>
            </section>
            <section>
              <h2>
                anebo si vyfiltrujte{' '}
                <Link href="/vylety">
                  <span className="link_to_page">Výlety</span>
                </Link>{' '}
              </h2>
              <h3>
                třeba podle toho, <br></br> jestli Vás víc zajímají horské túry
                nebo koupání:
              </h3>

              <div className="Homepage_section">
                <TripList trips={trips} count={3} />
                <Link href="/vylety">
                  <div className="know_more">
                    <p>další výlety</p>
                    <span className="arrow_know_more">
                      {' '}
                      <ArrowRightIcon />
                    </span>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps = () => {
  return {
    props: {
      tips: getAllTips(),
      trips: getAllTrips(),
    },
  };
};
