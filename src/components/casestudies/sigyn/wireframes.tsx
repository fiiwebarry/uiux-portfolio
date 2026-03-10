import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SIGYN_SCHEMA } from "../../../utils/constants";
import icon from "/src/assets/Body.png";
import "/src/components/slider.css";
import "/src/components/slide.css";

const Wireframes = () => {
  return (
    <section className="bg-[#FBEECD]   ">
      <div className=" md:max-w-7xl mx-auto md:py-10">
        <div className="grid grid-flow-col mt-10 justify-between">
          <div className="border-[#D1D5DB] border py-3 px-5 text-[#6B7280] rounded-3xl">
            Wireframes
          </div>
          <div className="border-[#D1D5DB] grid justify-center mx-auto  border rounded-full  w-10 h-10">
            <p className="mt-2 text-[#6B7280]">05</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 mt-4 items-center md:gap-64">
          <div className="">
            <p className="text-[#1A1A1A] md:text-6xl md:w-9/12">
              App Structure and Layout
            </p>
          </div>
          <div>
            <p className="">
              The app structure and layout of Sigyn are designed for simplicity
              and efficiency, ensuring users can navigate effortlessly even
              under stressful conditions. The main interface is organized into
              clear sections: Messaging, Contacts, Alerts, and Settings.
            </p>
          </div>
        </div>

        <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            // clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="unique"
        >
          {SIGYN_SCHEMA.map((r, i) => {
            return (
              <SwiperSlide key={i}>
                <div className=" mt-20">
                  <img src={r.image} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="justify-center mt-10">
          <p className="text-center text-[#1F1F1F] text-6xl">
            The focus was on resilient communication over convenience. Every
            decision centered on enabling critical information to move reliably
            between survivors, even with unstable signals and minimal
            electricity.
          </p>
        </div>
      </div>
      <span className=" grid justify-center mx-auto">
        <img src={icon} alt="body" />
      </span>
    </section>
  );
};

export default Wireframes;
