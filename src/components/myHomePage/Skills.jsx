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
    { name: "Html", image: "/myHomePage/html.svg" },
    { name: "Css", image: "/myHomePage/css.svg" },
    { name: "Tailwind", image: "/myHomePage/tailwind.svg" },
    { name: "React", image: "/myHomePage/react.svg" },
    { name: "Next.js", image: "/myHomePage/next.js.svg" },
    { name: "Node", image: "/myHomePage/node.svg" },
    { name: "Git", image: "/myHomePage/git.svg" },
    { name: "PHP", image: "/myHomePage/php.svg" },
    { name: "Javascript", image: "/myHomePage/javascript.svg" },
    { name: "MySQL", image: "/myHomePage/mysql.svg" },
    { name: "Laravel", image: "/myHomePage/laravel.svg" },
    { name: "JQuery", image: "/myHomePage/jquery.svg" },
    { name: "Git-Bash", image: "/myHomePage/git-bash.svg" },
    { name: "Scrum", image: "/myHomePage/scrum.svg" },
    { name: "C#", image: "/myHomePage/csharp.svg" },
    { name: ".ASP.Net \n  Mvc", image: "/myHomePage/mvc.svg" },
    { name: "Vue", image: "/myHomePage/vue.svg" },
  ];

  return (
    <>
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-50 backdrop-filter backdrop-blur-lg transition ease-in-out duration-300 text-center overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-800 gap-10 py-20 absolute top-0 bottom-0 overflow-auto lg:relative">
          <div className="erfarenheter col-span-full ">
            <h3 className="text-center text-3xl basis-full">Erfarenheter</h3>
            <ul className="leading-7">
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
          <div className="soft-skills grid sm:grid-cols-3  xl:grid-cols-4  gap-3 ">
            <h3 className="text-3xl col-span-full p-3">Soft skills</h3>
            {softSkills.map((skill) => (
              <p key={skill}> {skill}</p>
            ))}
          </div>
          <div className="hard-skills grid grid-cols-4 lg:grid-cols-6 px-20 gap-2 ">
            <h3 className="text-3xl col-span-full p-3">Hard skills</h3>
            {hardSkills.map((skill) => (
              <div key={skill.name}>
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className="rounded-full mx-auto"
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
