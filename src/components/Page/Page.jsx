import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

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
      <div className="bg-bgColor1 pt-[70px] pb-[50%] flex flex-col gap-[40px] text-textColor px-[16px]">
        <p className="mx-auto text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
          Skills
        </p>
        <p>The skills, tools and technologies I am good at:</p>
        <div className="grid grid-cols-3 gap-[10%] ">
          <div className="items-center flex flex-col justify-center gap-3">
            <img
              className="w-[64px] h-[64px]"
              src="./javascript.png"
              alt="js"
            />
            <p>Javascript</p>
          </div>
          <div className="items-center flex flex-col justify-center gap-3">
            <img className="w-[64px] h-[64px]" src="./react.png" alt="js" />
            <p>React</p>
          </div>
          <div className="items-center flex flex-col justify-center gap-3">
            <img
              className="w-[64px] h-[64px]"
              src="./typescript.png"
              alt="js"
            />
            <p>Typescript</p>
          </div>
          <div className="items-center flex flex-col justify-center gap-3">
            <img className="w-[64px] h-[64px]" src="./nodejs.png" alt="js" />
            <p>Node.js</p>
          </div>
          <div className="items-center flex flex-col justify-center gap-3">
            <img className="w-[64px] h-[64px]" src="./nextjs.png" alt="js" />
            <p>Next.js</p>
          </div>
          <div className="items-center flex flex-col justify-center gap-3">
            <img className="w-[64px] h-[64px]" src="./express.png" alt="js" />
            <p>Express.js</p>
          </div>
          <div className="items-center flex flex-col justify-center gap-3">
            <img className="w-[64px] h-[64px]" src="./mongodb.png" alt="js" />
            <p>MongoDB</p>
          </div>
          <div className="items-center flex flex-col justify-center gap-3">
            <img className="w-[64px] h-[64px]" src="./tailwind.png" alt="js" />
            <p>Tailwindcss</p>
          </div>
          <div className="items-center flex flex-col justify-center gap-3">
            <img className="w-[64px] h-[64px]" src="./git.png" alt="js" />
            <p>Git</p>
          </div>
          <div className="items-center flex flex-col justify-center gap-3">
            <img className="w-[64px] h-[64px]" src="./figma.png" alt="js" />
            <p>Figma</p>
          </div>
        </div>
      </div>

      {/* ==========Section Four============= */}
      <div className="bg-[#111827] py-[60px] text-textColor px-[16px] text-justify flex flex-col gap-[20px]">
        {" "}
        <p className="mx-auto text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
          Experience
        </p>
        <p className="text-center">Here is a quick summary of my experience</p>
        <div>
          <div className="h-[] bg-[#1F2937]  p-5 rounded-[15px] flex flex-col gap-[10px]">
            <p className="font-bold text-[25px] text-[#14A800]">AremxyPlug</p>
            <p className="font-thin text-[14px]">
              June 12 2023 - January 10 2024
            </p>
            <p className="font- text-[18px] font-semibold">
              Front-end Developer
            </p>
            <ul className="list-disc flex flex-col gap-[10px]">
              <li className="text-[14px]">
                Built a Fintech, Telecom and Digital Service platform to develop
                and provide innovative products and services that combine
                financial technology with telecommunications technology
              </li>
              <li className="text-[14px]">
                Design and update layouts to meet usability and performance
                requirements.
              </li>
              <li className="text-[14px]">
                Collaborate with team to create Functional and Responsive web
                projects using React.js and Tailwind Css
              </li>
              <li className="text-[14px]">
                Develop and maintain courteous and effective working
                relationships.
              </li>
              <li className="text-[14px]">
                Paid attention to detail while completing assignments.
              </li>
              <li className="text-[14px]">
                Cultivate interpersonal skills by building positive
                relationships with others.
              </li>
            </ul>
          </div>
          <br />
          <div className="h-[] bg-[#1F2937]  p-5 rounded-[15px] flex flex-col gap-[10px]">
            <p className="font-bold text-[25px] text-[#14A800]">
              ITSkillsCenter
            </p>
            <p className="font-thin text-[14px]">November 22 2020 - May 2023</p>
            <p className="font- text-[18px] font-semibold">
              Software Developer
            </p>
            <ul className="list-disc flex flex-col gap-[10px]">
              <li className="text-[14px]">
                Designed intuitive graphical user interfaces to improve user
                experience.
              </li>
              <li className="text-[14px]">
                Designed reusable and reliable code for use within distributed
                cloud environments.
              </li>
              <li className="text-[14px]">
                Developed responsive software for desktop and mobile view.
              </li>
              <li className="text-[14px]">
                Contributed ideas and suggestions in team meetings and delivered
                updates on deadlines, designs, and enhancements.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* =========Section Five=============== */}
      <div className="bg-bgColor1 pt-[70px] text-textColor px-[16px] flex flex-col gap-[15px]">
        <p className="mx-auto text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
          Experience
        </p>
        <p className="text-center">
          Some of the noteworthy projects I have built:
        </p>
        <div>
          <div className="bg-[#1F2937]">
            <div className="bg-[#374151] p-6">
              <a href="https://gailymaids.com" target="_blank" rel="noreferrer">
                {" "}
                <img
                  className="rounded-[10px]"
                  src="./gailymaids.png"
                  alt="project-one"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px]">
              <p className="font-extrabold text-[18px]">Gaily Maids</p>{" "}
              <p className="font-light text-justify">
                An all-encompassing cleaning service platform designed to
                provide exceptional cleaning solutions for residential,
                commercial, and industrial clients. Our website serves as a
                one-stop destination for booking professional cleaning services,
                ensuring a sparkling clean environment for homes, offices, and
                other spaces.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Next.Js
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Tailwindcss
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  EmailJs
                </p>
              </div>
              <a
                href=" https://gailymaids.com"
                target="_blank"
                rel="noreferrer"
                className="underline flex items-center gap-[10px] justify-center"
              >
                <CiLink className="text-3xl" />
                <p>Link</p>{" "}
              </a>
            </div>
          </div>

          <br />
          <div className="bg-[#1F2937]">
            <div className="bg-[#374151] p-5">
              <a
                href="https://multi-enterprise.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="rounded-[10px]"
                  src="./aremxyplug.png"
                  alt="project-one"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px]">
              <p className="font-extrabold text-[18px]">AremxyPlug</p>{" "}
              <p className="font-light text-justify">
                AremxyPlug is a business enterprise and telecommunication
                service provider that offers individuals and businesses full
                access to quick, secure, and dependable solutions for their
                digital and telecommunication service needs.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  React
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Tailwindcss
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Context Api
                </p>
              </div>
              <a
                href="https://multi-enterprise.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="underline flex items-center gap-[10px] justify-center"
              >
                <CiLink className="text-3xl" />
                <p>Link</p>{" "}
              </a>
            </div>
          </div>

          <br />
          <div className="bg-[#1F2937]">
            <div className="bg-[#374151] p-5">
              <a
                href="https://prismatic-entremet-275fdf.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="rounded-[10px]"
                  src="./blogify.png"
                  alt="project-one"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px]">
              <p className="font-extrabold text-[18px]">Blogify</p>{" "}
              <p className="font-light text-justify">
                An app that contains blogs and section to add blogs. Has a Store
                to buy books with integration of flutterwave to make payment.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  React
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Tailwindcss
                </p>
              </div>
              <a
                href="https://prismatic-entremet-275fdf.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="underline flex items-center gap-[10px] justify-center"
              >
                <CiLink className="text-3xl" />
                <p>Link</p>{" "}
              </a>
            </div>
          </div>

          <br />
          <div className="bg-[#1F2937]">
            <div className="bg-[#374151] p-5">
              <a
                href="https://renttreeapp.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="rounded-[10px]"
                  src="./rentree.png"
                  alt="project-one"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px]">
              <p className="font-extrabold text-[18px]">Rentree</p>{" "}
              <p className="font-light text-justify">
                A landing page conveying information about Rentree. Rentree is
                your go-to platform for booking hotels and renting apartments in
                Lagos for all your needs—whether it&apos;s a lodge, a getaway, a
                party, or any special event. We also offer boats for water
                voyages, ensuring your experience is seamless and memorable.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  React
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Tailwindcss
                </p>
              </div>
              <a
                href="https://renttreeapp.com"
                className="underline flex items-center gap-[10px] justify-center"
              >
                <CiLink className="text-3xl" />
                <p>Link</p>{" "}
              </a>
            </div>
          </div>

          <br />
          <div className="bg-[#1F2937]">
            <div className="bg-[#374151] p-5">
              <a
                href="https://d-gadgets-store.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="rounded-[10px]"
                  src="./dgadget.png"
                  alt="project-one"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px]">
              <p className="font-extrabold text-[18px]">D-gadget</p>{" "}
              <p className="font-light text-justify">
                An e-commerce site to buy gadgets, customers are able to
                navigate through different gadgets and then add items to cart as
                well as remove items from cart. Purchase is made possible with
                the integration of flutterwave.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Html
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Css
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Javascript
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Tailwindcss
                </p>
              </div>
              <a
                href="https://d-gadgets-store.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="underline flex items-center gap-[10px] justify-center"
              >
                <CiLink className="text-3xl" />
                <p>Link</p>{" "}
              </a>
            </div>
          </div>

          <br />
          <div className="bg-[#1F2937]">
            <div className="bg-[#374151] p-5">
              <a
                href="https://purple-web.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="rounded-[10px]"
                  src="./dgadget.png"
                  alt="project-one"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px]">
              <p className="font-extrabold text-[18px]">Purple</p>{" "}
              <p className="font-light text-justify">
                A single page website template.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Html
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Css
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Javascript
                </p>
              </div>
              <a
                href="https://purple-web.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="underline flex items-center gap-[10px] justify-center"
              >
                <CiLink className="text-3xl" />
                <p>Link</p>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
