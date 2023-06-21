import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion, useScroll } from "framer-motion";
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      {/* hamburher Button */}
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out
         ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        ></span>

        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-100 ease-out 
        ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>

        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out
         ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
        ></span>
      </button>

      {/* For desktop */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="mx-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href=""
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mr-3"
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            href=""
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            href=""
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            href=""
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            href=""
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 ml-3"
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>

          {/* Dark and light mode Button */}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 p-1 flex justify-center rounded-full items-center
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <MoonIcon className={"fill-dark"} />
            ) : (
              <SunIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* For Mobile */}
      {isOpen && (
        <motion.div 
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
          animate={{scale:1, opacity:1}}  
          transition={{duration:0.8}}
        >
          <nav className="flex items-center justify-center flex-col">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title="Contact"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href=""
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mr-3 sm:mx-1"
              whileTap={{ scale: 0.9 }}

            >
              <TwitterIcon />
            </motion.a>

            <motion.a
              href=""
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3 sm:mx-1"
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </motion.a>

            <motion.a
              href=""
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3 sm:mx-1"
              whileTap={{ scale: 0.9 }}
            >
              <DribbbleIcon />
            </motion.a>

            <motion.a
              href=""
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3 sm:mx-1"
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              href=""
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 ml-3 sm:mx-1" 
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>

            {/* Dark and light mode Button */}
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 p-1 flex justify-center rounded-full items-center
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {mode === "dark" ? (
                <MoonIcon className={"fill-dark"} />
              ) : (
                <SunIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;