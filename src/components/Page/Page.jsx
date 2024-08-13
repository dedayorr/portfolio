import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

function Page() {
  return (
    <div>
      {/* ==============Scetion One============== */}
      <div className=" py-[64px] px-[16px]">
        <div className="bg-[#374151] h-[280px] w-[78%] mx-auto mb-[15%]">
          <img className="" src="" alt="profile-picture" />
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
          <div className="flex flex-col gap-[5px] mt-[5%]">
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
      </div>
    </div>
  );
}

export default Page;
// I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.