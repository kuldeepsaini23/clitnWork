import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "../data/countrycode.json";
import emailJs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { contactUsEmail } from "./contactFormRes";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    const { countrycode, email, firstName, lastName, message, phoneNo } = data;

    const toastId = toast.loading("Loading...");
    emailJs
      .send(
        "gmail",
        "service_kh126n8",
        "template_ka5nqeq",
        contactUsEmail(  email,
          firstName,
          lastName,
          message,
          phoneNo,
          countrycode),
        "Lr3ymNFSZg_9lhZmA"
      )
      .then(() => {
        toast.success("Message Sent Successfully!!");
        setValue("email", "");
        setValue("firstName", "");
        setValue("lastName", "");
        setValue("phoneNo", "");
        setValue("message", "");
      })
      .catch((error) => {
        toast.error("Something Went Wrong.");
        setValue("email", "");
        setValue("firstName", "");
        setValue("lastName", "");
        setValue("phoneNo", "");
        setValue("message", "");
      });

    toast.dismiss(toastId);
  };

  return (
    <form action="https://formsubmit.co/workwithdiago@gmail.com" method="POST"
      // onSubmit={handleSubmit(submitContactForm)}
      className="flex flex-col gap-7"
      // variants={quote} initial="initial" whileInView="animate"
    >
      <div
        className="flex lg:flex-col gap-5 flex-row"
        // variants={singleWord}
      >
        {/* First Name */}
        <div className="flex flex-col gap-2 w-[48%] lg:w-full">
          <label
            htmlFor="firstName"
            className="lable-style dark:text-light md:text-xs"
          >
            First Name<sup className="text-pink-700">*</sup>
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter First Name"
            {...register("firstName", { required: true })}
            className="form-style md:text-xs text-light"
          />
          {errors.firstName && (
            <span className="-mt-1 text-[12px] text-pink-600 font-bold">
              Please enter your First name.
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-2 w-[48%] lg:w-full">
          <label
            htmlFor="lastName"
            className="lable-style dark:text-light md:text-xs"
          >
            Last Name{" "}
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter Last Name"
            {...register("lastName")}
            className="form-style md:text-xs text-light"
          />
          {/* Not mandatory so no erro is shown */}
        </div>
      </div>

      {/*Email*/}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="lable-style dark:text-light md:text-xs"
        >
          Email<sup className="text-pink-700">*</sup>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email Address"
          {...register("email", { required: true })}
          className="form-style md:text-xs text-light"
        />
        {errors.email && (
          <span className="-mt-1 text-[12px] text-pink-600 font-bold">
            Please enter your Email Address.
          </span>
        )}
      </div>

      {/* /* Country Code and Phone no */}

      <div className="flex flex-col gap-2">
        <label
          className="lable-style dark:text-light md:text-xs"
          htmlFor="phonenumber"
        >
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
                  <option
                    key={index}
                    value={element.code}
                    className="xs:text-[7px]"
                  >
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
              className="form-style md:text-xs text-light"
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
          <span className="-mt-1 text-[12px] text-pink-600 font-bold">
            {errors.phoneNo.message}
          </span>
        )}
      </div>

      {/*Message*/}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="lable-style dark:text-light md:text-xs"
        >
          Message<sup className="text-pink-700">*</sup>
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter Your Message Here..."
          {...register("message", { required: true })}
          className="form-style md:text-xs text-light"
        />
        {errors.message && (
          <span className="-mt-1 text-[12px] text-pink-600 font-bold">
            Please enter your Message
          </span>
        )}
      </div>

      <button
        type="submit"
        className="rounded-md bg-yellow-400 px-6 py-3 text-center text-[13px] text-lime-100 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] transition-all duration-200 hover:scale-95 hover:shadow-none  disabled:bg-richblack-500 sm:text-[16px] dark:text-dark font-bold"
      >
        {/* {loading ? "Sending..." : "Send Message"} */}
        Send Message
      </button>
    </form>
  );
};

export default ContactMe;
