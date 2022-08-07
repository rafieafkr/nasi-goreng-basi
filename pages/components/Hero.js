import React from "react";

const Hero = () => {
  return (
    <div className="hero pt-16">
      <div
        className="bg-amber-50 mb-5 bg-fixed"
        style={{ ["background-image"]: 'url("/img/Nasi Goreng 3.png")' }}
      >
        <div className="backdrop-blur-sm backdrop-brightness-75 px-7 py-5 pt-6 pb-11 text-white">
          <h1 className="text-3xl font-bold mb-2">Nasi Goreng Basi</h1>
          <p>
            Nasi goreng basi merupakan langkah inovasi kreatif dari seorang
            murid SMKN 1 Bekasi dalam bidang kuliner
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
