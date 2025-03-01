"use client";
import React from "react";
import { Github, Instagram, Linkedin, Mails, PhoneCall } from "lucide-react";
import Link from "next/link";

function Contact() {
  return (
    <div>
      {/* Title Section with Centered Text & Horizontal Lines */}
      <div className="flex items-center justify-center my-6 md:mb-10 w-full">
        <div className="hidden md:block flex-1 border-t border-gray-400"></div>
        <h2 className="mx-4 text-4xl md:text-6xl font-bold text-center whitespace-nowrap flex-shrink-0">
          <span className="ml-2 md:ml-4">Get in </span>
          <span className="bg-clip-text bg-gradient-to-tl from-blue-600 via-red-400 to-violet-600 text-transparent">
            Touch
          </span>
        </h2>
        <div className="hidden md:block flex-1 border-t border-gray-400"></div>
      </div>

      <div className="card flex md:flex-row flex-col w-full">
        <div className="left flex-1 p-4" style={{ height: "max-content" }}>
          <div className="form p-4 border-2 rounded-lg h-ful">
            <p>
              Do not hesitate to get in touch with me if you have any queries or
              worries. I'm up for any job opportunity that fits my interests and
              skill set.
            </p>
            <form action="https://api.web3forms.com/submit" method="POST" className="mt-4">
              <input type="hidden" name="access_key" value="78663257-eaa2-4b38-a16b-d038fd43a807" />
              <label>Your Name</label>
              <input
                type="text"
                name="Name"
                required
                placeholder="John Doe"
                className="w-full p-2 mb-4 border rounded-md dark:bg-black"
              />

              <label>Your Email</label>
              <input
                type="email"
                name="Email"
                required
                placeholder="johndoe@gmail.com"
                className="w-full p-2 mb-4 border rounded-md dark:bg-black"
              />

              <label>Your Message</label>
              <textarea
                name="Message"
                required
                placeholder="Message here"
                rows="1"
                className="w-full p-2 mb-4 border rounded-md dark:bg-black"
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 rounded-lg text-white w-full hover:bg-blue-400 transition-all duration-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="right flex-1 h-96 p-4 border-2 rounded-lg my-4 flex flex-col justify-center mx-4 md:mx-0 mr-4 md:mr-4">
          <div className="header">
            Additional Information and Social Media Handles
          </div>
          <div className="content flex flex-col gap-5 mt-5">
            <div className="call text-gray-600 flex gap-2">
              <PhoneCall />
              +91 9370946170
            </div>
            <div className="gmail text-gray-600 flex gap-2">
              <Mails />
              <Link href="mailto:harshaltupe12@gmail.com" target="_blank">
                harshaltupe12@gmail.com
              </Link>
            </div>
            <div className="linkedin text-gray-600 flex gap-2">
              <Linkedin />
              <Link href="https://www.linkedin.com/in/harshal-tupe/" target="_blank">
                Linkedin/harshal-tupe
              </Link>
            </div>
            <div className="github text-gray-600 flex gap-2">
              <Github />
              <Link href="https://github.com/harshaltupe12" target="_blank">
                Github/harshaltupe12
              </Link>
            </div>
            <div className="instagram text-gray-600 flex gap-2">
              <Instagram />
              <Link href="https://www.instagram.com/harshal.tupe_/" target="_blank">
                Instagram/harshal.tupe_
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
