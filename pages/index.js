import TipList from '../components/TipList';
import TripList from '../components/TripList';
import { getAllTips } from '../data/tips';
import { getAllTrips } from '../data/trips';

const Home = ({ tips, trips }) => {
  return (
    <>
      <main>
        <div className="container">
          <div className="center">
            <h2>
              Láká Vás ostrov Réunion? Nejste si jistí, zda je to pro Vás ?
            </h2>
            <h2>
              Mrkněte na naši{' '}
              <a href="/galerie" className="link_to_page">
                Galerii
              </a>{' '}
              a uvidíte sami:{' '}
            </h2>
            <div className="Homepage_section">
              {/* <Gallery photos={photos} /> */}
              <a href="/galerie">
                <h2>šipka doprava na konci řádku</h2>
              </a>
            </div>

            <h2>
              Zajímá Vás, co čekat na ostrově? Mrkněte do našich{' '}
              <a href="/tipy" className="link_to_page">
                Tipů
              </a>
              :
            </h2>
            <div className="Homepage_section">
              <TipList tips={tips} count={3} />
              <a href="/tipy">
                <h2>šipka doprava na konci řádku</h2>
              </a>
            </div>
            <h2>
              Jste rozhodnuti, že poletíte? Pojďme spolu naplánovat výlety !
            </h2>
            <h2>
              Na naše Výlety se můžete buď proklikat přes{' '}
              <a href="/mapa" className="link_to_page">
                Mapu
              </a>
              :
            </h2>
            <h2>
              anebo si vyfiltrujte{' '}
              <a href="/vylety" className="link_to_page">
                Výlety
              </a>{' '}
              přesně podle toho, <br></br> jestli Vás víc zajímá horolezení nebo
              koupání:
            </h2>
            <div className="Homepage_section">
              <TripList trips={trips} count={3} />
              <a href="/vylety">šipka doprava na konci řádku</a>
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
