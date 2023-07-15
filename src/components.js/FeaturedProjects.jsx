import AnimatedText from "@/components.js/AnimatedText";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import project1 from "../../public/images/projects/Paypal.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsYoutube } from "react-icons/bs";
import { Mousewheel, Autoplay, Pagination, Navigation } from "swiper";

import knowledge from "/public/images/projects/Knowledge.png";

const FeaturedProject = ({ type, title, summary, img, link }) => {
  return (
    <>
      <article className="w-10/12 flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl mx-auto dark:bg-dark dark:border-light dark:dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"></div>
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <Image
            src={img}
            alt={title}
            className="w-full h-auto hover:scale-110 transition-all duration-500"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
              {title}
            </h2>
          </Link>

          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>

          <Link
            className="flex items-center justify-center w-full gap-3 px-7 py-4 border border-dark dark:border-light btn-pink font-bold"
            href={link}
            target={"_blank"}
          >
            <BsYoutube className="text-2xl" />
            Watch
          </Link>
        </div>
      </article>
    </>
  );
};

const FeaturedProjects = () => {
  return (
    <>
      <AnimatedText
        text="Featured Projects"
        className="!text-6xl lg:!text-7xl md:!text-6xl sm:!text-5xl"
      />

      {/* Project layouts */}
      <div className="md:w-[80vw] grid grid-cols-12 gap-x-24 xl:gap-x-16 lg:gap-x-8 sm:gap-x-0">
        {/* Featured post */}
        <Swiper
          direction={"horizontal"}
          loop={true}
          slidesPerView={1}
          grabCursor={true}
          spaceBetween={30}
          navigation={true}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          modules={[Mousewheel, Pagination, Navigation]}
          className="mySwiper !w-full !flex items-center justify-center !py-12 !px-10 !col-span-12 md:!px-3"
        >
          <SwiperSlide>
            <FeaturedProject
              title="PAYPAL MOTION DESIGN INTRO"
              img={project1}
              summary="Experience the seamless convenience of PayPal with our captivating motion design video. Delight in the fluid animations, vibrant colors, and dynamic visuals that illustrate how PayPal simplifies your online transactions, making it easier than ever to pay, shop, and send money securely."
              link="https://www.youtube.com/embed/yisevMxtl30"
              type="Featured Project"
            />
          </SwiperSlide>

          <SwiperSlide>
            <FeaturedProject
              title="Sample Youtube Video for Knowledge Channels"
              img={knowledge}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              link="https://www.youtube.com/embed/rFBK_FYzzvk"
              type="Featured Project"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default FeaturedProjects;
