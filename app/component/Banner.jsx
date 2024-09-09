import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="container mx-auto max-w-[900px] flex items-start justify-center pt-12">
        <div>
          <p className="bg-[#7D22FF47] cursor-pointer text-[#452671] border-[1px] border-[#45267117] text-[18px] leading-[22px] rounded-full px-6 py-3 max-w-[370px] mx-auto">Lorem ipsum dolor sit amet consectetur.</p>
          <h1 className="f-PowerGrotesk text-[#232323] text-[80px] leading-[90px] py-6 text-center font-medium">The world’s destination <br /> for design</h1>
          <p className="f-PPNeueBit text-[#232323] text-[20px] leading-[24px] text-center font-normal pt-2">Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
          <div className="mt-12 flex justify-center">
            <button className="text-[18px] bg-[#232323] text-[#EEE8E2] px-6 py-3 rounded-[10px]">Try Free</button>
          </div>
          <div className="border-b-[3px] border-[#232323] pt-14"></div>
          <div className="border-b-[2px] border-[#232323] py-5 max-w-[650px] mx-auto"></div>
          <div className="border-b-[1px] border-[#232323] py-5 max-w-[450px] mx-auto"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
