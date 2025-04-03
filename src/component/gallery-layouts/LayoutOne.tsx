const LayoutOne = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="space-y-4">
        <img
          src="/assets/gallery/ntdv/img-one.png"
          alt="gallery-img"
          className="w-[100%] object-cover h-[339px] rounded-2xl"
        />
        <img
          src="/assets/gallery/ntdv/img-two.png"
          alt="gallery-img"
          className="w-[100%] object-cover h-[339px] rounded-2xl"
        />
      </div>
      <div className="space-y-4">
        <img
          src="/assets/gallery/ntdv/img-three.png"
          alt="gallery-img"
          className="w-[100%] object-cover h-[218px] rounded-2xl"
        />
        <img
          src="/assets/gallery/ntdv/img-four.png"
          alt="gallery-img"
          className="w-[100%] object-cover h-[218px] rounded-2xl"
        />
        <img
          src="/assets/gallery/ntdv/img-five.png"
          alt="gallery-img"
          className="w-[100%] object-cover h-[218px] rounded-2xl"
        />
      </div>
      <div className="space-y-4">
        <img
          src="/assets/gallery/ntdv/img-six.png"
          alt="gallery-img"
          className="w-[100%] object-cover h-[339px] rounded-2xl"
        />
        <img
          src="/assets/gallery/ntdv/img-seven.png"
          alt="gallery-img"
          className="w-[100%] object-cover h-[339px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default LayoutOne;
