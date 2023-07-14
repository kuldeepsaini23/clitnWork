import React from "react";
import AnimatedText from "./AnimatedText";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import test1 from "../../public/images/Testimonials/Test1.jpg"
import test2 from "../../public/images/Testimonials/Test2.png"
import test3 from "../../public/images/Testimonials/Test3.jpeg"


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import ReactStars from "react-rating-stars-component";
import Image from "next/image";

const Data = [
  {
    img: test1,
    name: "ItsJustTie",
    profession: "Youtuber",
    description:
      "I'm ngl your editing has doubled my views and allowed be to focus more on the content to create something I'm truly be becoming proud of",
    value: 4,
  },
  {
    img:test2,
    name: "Mutants Gym",
    profession: "Youtber",
    description:
      "The Mutants gym intro blew me away! Its dynamic motion design perfectly captures the raw energy and strength of the gym. It's an electrifying start that fuels my motivation every time!",
    value: 5,
  },
  {
    img: test3,
    name: "Kuldeep Saini",
    profession: "Web Developer",
    description:
      "I am very happy to share, I am genuienly impress from the work of Diago. He also delivered my project on time.",
    value: 4,
  },
  
];

const Testimonials = () => {
  return (
    <>
      <AnimatedText text="Testimonials" className="my-16 xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-4xl sm:my-2 sm:mt-14 lg:my-10" />

      <Swiper
        direction={"horizontal"}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[ Pagination, Autoplay, Navigation]}
        className="mySwiper !w-[80vw] !flex items-center justify-center !py-12 !mx-auto lg:!py-6"
      >
        {Data.map((item, index) => {
          return (
            <SwiperSlide className="lg:w-5/12 min-w-[200px]" key={index}>
              <div className="flex flex-col gap-y-5 items-center justify-center border-solid border-[2px] border-dark dark:border-light w-[80%] mx-auto rounded-3xl my-4 py-4 md:w-full md:py-0">
                <Image
                  className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px] md:w-[120px] sm:w-[80px] h-[150px] md:h-[120px] sm:h-[80px]"
                  src={item.img}
                  alt="avatar"
                />

                <div className="w-[60%] px-3 lg:w-9/12 flex flex-wrap justify-center items-center flex-col">
                  <h5 className="mb-2 text-lg font-bold md:text-base sm:text-xs">{item.name}</h5>
                  <p className="mb-4 font-medium text-dark dark:text-light md:text-base sm:text-xs">{item.profession}</p>
                  <p className="mb-6 text-dark dark:text-light md:text-base sm:text-xs">{item.description}</p>
                  <ReactStars
                    count={5}
                    size={30}
                    value={item.value}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    edit={false}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Testimonials;
