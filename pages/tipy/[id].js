import Image from 'next/image';
import Link from 'next/link';
import { getAllTips } from '../../data/tips';

const tips = getAllTips();

const Tip = ({ tip }) => {
  return (
<<<<<<< HEAD
    <>
      <div className="content_tips">
        <a href="/tipy">
          <button className="btn_back btn_back_tips">
            <p>Zpět na Obecné tipy</p>{' '}
          </button>
        </a>
        <h1>{tip.title}</h1>
        <p>{tip.description}</p>
        <Image src={tip.image} width={1920} height={1280} />
      </div>
    </>
=======
    <div className="content_tips">
      <a href="/tipy">
        <button className="btn_back btn_back_tips">
          <p>Zpět na Obecné tipy</p>{' '}
        </button>
      </a>
      <h1>{tip.title}</h1>
      <p>{tip.description}</p>
      <Image src={tip.image} width={1920} height={1280} />
    </div>
>>>>>>> 072e4cf043dfc7f44cdc9c12722e07484bda140f
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
