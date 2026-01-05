import React from "react";
import ContactImg from "../assets/Contact.png";
import { IoIosSend } from "react-icons/io";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { toast } from "react-hot-toast";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you 😊");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  console.log(import.meta.env);

  return (
    <section
      className="ContactWrapper"
      id="contact"
    >
      <div className="ConDiv1">
        <form className="ConForm" onSubmit={onSubmit}>
          <h1 className="text-5xl">
            Let's <span className="text-[#5419D7]">Talk</span>
          </h1>

          <p>
            It would be a great experience to work with you, and hope that we can
            work together on some crazy ideal projects.
          </p>

          <div className="formDiv1">
            <h3 className="text-[#C85CF2]">Your Name</h3>
            <input
              type="text"
              name="name"
              required
              className="formInput"
              placeholder="Enter your name..."
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#C85CF2]">Your Email</h3>
            <input
              type="email"
              name="email"
              required
              className="formInput"
              placeholder="Enter your email..."
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#C85CF2]">Your Message</h3>
            <textarea
              name="message"
              required
              className="formMess"
              placeholder="Type your message..."
            />
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center">
            <button className="send-btn" type="submit">
              <div>Send</div>
              <IoIosSend className="icon" />
            </button>

            <div className="flex justify-center items-center gap-2 text-3xl">
              <a
                href="https://github.com/Choudhary-Sahil099"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-800"
              >
                <TbBrandGithubFilled />
              </a>

              <a
                href="https://www.linkedin.com/in/sahil-choudhary-478a682b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-800"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://twitter.com/YOUR_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-800"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </form>
      </div>


      <div className="contDiv2">
        <img
          src={ContactImg}
          alt="Contact illustration"
          className="w-[70vh] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Contact;