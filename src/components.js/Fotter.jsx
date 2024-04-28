import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Fotter = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between text-dark dark:text-light lg:flex-col lg-py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div>
          Build with{" "}
          <span className="text-primary text-2xl px-1 dark:text-primaryDark">
            &#9825;
          </span>{" "}
          by&nbsp;{" "}
          <Link
            href="https://www.instagram.com/kuldeepsaini_23/"
            className="underline underline-offset-2 dark:text-primaryDark"
            target={"_blank"}
          >
            Kuldeep Saini
          </Link>
        </div>

        <Link href="" className="underline underline-offset-2">
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Fotter;
