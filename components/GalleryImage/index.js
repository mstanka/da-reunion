import Image from 'next/image';
import Link from 'next/link';

const GalleryImage = ({ title, id, numberOfImages }) => {
  const imgArr = new Array(numberOfImages);

  for (let i = 1; i < numberOfImages + 1; i++) {
    imgArr.fill(i, i);
  }
// imgArr.forEach((img) =>

  return (
    <>
      <Link href={'/images/vylety/[id]/[1]'} as={`/images/vylety/${id}/${1}`}>
        <a>
          <Image
            src={`/images/vylety/${id}/${1}.jpg`}
            width={500}
            height={320}
            alt={title}
          />
        </a>
      </Link>
    </>
  );
};

export default GalleryImage;
