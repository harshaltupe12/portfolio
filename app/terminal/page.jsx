"use client";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";

// function Cmd() {
//   const words = ["better", "cute", "beautiful", "modern"];

//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState([]);

//   const handleInput = (e) => {
//     if (e.key === "Enter") {
//       processCommand(input);
//       setInput("");
//     }
//   };

//   const processCommand = (command) => {
//     let response = "";
//     switch (command.toLowerCase()) {
//       case "help":
//         response =
//           "Available commands: [help, about, skills, projects, contact]";
//         break;
//       case "about":
//         {
//           response =
//             " Hello 👋 I'm Harshal Tupe An ambitious undergraduate Computer Engineer with a passion for software development & Web development.";
//         }
//         break;
//       case "skills":
//         response =
//           "Skills: HTML, CSS, SASS, JavaScript, TypeScript, React, Node.js, Express, NextJS, MongoDB, PostgreSQL, UI/UX design, Git & Github, Neon DB, Firebase, Vercel.";
//         break;
//       case "projects":
//         response =
//           "Projects: [SaaS - Hyper Serve, Mock Master, ImaginaryINK, AICTE Portal]";
//         break;
//       case "contact":
//         response =
//           "[E-mail: harshaltupe12@gmail.com], [Contact No. +91 9370946170]";
//         break;
//       default:
//         response = `Command not recognized: ${command}`;
//     }
//     setOutput([...output, { command, response }]);
//   };
//   return (
//     <div className="bg-white md:p-8 p-3">
//       <div className="bg-[#bcbcbc] w-full h-10 text-xl text-white flex gap-2 items-center justify-start pl-5 rounded-tl-xl rounded-tr-xl rounded-br-none rounded-bl-none">
//         <div className="mini h-3 w-3 bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-500"></div>
//         <div className="maxi h-3 w-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-600"></div>
//         <Link href={"/"}>
//           <div className="close h-3 w-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-600"></div>
//         </Link>
//         | <span className="text-[15px]">Harshal.zsh</span>
//       </div>
//       <div className="bg-[#ebeaea] text-[#333333] md:h-[600px] h-[700px] p-5 font-mono rounded-tl-none rounded-tr-none rounded-br-xl rounded-bl-xl">
//         <div className="">
//           {/* <FlipWords words={words} /> <br /> */}
//           If you're a terminal geek 💻, you'll go nuts for this 🤯!!
//           <br />
//           Discover who I am quickly through a sleek terminal interface.
//           <br />
//           <br />
//           This is my custom command prompt! — Type{" "}
//           <span className="text-green-500">help</span> for seeing the list of
//           supported commands.
//         </div>
//         <div className="mt-5">
//           {output.map((item, index) => (
//             <div key={index}>
//               <p className="text-green-500">{`> ${item.command}`}</p>
//               <p>{item.response}</p>
//             </div>
//           ))}
//         </div>
//         <div className="flex gap-2">
//           {">"}
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={handleInput}
//             className="bg-[#ebeaea] text-[333333] outline-none w-full"
//             placeholder="Type a command..."
//             autoFocus
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cmd;

import React, { useState, useEffect } from "react";
import Link from "next/link";

function Cmd() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleInput = (e) => {
    if (e.key === "Enter") {
      processCommand(input.trim());
      setInput(""); // Clear input after processing
    }
  };

  const processCommand = (command) => {
    const commands = {
      help: "Available commands: [help, about, skills, projects, contact]",
      about:
        "Hello 👋 I'm Harshal Tupe An ambitious undergraduate Computer Engineer with a passion for software development & Web development.",
      skills:
        "Skills: HTML, CSS, SASS, JavaScript, TypeScript, React, Node.js, Express, NextJS, MongoDB, PostgreSQL, UI/UX design, Git & Github, Neon DB, Firebase, Vercel.",
      projects:
        "Projects: [SaaS - Hyper Serve, Mock Master, ImaginaryINK, AICTE Portal]",
      contact:
        "[E-mail: harshaltupe12@gmail.com], [Contact No. +91 9370946170]",
    };

    const response =
      commands[command.toLowerCase()] || `Command not recognized: ${command}`;
    setOutput((prevOutput) => [...prevOutput, { command, response }]);
  };

  return (
    <div className="bg-white dark:bg-black md:p-8 p-4 ">
      <div className="bg-[#bcbcbc] dark:bg-black w-full h-10 text-xl dark:border border-slate-800 text-white flex gap-2 items-center justify-start pl-5 rounded-tl-xl rounded-tr-xl">
        <div className="mini h-3 w-3 bg-yellow-400 rounded-full"></div>
        <div className="maxi h-3 w-3 bg-green-500 rounded-full"></div>
        <Link href={"/"}>
          <div className="close h-3 w-3 bg-red-500 rounded-full"></div>
        </Link>
        | <span className="text-[15px]">Harshal.zsh</span>
      </div>
      <div className="bg-[#ebeaea] dark:border border-slate-800 dark:bg-black dark:text-slate-200 text-[#333333] md:h-[600px] h-[700px] p-5 font-mono rounded-bl-xl rounded-br-xl">
      <div className="">
          If you're a terminal geek 💻, you'll go nuts for this 🤯!!
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
            className="bg-[#ebeaea] dark:bg-black text-[#333333] dark:text-white outline-none w-full"
            placeholder="Type a command..."
          />
        </div>
      </div>
    </div>
  );
}

export default Cmd;
