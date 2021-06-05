import TipList from '../../components/TipList';
import { getAllTips } from '../../data/tips';

const TipsPage = ({ tips }) => {
  return (
    <div>
      <TipList tips={tips} />
    </div>
  );
};

export default TipsPage;

export const getStaticProps = () => {
  return {
    props: {
      tips: getAllTips(),
    },
  };
};
