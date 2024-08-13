import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function Page() {
  return (
    <div>
      {/* ==============Scetion One============== */}
      <div className=" py-[120px] px-[16px]">
        <div className="relative bg-[#374151] h-[280px] w-[78%] mx-auto mb-[15%] object-cover ">
          <img
            className="absolute w-[85%] h-[300px] bottom-[25px] right-[19px] mx-auto border-bgColor1 border-[10px]"
            src="./dp-one.png"
            alt="profile-picture"
          />
        </div>

        <div className="text-textColor">
          <h1 className="text-textColor font-semibold text-[36px]">
            Hi, I'm Elijah &#128075;
          </h1>
          <p className="text-[] text-justify">
            I'm a Front-end Developer specializing in creating interactive
            digital experiences. My focus is on developing high-quality websites
            and web applications that are visually appealing, user-friendly, and
            accessible. I'm a Cybersecurity enthusiast.
          </p>
          <div className="flex flex-col gap-[5px] mt-[10%]">
            <div className="flex items-center gap-[10px]">
              <IoLocationSharp className="" />
              <p>Lagos, Nigeria.</p>
            </div>
            <div className="flex items-center gap-[10px] ">
              <GoDotFill className="text-green-700" />
              <p>Available for new projects</p>
            </div>
          </div>
        </div>

        <div className="flex text-textColor mt-[10%] text-[25px] gap-[5%]">
          <a className="" href="https://github.com/dedayorr">
            <AiFillGithub />
          </a>
          <a
            className=""
            href="https://www.linkedin.com/in/elijah-adeyeye-software-developer/"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* ============Section Two============== */}

      <div className="bg-[#111827] py-[60px] text-textColor px-[16px] text-justify">
        <p className="mx-auto text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
          About me
        </p>

        <div className="relative bg-[#374151] h-[360px] w-[78%] mx-auto mb-[15%] object-cover mt-[25%]">
          <img
            className="absolute w-[87%] h-[390px] bottom-[17px] right-[19px] mx-auto border-[#111827] border-[10px] object-cover"
            src="./dp-two.png"
            alt="profile-picture"
          />
        </div>

        <div className="flex flex-col gap-[20px]">
          {" "}
          <p className="font-semibold text-[32px] ">
            Curious about me? Here you have it:
          </p>
          <p>
            I'm a passionate, self-proclaimed front-end developer who
            specializes in full stack development (React.js & Node.js). I am
            very enthusiastic about bringing the technical and visual aspects of
            digital products to life. User experience, pixel perfect design, and
            writing clear, readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2020, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. I'm
            building cutting-edge web applications using modern technologies
            such as Next.js, TypeScript, Tailwindcss, and much more.
          </p>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>

      {/* ===============Section Three========  */}
      <div className="bg-bgColor1 py-[60px] flex flex-col gap-[10px] text-textColor px-[16px]">
        <p className="mx-auto text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
          Skills
        </p>
        <p>The skills, tools and technologies I am good at:</p>
        <div className="grid grid-cols-3 gap-[10%] ">
          <div className="">
            <img className="w-[64px] h-[64px]" src="./javascript.png" alt="js" />
            <p>Javascript</p>
          </div>
          <div className="">
            <img className="w-[64px] h-[64px]" src="./react.png" alt="js" />
            <p>React</p>
          </div>
          <div className="">
            <img className="w-[64px] h-[64px]" src="./typescript.png" alt="js" />
            <p>Typescript</p>
          </div>
          <div className="">
            <img className="w-[64px] h-[64px]" src="./nodejs.png" alt="js" />
            <p>Node.js</p>
          </div>
          <div className="">
            <img className="w-[64px] h-[64px]" src="./nextjs.png" alt="js" />
            <p>Next.js</p>
          </div>
          <div className="">
            <img className="w-[64px] h-[64px]" src="./express.png" alt="js" />
            <p>Express.js</p>
          </div>
          <div className="">
            <img className="w-[64px] h-[64px]" src="./mongodb.png" alt="js" />
            <p>MongoDB</p>
          </div>
          <div className="">
            <img className="w-[64px] h-[64px]" src="./tailwind.png" alt="js" />
            <p>Tailwindcss</p>
          </div>
          <div className="">
            <img className="w-[64px] h-[64px]" src="./git.png" alt="js" />
            <p>Git</p>
          </div>
          <div className="">
            <img className="w-[64px] h-[64px]" src="./figma.png" alt="js" />
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
