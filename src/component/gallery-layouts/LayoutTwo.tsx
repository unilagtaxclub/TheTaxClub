import { FC } from "react";

interface LayoutProps {
  images: string[];
  onImageClick: (images: string[], index: number) => void;
}

const LayoutTwo: FC<LayoutProps> = ({ images, onImageClick }) => {
  return (
    <>
      {/* Desktop */}
      <div className="lg:grid hidden grid-cols-3 gap-6">
        <div className="space-y-4">
          <img
            src={images[0]}
            onClick={() => onImageClick(images, 0)}
            className="cursor-pointer w-full object-cover h-[339px] rounded-2xl"
            alt="gallery-img"
          />
          <img
            src={images[1]}
            onClick={() => onImageClick(images, 1)}
            className="cursor-pointer w-full object-cover h-[339px] rounded-2xl"
            alt="gallery-img"
          />
        </div>

        <div className="space-y-4">
          <img
            src={images[2]}
            onClick={() => onImageClick(images, 2)}
            className="cursor-pointer w-full object-cover h-[339px] rounded-2xl"
            alt="gallery-img"
          />
          <img
            src={images[3]}
            onClick={() => onImageClick(images, 3)}
            className="cursor-pointer w-full object-cover h-[339px] rounded-2xl"
            alt="gallery-img"
          />
        </div>

        <div className="space-y-4">
          <img
            src={images[4]}
            onClick={() => onImageClick(images, 4)}
            className="cursor-pointer w-full object-cover h-[218px] rounded-2xl"
            alt="gallery-img"
          />
          <img
            src={images[5]}
            onClick={() => onImageClick(images, 5)}
            className="cursor-pointer w-full object-cover h-[218px] rounded-2xl"
            alt="gallery-img"
          />
          <img
            src={images[6]}
            onClick={() => onImageClick(images, 6)}
            className="cursor-pointer w-full object-cover h-[218px] rounded-2xl"
            alt="gallery-img"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="grid lg:hidden gap-6 grid-cols-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => onImageClick(images, i)}
            className="cursor-pointer w-full object-cover h-[304px] rounded-2xl mt-6 first:mt-0"
            alt="gallery-img"
          />
        ))}
      </div>
    </>
  );
};

export default LayoutTwo;
