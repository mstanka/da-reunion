import Image from 'next/image';
import Link from 'next/link';
import { getAllTips } from '../../data/tips';

const tips = getAllTips();

const Tip = ({ tip }) => {
  return (
    <div className="content_tips">
      <div className="btns_wrapper">
        <Link href="/tipy">
          <a className="btn_back">
            <span>Zpět na Obecné tipy</span>{' '}
          </a>
        </Link>
      </div>
      <div className="short_info_tips description ">
        <h1>{tip.title}</h1>
        <p>{tip.description}</p>
        <Image src={tip.image} width={1920} height={1280} />
      </div>
    </div>
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
