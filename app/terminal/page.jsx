"use client";
import Link from "next/link";
import React, { useState } from "react";

function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleInput = (e) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    }
  };

  const processCommand = (command) => {
    let response = "";
    switch (command.toLowerCase()) {
      case "help":
        response =
          "Available commands: [help, about, skills, projects, contact]";
        break;
      case "about":
        {
          response =
            " Hello 👋 I'm Harshal Tupe An ambitious undergraduate Computer Engineer with a passion for software development & Web development.";
        }
        break;
      case "skills":
        response =
          "Skills: HTML, CSS, SASS, JavaScript, TypeScript, React, Node.js, Express, NextJS, MongoDB, PostgreSQL, UI/UX design, Git & Github, Neon DB, Firebase, Vercel.";
        break;
      case "projects":
        response =
          "Projects: [SaaS - Hyper Serve, Mock Master, ImaginaryINK, AICTE Portal]";
        break;
      case "contact":
        response =
          "[E-mail: harshaltupe12@gmail.com], [Contact No. +91 9370946170]";
        break;
      default:
        response = `Command not recognized: ${command}`;
    }
    setOutput([...output, { command, response }]);
  };

  return (
    <div className="bg-white md:p-10 p-2">
      <div className="bg-gray-700 w-full h-10 text-xl text-white flex gap-5 items-center justify-end pr-5">
        <div className="mini cursor-pointer hover:text-gray-400">---</div>
        <div className="maxi cursor-pointer hover:text-gray-400">[]</div>
        <Link href={"/"}>
          <div className="close cursor-pointer hover:text-red-600">X</div>
        </Link>
      </div>
      <div className="bg-black text-white h-screen p-5 font-mono">
        <div className="">
          If you're a terminal geek 💻, you'll go nuts for this 🤯!!
          <br />
          <br />
          Discover who I am quickly through a sleek terminal interface.
          <br />
          <br />
          This is my custom command prompt! — Type{" "}
          <span className="text-green-500">help</span> for seeing the list of
          supported commands.
        </div>
        <div className="mt-5">
          {output.map((item, index) => (
            <div key={index}>
              <p className="text-green-500">{`> ${item.command}`}</p>
              <p>{item.response}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
        {">"}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInput}
          className="bg-black text-white outline-none w-full"
          placeholder="Type a command..."
          autoFocus
        />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
