import React from "react";


const Marketing = () => {
  return (
    <>
      <section className="banner flex items-center py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <div>
                <h2 className="f-PowerGrotesk text-[60px] text-[#232323] leading-[60px]">
                Fill in your details
                </h2>
                <p className="text-[20px] text-[#232323] leading-[30px] max-w-[600px] mt-8 font-light">
                  AI isn’t next, it’s now. Harness it with Jasper to transform your
                  creative capability, better connect with your customers, and secure
                  your competitive advantage.
                </p>
              </div>
              <div className="flex items-center space-x-3 mt-8">
                <button className="text-[18px] text-[#EEE8E2] px-4 py-2 border-[1px] border-[#ffffff] rounded-[8px] bg-[#232323]">
                  Start Free Trial
                </button>
                <button className="text-[18px] text-[#EEE8E2] px-4 py-2 border-[1px] border-[#ffffff] rounded-[8px] bg-[#232323]">
                  Get A Demo
                </button>
              </div>
            </div>
            <div className="col-span-6">
              <div>
                <iframe width="650" height="400" src="https://www.youtube.com/embed/mRSsVCQj2Ow?si=9d9uchCG5uSoCaMT"
                  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Marketing;
