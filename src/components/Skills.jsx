import Image from "next/image";
import React from "react";

export default function Skills() {
  const softSkills = [
    "Driven",
    "Social",
    "Ansvarstagande",
    "Problemlösare",
    "Flexibel",
    "Ledarskap",
    "Öga för detaljer",
    "Strukturerad",
    "Älskar utmaningar",
    "Vilja att lära",
    "Prestigelös",
    "Ärlig",
    "Verbal och skriven kommunikation",
    "Lagspelare",
    "Stresstålig",
    "Öppensinnad",
  ];
  const hardSkills = [
    "Html",
    "Css",
    "Tailwind",
    "React",
    "Next.js",
    "Node",
    "Git",
    "PHP",
    "Javascript",
    "MySQL",
    "Laravel",
    "JQuery",
  ];

  return (
    <div className="transition ease-in-out duration-300 w-full h-full flex backdrop-filter backdrop-blur-lg">
      <div className="bg-gray-800 h-4/6 my-auto">
        <div className="experience flex flex-wrap gap-4">
          <h1 className="text-center text-3xl basis-full">Experience</h1>
          <p className="w-1/2 m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            quasi deleniti saepe incidunt cupiditate dolor adipisci, ex at optio
            ipsam ad sed voluptates officia totam modi dolorem ratione amet
            tempore nulla earum fugit eius cum aliquid molestias. Fugiat,
            nesciunt excepturi voluptate sequi iure illum sunt, quae voluptatem
            minus enim quasi consectetur dolores omnis necessitatibus laudantium
            nobis harum. Mollitia veritatis itaque minima eveniet alias
            expedita, voluptatibus rem perferendis provident eligendi
            repellendus blanditiis nam, non dolore, quis ad modi assumenda
            dignissimos officiis!
          </p>
        </div>
        <div className="skills-container flex flex-wrap text-white">
          <div className="soft-skills w-1/2 flex ">
            <div className="w-1/2  mx-auto flex-wrap">
              <h1 className="text-2xl text-center mt-10">Soft Skills</h1>
              <ul className="flex flex-wrap gap-3 justify-center text-1xl py-10">
                {softSkills.map((softSkill) => (
                  <li key={softSkill} className="rounded-full p-2">
                    <p>{softSkill}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hard-skills w-1/2 flex ">
            <div className="w-1/2  mx-auto flex-wrap">
              <h1 className="text-2xl text-center mt-10">Hard Skills</h1>
              <ul className="flex flex-wrap gap-3 justify-center text-1xl py-10">
                {hardSkills.map((hardSkill) => (
                  <li key={hardSkill} className="text-center rounded-full p-2">
                    <Image
                      src={`/${hardSkill.toLowerCase()}.svg`}
                      alt={hardSkill}
                      width={50}
                      height={50}
                      className="rounded-full mx-auto"
                    />
                    <p>{hardSkill.to}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
