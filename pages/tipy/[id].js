import Image from 'next/image';
import { getAllTips } from '../../data/tips';

const tips = getAllTips();

const Tip = ({ tip }) => {
  // src={`/images/${trip.id}.jpg`}

  // <Image
  //   src={'https://source.unsplash.com/collection/8761243/1640x900'}
  //   width={1640}
  //   height={900}
  //   alt={trip.title}
  // />;
  return (
    <>
      <img
        src={'https://source.unsplash.com/collection/8761243/1000x700'}
        alt={tip.title}
      />
      <h1>{tip.title}</h1>
      <p>{tip.phrase}</p>
    </>
  );
};

export const getStaticPaths = () => {
  const tipPaths = tips.map((tip) => {
    return {
      params: {
        id: tip.id,
      },
    };
  });

  return {
    paths: tipPaths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  return {
    props: {
      tip: tips.find((tip) => tip.id === params.id),
    },
  };
};
export default Tip;
