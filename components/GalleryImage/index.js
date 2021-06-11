import Image from 'next/image';
import Link from 'next/link';
import { SRLWrapper } from 'simple-react-lightbox';
import styles from './GalleryImage.module.css';

const GalleryImage = ({ title, id, numberOfImages }) => {
  const srcLinks = [];

  for (let i = 1; i <= numberOfImages; i++) {
    srcLinks.push({
      href: `/images/vylety/[id]/[i]`,
      as: `/images/vylety/${id}/${i}`,
      src: `/images/vylety/${id}/${i}.jpg`,
    });
  }

  return (
    <SRLWrapper>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.wrapper}>
        {srcLinks.map((link) => (
          <Link href={link.href} as={link.as} key={link.src}>
            <a>
              <Image src={link.src} width={300} height={200} alt={title} />
            </a>
          </Link>
        ))}
      </div>
    </SRLWrapper>
  );
};

export default GalleryImage;
