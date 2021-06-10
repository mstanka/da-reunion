import Image from 'next/image';
import Link from 'next/link';

const GalleryImage = ({ title, id, numberOfImages }) => {
  const imgArr = new Array(numberOfImages);

  for (let i = 1; i < numberOfImages + 1; i++) {
    imgArr.fill(i, i);
  }

  return (
    <div>
      {imgArr.forEach((img) => {
        // console.log(`/images/vylety/${id}/${img}.jpg`);
        return (
          <Link
            href={'/images/vylety/[id]/[img]'}
            as={`/images/vylety/${id}/${img}`}
          >
            <a>
              <Image
                src={`/images/vylety/${id}/${img}.jpg`}
                width={600}
                height={400}
                alt={title}
              />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default GalleryImage;
