import AnimatedText from "@/components.js/AnimatedText";
import Head from "next/head";
import React from "react";
import Layout from "@/components.js/Layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components.js/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Mousewheel, Autoplay, Pagination, Navigation } from "swiper";
import TransitionEffect from "@/components.js/TransitionEffect";



const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-10/12 flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl mx-auto dark:bg-dark dark:border-light dark:dark:text-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light"></div>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-110 transition-all duration-500"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light dark:dark:text-light">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"></div>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto hover:scale-110 transition-all duration-500" 
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg p-2 px-6 text-lg font-semibold hover:underline"
          >
            Visit Project
          </Link>
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex items-center justify-center flex-col w-full mb-16">
        <Layout>
          <AnimatedText text="Imagine Trumps Knowledge!" className="mb-16" />

          {/* Project layouts */}
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            {/* Featured post */}
            <div className="col-span-12">
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
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Mousewheel, Pagination, Autoplay, Navigation]}
                className="mySwiper !w-full !flex items-center justify-center !py-12"
              >
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
            </div>

            {/* Other posts */}
            <div className="col-span-4">
              <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            <div className="col-span-4">
              <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            <div className="col-span-4">
              <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default projects;
