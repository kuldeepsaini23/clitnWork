import AnimatedText from "@/components.js/AnimatedText";
import Head from "next/head";
import React from "react";
import Layout from "@/components.js/Layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components.js/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
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
              className="ml-4 rounded-lg p-2 px-6 text-lg font-semibold"
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
      <main className="flex items-center justify-center flex-col w-full mb-16">
        <Layout>
          <AnimatedText text="Imagine Trumps Knowledge!" />

          {/* Project layouts */}
          <div className="grid grid-cols-12 gap-24">
            {/* Featured post */}
            <div className="col-span-12">
              <FeaturedProjects
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
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
