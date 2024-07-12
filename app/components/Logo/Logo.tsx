import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src={'/images/logo.png'}
      width={250}
      height={100}
      alt="productivity"
    />
  );
};
