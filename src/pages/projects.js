import AnimatedText from "@/components.js/AnimatedText";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "@/components.js/Layout";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { GithubIcon } from "@/components.js/Icons";
import project1 from "../../public/images/projects/Paypal.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {BsYoutube} from "react-icons/bs"
import { Mousewheel, Autoplay, Pagination, Navigation } from "swiper";
import TransitionEffect from "@/components.js/TransitionEffect";
import VideoPlayer from "@/components.js/VideoPlayer";

// Work Tab
import { clientWorks } from "../data/ProjectPage";

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
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

 
        <button
            className="flex items-center justify-center w-full gap-3 px-7 py-4 border border-dark dark:border-light btn-pink font-bold"
            onClick={() => setVideoPlayer(true)}
          >
            <BsYoutube className="text-2xl"/>Watch
          </button>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  const [videoPlayer, setVideoPlayer] = useState(null);
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light dark:dark:text-light xs:p-4 min-h-[400px]"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"></div>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          width={800}
          height={600}
          className="w-full h-auto hover:scale-110 transition-all duration-500"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>

        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}

      
          <button
            className="flex items-center justify-center w-full gap-3 px-7 py-4 border border-dark dark:border-light btn-pink font-bold"
            onClick={() => setVideoPlayer(true)}
          >
            <BsYoutube className="text-2xl"/>Watch
          </button>

      </div>
      {videoPlayer && (
        <VideoPlayer link={link} setVideoPlayer={setVideoPlayer} />
      )}
    </article>
  );
};

// Main
const projects = () => {
  const [cardsData, setCardsData] = useState([]);
  const [activeMenu, setActiveMenu] = useState("All");

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setCardsData(clientWorks);
  }, []);

  const setMyCards = (value) => {
    setActiveMenu(value);
    if (value === "All") {
      setCardsData(clientWorks);
    } else {
      const result = clientWorks.filter((element) => element.tag === value);
      setCardsData(result);
    }
  };

  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex items-center justify-center flex-col w-full mb-16">
        <Layout>
          <AnimatedText
            text="Imagine Trumps Knowledge!"
            className="mb-16 !text-6xl lg:!text-7xl md:!text-6xl sm:!text-5xl"
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
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Mousewheel, Pagination, Autoplay, Navigation]}
              className="mySwiper !w-full !flex items-center justify-center !py-12 !px-10 !col-span-12 md:!px-3"
            >
              <SwiperSlide>
                <FeaturedProjects
                  title="PAYPAL MOTION DESIGN INTRO"
                  img={project1}
                  summary="Experience the seamless convenience of PayPal with our captivating motion design video. Delight in the fluid animations, vibrant colors, and dynamic visuals that illustrate how PayPal simplifies your online transactions, making it easier than ever to pay, shop, and send money securely."
                  link="/"
                  type="Featured Project"
                />
              </SwiperSlide>

              <SwiperSlide>
                <FeaturedProjects
                  title="Crypto Screener Application"
                  img={project1}
                  summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                  link="/"
                  github="/"
                  type="Featured Project"
                />
              </SwiperSlide>
            </Swiper>
            {/* Menu Section */}
            <div className="col-span-12 mx-auto w-max bg-dark text-light p-1 rounded-lg font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] flex flex-row gap-5 md:flex-col justify-center items-center dark:bg-white dark:text-dark dark:font-bold mt-40 mb-14 md:mb-0 md:mt-20">
              {["All", "Motion Designer", "Youtube Video"].map(
                (element, index) => (
                  <div
                    className={`text-[16px] col-span-4 rounded-lg transition-all duration-200 cursor-pointer hover:bg-light hover:text-dark px-7 py-2 dark:hover:text-light dark:hover:bg-dark ${
                      activeMenu === element
                        ? "bg-white text-dark dark:text-light dark:bg-dark"
                        : ""
                    }`}
                    key={index}
                    onClick={() => setMyCards(element)}
                  >
                    {element}
                  </div>
                )
              )}
            </div>
            {/* Other posts */}

            <AnimatePresence initial={false} mode="wait">
              {cardsData.map((data, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{
                    delay: 0.5,
                    type: shouldReduceMotion ? "tween" : "spring",
                  }}
                  layout
                  className="col-span-4 md:col-span-12 xl:col-span-6 md:mt-10 mb-10 place-content-center place-items-center"
                >
                  <Project
                    title={data.title}
                    img={data.img}
                    link={data.link}
                    github={data.github}
                    type={data.type}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default projects;
