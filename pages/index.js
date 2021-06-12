import Link from 'next/link';
import TipList from '../components/TipList';
import TripList from '../components/TripList';
import { getAllTips } from '../data/tips';
import { getAllTrips } from '../data/trips';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';
import GalleryImage from '../components/GalleryImage';

const Home = ({ tips, trips }) => {
  return (
    <>
      <main>
        <div className="container">
          <div className="center">
            {/*section - intro gallery*/}
            <section className="section_content">
              <h2>
                Láká Vás ostrov Réunion? <br></br> Nebo si zatím nejste jisti,
                zda je to pro Vás ?
              </h2>
              <h2>
                Otevřete si naši{' '}
                <Link href="/galerie">
                  <a>
                    <span className="link_to_page">Galerii</span>
                  </a>
                </Link>{' '}
                a uvidíte sami:{' '}
              </h2>
              <div className="container_gallery">
                <GalleryImage
                  title={undefined}
                  id={trips[3].id}
                  numberOfImages={3}
                />
              </div>
              <Link href="/galerie">
                <a className="know_more">
                  <span>další fotky </span>
                  <ArrowRightIcon />
                </a>
              </Link>
            </section>
            {/*section - tips*/}
            <section className="section_content">
              <h2>
                Zajímá Vás, co čekat na ostrově? Mrkněte do našich{' '}
                <Link href="/tipy">
                  <span className="link_to_page">Tipů</span>
                </Link>
                :
              </h2>
              <TipList tips={tips} count={3} />
              <Link href="/tipy">
                <a className="know_more">
                  <span>další tipy</span>
                  <ArrowRightIcon />
                </a>
              </Link>
            </section>
            {/*section - map*/}
            <section className="section_content">
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
            {/*section - trips*/}
            <section className="section_content">
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
              <TripList trips={trips} count={3} />
              <Link href="/vylety">
                <a className="know_more">
                  <span>další výlety</span>
                  <ArrowRightIcon />
                </a>
              </Link>
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
