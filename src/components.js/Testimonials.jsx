import React from "react";
import AnimatedText from "./AnimatedText";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import ReactStars from "react-rating-stars-component";

const Data = [
  {
    img: "https://i.ibb.co/PDYyJtR/test1.jpg",
    name: "ItsJustTie",
    profession: "Youtuber",
    description:
      "I'm ngl your editing has doubled my views and allowed be to focus more on the content to create something I'm truly be becoming proud of",
    value: 4,
  },
  {
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg",
    name: "Mutants Gym",
    profession: "Youtber",
    description:
      "The Mutants gym intro blew me away! Its dynamic motion design perfectly captures the raw energy and strength of the gym. It's an electrifying start that fuels my motivation every time!",
    value: 5,
  },
  {
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg",
    name: "Kuldeep Saini",
    profession: "Web Developer",
    description:
      "In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Namsed cursus lectus. Proin non rutrum magna. Proin gravida,justo et imperdiet tristique turpis nisi viverra.",
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
          delay: 1000000,
          disableOnInteraction: false,
        }}
        modules={[ Pagination, Autoplay, Navigation]}
        className="mySwiper !w-[80vw] !flex items-center justify-center !py-12 !mx-auto lg:!py-6"
      >
        {Data.map((item, index) => {
          return (
            <SwiperSlide className="lg:w-5/12 min-w-[200px]" key={index}>
              <div className="flex flex-col gap-y-5 items-center justify-center border-solid border-[2px] border-dark dark:border-light w-[80%] mx-auto rounded-3xl my-4 py-4 md:w-full md:py-0">
                <img
                  className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px] md:w-[120px] sm:w-[80px]"
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
