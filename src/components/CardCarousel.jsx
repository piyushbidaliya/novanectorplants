import React from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const cards = [
    {
      description: `“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”`,
      client: '– Ronald Richards',
    },
    {
      title: 'Card 2',
      description: 'Info which directs to the other page.',
    },
    {
      title: 'Card 3',
      description: 'Info which directs to the other page.',
    },
    {
      title: 'Card 4',
      description: 'Info which directs to the other page.',
    },
    {
      title: 'Card 5',
      description: 'Info which directs to the other page.',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="mt-4 w-full flex flex-col items-center">
      <div className="w-full max-w-[1280px] relative">
        <div className="w-full">
          <div className="relative">
            <p className=" text-center px-6 font-[Gilroy] text-normal text-[22px] leading-[120%]">{currentCard.description}</p>
            <p className=" text-center px-6 font-[Gilroy] text-medium text-[14px] sm:text-[16px] leading-[100%]">{currentCard.client}</p>
            {/* Prev Button */}
            <button
              className="absolute top-1/2 -translate-y-1/2 left-0"
              onClick={handlePrev}
            >
              <TfiAngleLeft size={30} />
            </button>
            {/* Next Button */}
            <button
              className="absolute top-1/2 -translate-y-1/2 right-0"
              onClick={handleNext}
            >
              <TfiAngleRight size={30}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
