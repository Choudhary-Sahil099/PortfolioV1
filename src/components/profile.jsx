import React from "react";
import Pic from "../assets/profile.png";
import { IoCall } from "react-icons/io5";
const Profile = () => {
  return (
    <section className="bg-[#F9E6FF] min-h-[87vh] w-full flex flex-row px-20 gap-20" id="profile">
        <div className="pt-17 flex flex-col gap-6">
          <p className="text-2xl">
            <span className="text-[#5419D7]">Hello</span> There!
          </p>
          <p className="text-8xl">
            My name is <span className="text-[#C85CF2]">Sahil</span>
          </p>
          <p className="text-xl">
            “I turn ideas into code, and code into impact.”
          </p>
          <p className="text-2xl w-[80%]">
            I’m a software engineer passionate about machine learning, web
            development, and problem-solving. I enjoy building efficient,
            scalable applications and solving real-world challenges through
            clean, analytical code.
          </p>
          <button className="bg-[#5419D7] text-white w-45 h-15 rounded-xl text-2xl hover:bg-[#7342de] cursor-pointer mt-6 flex justify-center items-center gap-2" onClick={() => {
            document.getElementById("contact")?.scrollIntoView();
          }}>
            <div>Contact Me</div> <IoCall />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img className="h-[65%] rounded-full object-contai" src={Pic} />
        </div>
      </section>
  );
};

export default Profile;
