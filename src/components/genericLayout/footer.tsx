import React from "react";

const footer = () => {
  return (
    <section className="bg-[linear-gradient(180deg,#010208_16.39%,#010206_20.51%,#040008_24.79%,#010101_30.46%,#010101_34.11%,#010101_36.21%,#010101_100%)] py-10">
      <div className="grid justify-items-center ">
        <p className="text-[#FFFFFF]">Create with UX Specialists Who Care</p>
        <p className="text-white">Get in Touch.</p>
        <p className="text-white">So that we can talk more about...</p>

        <div className="grid grid-flow-col gap-2">
            <button className="bg-[#FFFFFF] px-5 rounded-2xl py-3">Schedule a call</button>
            <button className="bg-[#121514] text-white  px-5 border border-[#FFFFFF] rounded-2xl py-3" >Drop a message</button>
        </div>
        <hr/>
      </div>
    </section>
  );
};

export default footer;
