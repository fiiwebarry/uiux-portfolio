import {
  IoArrowForwardOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { SIYNC_SCHEMA } from "../../../utils/constants";
` `;
const Webflow = () => {
  return (
    <section className=" md:max-w-7xl mx-auto md:py-20 py-10">
      <div className="grid md:justify-items-center md:items-center mx-auto  ">
        <p className="text-[#1F1F1F] text-center p-3 md:text-6xl md:w-11/12">
          The goal was to design a low-power survival messaging system that
          enables reliable communication without internet or stable
          infrastructure.
        </p>
      </div>
      <div className="grid grid-flow-col mt-10 1 justify-between">
        <div className="border-[#D1D5DB] border py-3 px-5  rounded-3xl">
          About the Project
        </div>
        <div className="border-[#D1D5DB] grid justify-center mx-auto border rounded-full  w-10 h-10">
          <p className="mt-2">01</p>
        </div>
      </div>
      <div className="">
        <div className="bg-[#F7F7F7] mt-6 rounded-3xl md:p-10">
          <div className="grid md:grid-cols-2 ">
            <div className="border grid text-[#DC2626] md:mx-0 mx-auto justify-items-center bg-[#FEF2F2] border-[#DC2626] rounded-3xl py-3 w-32">
              Problems
            </div>
            <div className="border md:grid hidden text-[#24D64E] justify-items-center bg-[#d5f6dc] border-[#24D64E] rounded-3xl py-3 w-32">
              Solutions
            </div>
          </div>
          {SIYNC_SCHEMA.map(() => {
            return (
              <div className="md:mt-9 grid md:grid-flow-col w-max md:gap-16 items-center">
                <div className="grid grid-flow-col  border-[#E5E7EB]  border-b pb-8 items-center w-max md:gap-3">
                  <div className="bg-[#FEF2F2] rounded-full w-10 h-10">
                    <IoCloseCircleOutline className="mx-auto mt-2.5 md:text-xl  text-[#DC2626] " />
                  </div>
                  <div className="w-9/12">
                    <p>No Internet or Central Infrastructure</p>
                    <p>
                      Survivors cannot rely on servers, satellites, or global
                      networks.
                    </p>
                  </div>
                </div>
                <div className="-mt-10">
                  <IoArrowForwardOutline className="md:block hidden" />
                </div>
                <div className="md:grid hidden  grid-flow-col border-[#E5E7EB]  border-b pb-8  md:gap-5 w-max">
                  <div className="bg-[#F0FDF2]  rounded-full w-10 h-10">
                    <IoCheckmarkCircleOutline className="mx-auto mt-2.5 md:text-xl text-[#24D64E] " />
                  </div>
                  <div className="">
                    <p>Mesh-Based Peer-to-Peer Network</p>
                    <p>
                      Enable direct device-to-device communication without
                      central servers.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Webflow;
