import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between dark:text-light md:w-[80%]">
      <LiIcon reference={ref}/>
      <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
        {/* <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            {company}
          </a>
        </h3> */}
        <spn className="text-xl font-semibold capitalize text-dark/75 dark:text-light/75 xs:text-base">
          {time} 
          {/* | {address} */}
        </spn>
        <p className="font-semibold w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset:["start end", "center start"]
  });

  return (
    <div className="my-64 lg:my-56 md:my-32 sm:my-16 xs:my-10">
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      {/*  */}
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
        <motion.div
          className="absolute left-9 top-[2px] w-[4px] h-full bg-dark origin-top dark:bg-primaryDark md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position=""
            company=""
            companyLink=""
            time="2019"
            address=""
            work="I embarked on my video editing journey in 2019, fueled by the excitement of starting my own YouTube channel. It was a humble beginning, experimenting with editing on Android and trying my hand at creating gaming video montages, inspired by the popular PUBG Mobile trend."
          />

          <Details
            position=""
            company=""
            companyLink=""
            time="2020"
            address=""
            work="As the year unfolded, I realized my passion for video editing and gradually transitioned from Android to PC editing. By the end of 2020, I had fully embraced PC editing and began crafting more intricate montages. It was during this time that I discovered a thriving gaming editing community, connecting with editors of all skill levels."
          />

          <Details
            position=""
            company=""
            companyLink=""
            time="2021"
            address=""
            work="In 2021, still a relative beginner, I persisted in honing my editing skills. Despite my initial doubts about my worth, I persevered and continued creating edits. My efforts paid off when I caught the attention of prominent editors within the community. Their recognition bolstered my confidence and inspired me to push my boundaries even further."
          />

          <Details
            position=""
            company=""
            companyLink=""
            time="2022"
            address=""
            work="The year 2022 marked a turning point in my journey as I ascended to become one of the most esteemed video editors. With my newfound recognition, I expanded my repertoire beyond gaming montages. I delved into editing montages for esports athletes and ventured into vlog editing, eager to broaden my skill set. Simultaneously, I began exploring the realm of motion graphics, learning and incorporating it into my creations."
          />
          <Details
            position=""
            company=""
            companyLink=""
            time="2023"
            address=""
            work="Motivated by my own growth and accomplishments, I decided to share my expertise and assist others in scaling up their YouTube channels and businesses. In 2023, I embarked on a path of helping and nurturing fellow YouTubers and businesses, utilizing my knowledge and experience to aid them in their growth journeys."
          />

          {/* <Details
            position=""
            company=""
            companyLink=""
            time=""
            address=""
            work=""
          />

          <Details
            position=""
            company=""
            companyLink=""
            time=""
            address=""
            work=""
          />

          <Details
            position=""
            company=""
            companyLink=""
            time=""
            address=""
            work=""
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
