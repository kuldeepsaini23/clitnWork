import AnimatedText from "@/components.js/AnimatedText";
import Layout from "@/components.js/Layout";
import Head from "next/head";
import ContactMe from "@/components.js/ConatctMe";
import { motion } from "framer-motion";
import TransitionEffect from "@/components.js/TransitionEffect";


const quote = {
  initial:{
    opacity:1,
  },
  animate:{
    opacity:1,
    transition:{
      delay:0.5,
      staggerChildren:0.08,
    }
  }
}


const singleWord = {
  initial:{
    opacity:0,
    y:50,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:1,
    }
  }
}


const contact = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name="description" content="my description" />
      </Head>
      <TransitionEffect/>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16 flex justify-center items-center flex-col">
          <AnimatedText text="Contact Me" className="mb-16 lg:!text-7xl md:!text-5xl sm:!text-4xl md:my-5"/>
          <div className="w-[60%] lg:w-full">
            <div className="border border-dark text-dark dark:text-light dark:border-light rounded-xl lg:p-7 p-14 flex gap-3 flex-col">
              <h1 className="text-4xl leading-10 font-semibold text-richblack-5 xs:text-xl">
                Got an Idea? We've got the skills. Let's team up
              </h1>
              <p className="text-dark mt-3 font-medium dark:text-light xs:text-xs">
                Tell us more about yourself and what you're got in mind.
              </p>
              <div className="mt-7">
                <ContactMe />
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default contact;
