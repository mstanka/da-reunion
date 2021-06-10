import Link from 'next/link';
import TipList from '../components/TipList';
import TripList from '../components/TripList';
import { getAllTips } from '../data/tips';
import { getAllTrips } from '../data/trips';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';

const Home = ({ tips, trips }) => {
  return (
    <>
      <main>
        <div className="container container_homepage">
          <div className="center">
            <h2>
              Láká Vás ostrov Réunion? <br></br> Nebo si zatím nejste jisti, zda
              je to pro Vás ?
            </h2>
            <h2>
              Mrkněte na naši{' '}
              <Link href="/galerie">
                <span className="link_to_page">Galerii</span>
              </Link>{' '}
              a uvidíte sami:{' '}
            </h2>
            <div className="Homepage_section">
              {/* <Gallery photos={photos} /> */}
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

            <h2>
              Zajímá Vás, co čekat na ostrově? Mrkněte do našich{' '}
              <Link href="/tipy">
                <span className="link_to_page">Tipů</span>
              </Link>
              :
            </h2>
            <div className="Homepage_section">
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
            <h2>
              anebo si vyfiltrujte{' '}
              <Link href="/vylety">
                <span className="link_to_page">Výlety</span>
              </Link>{' '}
            </h2>
            <h3>
              přesně podle toho, <br></br> jestli Vás víc zajímá horolezení nebo
              koupání:
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
