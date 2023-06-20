import React, {  useEffect } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "../data/countrycode.json";
import { motion } from "framer-motion";


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

const ContactMe = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
  
    const { countrycode, email, firstName, lastaName, message, phoneNo } = data;

    
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      if(loading === false ){
        reset({
          email: "",
          firstName: "",
          lastaName: "",
          message: "",
          phoneNo: "",
        });
      }
      
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <motion.form
      onSubmit={handleSubmit(submitContactForm)}
      className="flex flex-col gap-7 text-dark dark:text-light"
      variants={quote} initial="initial" whileInView="animate"
    >
      <motion.div className="flex lg:flex-col gap-5 flex-row" variants={singleWord}>
        {/* First Name */}
        <div className="flex flex-col gap-2 w-[48%] lg:w-full">
          <label htmlFor="firstName" className="lable-style dark:text-light md:text-xs">
            First Name<sup className="text-pink-700">*</sup>
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter First Name"
            {...register("firstName", { required: true })}
            className="form-style md:text-xs"
          />
          {errors.firstName && (
            <span className="-mt-1 text-[12px] text-yellow-400">
              Please enter your First name.
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-2 w-[48%] lg:w-full">
          <label htmlFor="lastaName" className="lable-style dark:text-light md:text-xs">
            Last Name{" "}
          </label>
          <input
            type="text"
            name="lastaName"
            id="lastaName"
            placeholder="Enter Last Name"
            {...register("lastaName")}
            className="form-style md:text-xs"
          />
          {/* Not mandatory so no erro is shown */}
        </div>
      </motion.div>

      {/*Email*/}
      <motion.div className="flex flex-col gap-2" variants={singleWord}>
        <label htmlFor="email" className="lable-style dark:text-light md:text-xs">
          Email<sup className="text-pink-700">*</sup>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email Address"
          {...register("email", { required: true })}
          className="form-style md:text-xs"
        />
        {errors.email && (
          <span className="-mt-1 text-[12px] text-yellow-400">
            Please enter your Email Address.
          </span>
        )}
      </motion.div>

      {/* /* Country Code and Phone no */}

      <motion.div className="flex flex-col gap-2" variants={singleWord}>
        <label className="lable-style dark:text-light md:text-xs" htmlFor="phonenumber">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] lable-style dark:text-light md:text-xs">
            Phone Number<sup className="text-pink-700">*</sup>
          </p>
        </label>

        <div className="flex gap-5">
          {/* Dropdown */}
          <div className="flex w-[81px] flex-col gap-2 md:w-[65px] xs:w-[30] xs:gap-0">
            <select
              name="dropdown"
              id="dropdown"
              {...register("countrycode", { required: true })}
              className="form-style dark:bg-rgb(61, 61, 61) text-white bg-dark md:text-xs xs:text-[10px]"
            >
              {CountryCode.map((element, index) => {
                return (
                  <option key={index} value={element.code} className="xs:text-[7px]">
                    {element.code} -{element.country}
                  </option>
                );
              })}
            </select>
          </div>

          {/* phone number */}
          <div className="flex w-[calc(100%-90px)] flex-col gap-2 md:w-[calc(100%-65px)] md:text-xs">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
              className="form-style md:text-xs"
              {...register("phoneNo", {
                required: {
                  value: true,
                  message: "Please Enter Your Phone Number",
                },
                maxLength: { value: 11, message: "Invalid Phone Number" },
                minLength: { value: 8, message: "Invalid Phone Number" },
              })}
            />
          </div>
        </div>
        {errors.phoneNo && (
          <span className="-mt-1 text-[12px] text-yellow-400">
            {errors.phoneNo.message}
          </span>
        )}
      </motion.div>

      {/*Message*/}
      <motion.div className="flex flex-col gap-2" variants={singleWord}>
        <label htmlFor="message" className="lable-style dark:text-light md:text-xs">
          Message<sup className="text-pink-700">*</sup>
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter Your Message Here..."
          {...register("message", { required: true })}
          className="form-style md:text-xs"
        />
        {errors.message && (
          <span className="-mt-1 text-[12px] text-yellow-400">
            Please enter your Message
          </span>
        )}
      </motion.div>

      <motion.button
        type="submit"
        className="rounded-md bg-yellow-400 px-6 py-3 text-center text-[13px] font-medium text-dark shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] transition-all duration-200 hover:scale-95 hover:shadow-none  disabled:bg-richblack-500 sm:text-[16px] dark:text-light"
        variants={singleWord}
      >
        {/* {loading ? "Sending..." : "Send Message"} */}
        Send Message
      </motion.button>
    </motion.form>
  );
};

export default ContactMe;
