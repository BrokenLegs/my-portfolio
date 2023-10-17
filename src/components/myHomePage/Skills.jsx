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
    "Lojal",
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
    "Git-Bash",
    "Scrum",
  ];

  return (
    <div className="transition ease-in-out duration-300 w-full h-full flex backdrop-filter backdrop-blur-lg">
      <div className="bg-gray-800 h-4/6 my-auto drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <div className="experience flex flex-wrap gap-4 justify-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <h1 className="text-center text-3xl basis-full pt-5">Erfarenheter</h1>
          <ul className="basis-full text-center leading-7">
            <li className="">
              {"Utvecklare (utöver 2st LIA-Perioder). Ca 1 år"}
            </li>
            <li className="">{"YH-Examen Agile Web Developer, 2.2 år"}</li>
            <li>
              {
                "Montör->Arbetsledare->Projektledare i Byggbranschen(Byggställning) Ca 15 år"
              }
            </li>
            <li>
              {
                "Kampsportsinstruktör i WingTsun, 12 år & Weapons Combat ca 5 år"
              }
            </li>
          </ul>
        </div>
        <div className="skills-container flex flex-wrap drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <div className="soft-skills w-1/2 flex ">
            <div className="w-1/2  mx-auto flex-wrap">
              <h1 className="text-2xl text-center mt-10 ">Soft Skills</h1>
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
                      src={`/myHomePage/${hardSkill.toLowerCase()}.svg`}
                      alt={hardSkill}
                      width={50}
                      height={50}
                      className="rounded-full mx-auto"
                    />
                    <p>{hardSkill}</p>
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
