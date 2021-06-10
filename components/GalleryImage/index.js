import Image from 'next/image';
import Link from 'next/link';

const GalleryImage = ({ title, id, numberOfImages }) => {
  const imgArr = new Array(numberOfImages);

  for (let i = 1; i < numberOfImages + 1; i++) {
    imgArr.fill(i, i);
  }

  let srcLinks = [];

  for (let i = 1; i < numberOfImages + 1; i++) {
    srcLinks = [
      ...srcLinks,
      {
        href: `/images/vylety/[id]/[i]`,
        as: `/images/vylety/${id}/${i}`,
        src: `/images/vylety/${id}/${i}.jpg`,
      },
    ];
  }

  return (
    <>
      {srcLinks.map((link) => (
        <Link href={link.href} as={link.as} key={link.src}>
          <a>
            <Image src={link.src} width={500} height={320} alt={title} />
          </a>
        </Link>
      ))}
    </>
  );
};

export default GalleryImage;
