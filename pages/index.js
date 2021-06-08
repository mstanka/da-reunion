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
            <h1> Láká Vás ostrov Réunion? </h1>
            <h2>
              Letenky a ubytování si ještě zvládnete zařídit sami, ale co na
              místě?
            </h2>
            <p>
              Času bude málo, letenky přecejen něco stály, ubytování taky,
              nechcete přece jít jen tak naslepo a doufat, že se výlet povede.
              Anebo naopak jít podle tištěného průvodce na ty nejturističtější
              místa, kde bude vždycky plno lidí a kde Vás to zaručeně otráví
              hned na začátku.
            </p>
            <h3>
              Na našich stránkách pojímáme cestování na ostrově
              <i> Réunion trochu jinak</i>.
            </h3>
            <p>
              Inspirujte se tipy na výlety od nás, co jsme ostrov už prolezly
              skrz naskrz <br></br>anebo tipy od místních, které jsme pro Vás
              během našich pobytů získaly.
            </p>
          </div>
        </div>
        <TipList tips={tips} count={3} />
        <h2 className="center">Inspiruj se našimi výlety...</h2>
        <TripList trips={trips} count={3} />
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
