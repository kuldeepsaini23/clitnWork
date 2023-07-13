import React, { useState } from "react";
import AnimatedText from "./AnimatedText";

const Article = ({ title, desc }) => {


  return (
    <details
      className="relative w-[70vw] p-4 py-6 my-4 rounded-xl flex items-start justify-start bg-light text-dark first:mt-0 border border-solid border-dark border-r-8 border-b-8 flex-wrap dark:bg-dark dark:text-light dark:border-light"
    >
      <summary className="font-semibold text-xl capitalize hover:underline cursor-pointer md:text-base sm:text-xs">
        {title}
      </summary>
      <p className="text-primary font-medium text-left mt-5 dark:text-primaryDark md:text-base sm:text-xs">{desc}</p>
    </details>
  );
};

const FAQSection = () => {
  return (
    <div>
      <AnimatedText
        text="Frequently Ask Questions"
        className="my-10 !text-6xl xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl"
      />
      <ul className="flex justify-center items-center flex-col flex-wrap">
        <Article
          title="Where/How can I find a good video editor for my YouTube Channel?"
          desc="I understand that finding the one and perfect video editor for you and your channel can be a bit difficult task but I have a solution. As the owner of a content editing agency, I've been editing and designing content for 4+ years, and we hire the best video editors for our work, and the results are awesome. I'm working on a mission to help YouTubers grow by offering the best services."
        />
        <Article
          title="How can a video editor enhance the overall quality of my YouTube videos?"
          desc="Our professional video editing services include seamless transitions, error removal, cohesive flow, vibrant color grading, audio enhancement, immersive sound effects, creative effects, captivating pacing, branding integration, compelling storytelling, time-saving outsourcing, allowing you to focus on content creation and engagement."
        />
        <Article
          title="What are some advanced editing techniques that can make my videos more engaging and professional?"
          desc="Our strategic use of jump cuts creates a dynamic feel, while B-roll adds depth and context. Motion graphics engage viewers, and split screens showcase multiple angles. Layering sound effects and music enhances the audio, while color grading elevates the visuals. Creative transitions maintain viewer interest, resulting in captivating and immersive videos."
        />
        {/* <Article
          title="How much it cost for a basic advertisment"
          desc="Bascially it depends on the demand of client what he wants and what are needs of the prject. But if it is an basic edit without much it can cost between 100 to 200$."
        />
        <Article
          title="How much it cost for a basic advertisment"
          desc="Bascially it depends on the demand of client what he wants and what are needs of the prject. But if it is an basic edit without much it can cost between 100 to 200$."
        /> */}
      </ul>
    </div>
  );
};

export default FAQSection;
