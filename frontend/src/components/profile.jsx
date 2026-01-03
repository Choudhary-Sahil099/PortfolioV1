import React from "react"; 
import { IoCall } from "react-icons/io5";
const Profile = () => {
  return (
    <section className="profile-Wrapper" id="profile">
        <div className="introText">
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
          <button className="contact-btn" onClick={() => {
            document.getElementById("contact")?.scrollIntoView();
          }}>
            <div>Contact Me</div> <IoCall />
          </button>
        </div>
        <div className="imageDiv">
          <img className="profilePic" src="/api/profile-image" alt="profile" />
        </div>
      </section>
  );
};

export default Profile;
