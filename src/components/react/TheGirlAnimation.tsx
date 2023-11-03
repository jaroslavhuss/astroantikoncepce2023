import { useState, useEffect } from 'react';
import Holka_BLOND_HAIR from '../../assets/images/antikoncepce-com-holka3.png';
import Holka_RED_HAIR from '../../assets/images/red-hair.png';
import Holka_DARK_HAIR from '../../assets/images/dark-hair.png';

const TheGirlAnimation = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [Holka_BLOND_HAIR, Holka_RED_HAIR, Holka_DARK_HAIR];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prevActiveImage) => (prevActiveImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full relative z-80 overflow-hidden h-96 md:h-screen lg:h-screen xl:h-screen bg-gradient-to-b from-transparent via-transparent to-white mx-auto items-center flex justify-center align-middle">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt="Antikoncepce.com - kompletní průvodce nouzovou antikoncepcí"
          className={`max-w-full mx-auto w-max transition-opacity duration-1000 ease-in-out absolute top-0 left-0 overflow-hidden ${
            index === activeImage ? 'opacity-100 z-20' : 'opacity-10 z-10'
          } 
          ${image === Holka_DARK_HAIR && '-rotate-12 -ml-28'}
          ${image === Holka_RED_HAIR && 'rotate-12 ml-28'}
          ${activeImage === 1 && 'rotate-0 ml-0'}
          ${activeImage === 2 && 'rotate-0 ml-0'}
          `}
        />
      ))}
      {activeImage === 0 && (
        <h3 className="text-gradient z-20 absolute bottom-0 mx-auto w-full text-center text-7xl transition-all duration-700 ease-in md:mb-52 lg:mb-52 xl:mb-52">
          Protože se nechci bát
        </h3>
      )}
      {activeImage === 1 && (
        <h3 className="text-gradient z-20 absolute bottom-0 mx-auto w-full text-center text-7xl transition-all duration-700 ease-in md:mb-52 lg:mb-52 xl:mb-52">
          Protože chci mít jistotu
        </h3>
      )}
      {activeImage === 2 && (
        <h3 className="text-gradient z-20 absolute bottom-0 mx-auto w-full text-center text-7xl transition-all duration-700 ease-in md:mb-52 lg:mb-52 xl:mb-52">
          Protože nevěřím mýtům
        </h3>
      )}
    </div>
  );
};

export default TheGirlAnimation;
