import Image from 'next/image';

export const heading1 = (
  <>
    <h1 className='font-heading mb-6'>Откройте для себя наш шикарный отель</h1>
    <p className='text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg'>
        Почувствуйте уникальность отеля, наполненного богатой историей и непреходящим очарованием.
    </p>
    <button className='btn-primary'>Смотреть</button>
  </>
);

export const section2 = (
  <div className='md:grid hidden gap-4 grid-cols-1'>
    <div className='rounded-2xl overflow-hidden h-48'>
      <Image
        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/509520779.jpg?k=07492070f5b6837f45932b5917110b99374b4c8250c4cc13db6edfc46c6e2be9&o=&hp=1"
        alt='hero-1'
        width={300}
        height={300}
        className='img scale-animation'
      />
    </div>

    <div className='grid grid-cols-2 gap-4 h-48'>
      <div className='rounded-2xl overflow-hidden'>
        <Image
          src='/images/hero-2.jpeg'
          alt='hero-2'
          width={300}
          height={300}
          className='img scale-animation'
        />
      </div>
      <div className='rounded-2xl overflow-hidden'>
        <Image
          src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/533727394.jpg?k=37557b4530891be29dd34ad87bb8da474466f36718a35102d18fc20ab84e8b10&o=&hp=1'
          alt='hero-3'
          width={300}
          height={300}
          className='img scale-animation'
        />
      </div>
    </div>
  </div>
);
