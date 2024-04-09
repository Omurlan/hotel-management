import Image from 'next/image';

const Gallery = () => {
  return (
    <div className='mx-auto container py-14 h-full'>
      <div className='flex flex-wrap md:-m-2'>
        <div className='flex w-1/2 flex-wrap'>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/499692962.jpg?k=0458086f0f35ff16ea3aca965f6fc28ea556626910b7669867e959994c64be73&o=&hp=1'
              width={200}
              height={200}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/536487544.jpg?k=eca2cf637e995dc282a349b03d8b7318a326955bb47071c023835ce8640af956&o=&hp=1'
              width={200}
              height={200}
            />
          </div>
          <div className='w-full p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              quality={100}
              src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/460767399.jpg?k=f91469d23381a01a140b65677abee2cf251d2dd56d46b52c6f5cada3ebdd43f3&o=&hp=1'
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className='flex w-1/2 flex-wrap'>
          <div className='w-full p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/460766705.jpg?k=c7c30c5cebb32d79cfc1c277392223861baaba3188436b11d6c9906230f9328b&o=&hp=1'
              width={200}
              height={200}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='/images/hero-2.jpeg'
              width={200}
              height={200}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='/images/hero-3.jpeg'
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
