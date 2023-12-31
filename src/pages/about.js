import AnimatedText from "@/components.js/AnimatedText";
import Layout from "@/components.js/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
// import profilePic from "../../public/images/profile/developer-pic-2.jpg";
// import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components.js/Skills";
import Experience from "@/components.js/Experience";
// import Education from "@/components.js/Education";
import TransitionEffect from "@/components.js/TransitionEffect";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const motionvalue = useMotionValue(0);

  const springValue = useSpring(motionvalue, { duration: 3000 });

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionvalue.set(value);
    }
  }, [isInView, value, motionvalue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name="description" content="my description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          {/* Heading */}
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="my-10 !text-6xl lg:!text-7xl md:!text-6xl sm:!text-5xl"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            {/* Myself */}
            <div className="col-span-6 flex flex-col items-start justify-start text-dark/75 dark:text-light/75 xl:col-span-8 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>

              <p className="font-medium">
                In today's digital age, visual storytelling has become a
                powerful tool to captivate audiences and leave a lasting
                impression. As a skilled video editor with a passion for
                transforming ordinary footage into extraordinary narratives, I
                wanted to offer you my expertise in enhancing your content and
                bringing your vision to life.
              </p>
              <p className="my-4 font-medium">
                Hi there! My name is Dhruv Lakhera, also known as "DIAGO". I'm a
                professional video editor/content editor and motion designer. I
                have been editing from past more than 4 years and did many
                client works throughout my journey from editing gaming
                montages/highlights to vlog editing and making motion graphics
                commercial ads for companies having turn over of $100k. I was
                born in Dehradun and currently i'm living in Dehradun a state
                capital of Uttarakhand in INDIA.
              </p>
              <p className="font-medium">
                Having so much of experience i have a content editing agency
                where we have hired top best editors around the world and now
                we're on a mission to help and grow youtube channel and
                businesses all the way from beginners to big/famous youtubers.
                Our videos will provide you the best results as we also know
                content marketing of video while editing it as the engagement of
                the video increases by a very good percentage. I hope that this
                message finds you well and we expect from you and your business
                to grow more. Contact us right now to get started....
              </p>
            </div>

            {/* Middle part Image*/}
            {/* <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8 dark:border-light dark:bg-dark">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"></div>
              <Image
                src={profilePic}
                alt="Diago"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div> */}

            {/* Client Data */}
            <div className="col-span-2 flex flex-col items-center justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:tex-lg sm:text-base xs:text-sm">
                  satisfied Client
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:tex-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:tex-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <Skills />

          {/* Experience component */}
          <Experience />

          {/* Education */}
          {/* <Education /> */}
        </Layout>
      </main>
    </div>
  );
};

export default About;
