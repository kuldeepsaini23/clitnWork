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
          title="How much it cost for a basic advertisment"
          desc="Bascially it depends on the demand of client what he wants and what are needs of the prject. But if it is an basic edit without much it can cost between 100 to 200$."
        />
        <Article
          title="How much it cost for a basic advertisment"
          desc="Bascially it depends on the demand of client what he wants and what are needs of the prject. But if it is an basic edit without much it can cost between 100 to 200$."
        />
        <Article
          title="How much it cost for a basic advertisment"
          desc="Bascially it depends on the demand of client what he wants and what are needs of the prject. But if it is an basic edit without much it can cost between 100 to 200$."
        />
        <Article
          title="How much it cost for a basic advertisment"
          desc="Bascially it depends on the demand of client what he wants and what are needs of the prject. But if it is an basic edit without much it can cost between 100 to 200$."
        />
        <Article
          title="How much it cost for a basic advertisment"
          desc="Bascially it depends on the demand of client what he wants and what are needs of the prject. But if it is an basic edit without much it can cost between 100 to 200$."
        />
      </ul>
    </div>
  );
};

export default FAQSection;
