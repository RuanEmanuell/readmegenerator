"use client"

import Image, { StaticImageData } from "next/image";
import { ChangeEvent, useState } from "react";
import HTMLIcon from "./assets/images/html.png";
import CSSIcon from "./assets/images/css.png";
import JavascriptIcon from "./assets/images/javascript.png";

type Tech = [string, StaticImageData];

export default function Home() {
  const [projectName, setProjectName] = useState<string>("");
  const [projectWebsite, setProjectWebsite] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [projectInstructions, setProjectInstructions] = useState<string>("");
  const [currentTech, setCurrentTech] = useState<Tech>(["HTML", HTMLIcon]);
  const [selectedTechs, setSelectedTechs] = useState<Tech[]>([]);

  const techs: Tech[] = [
    ["HTML", HTMLIcon],
    ["CSS", CSSIcon],
    ["Javascript", JavascriptIcon],
  ]

  function addTech() {
    if(!selectedTechs.some(tech => JSON.stringify(tech) === JSON.stringify(currentTech))){
    setSelectedTechs(prev => [...prev, currentTech]);
    }
  }

  return (
    <div className="w-full h-full">
      <main className="max-w-screen-xl h-full m-auto flex justify-center">
        <section className="w-full h-5/6 my-auto mx-5 border-4 border-green-700 rounded">
          <div className="w-full h-1/6 flex justify-between">
            <div className="h-full w-full flex justify-center flex-col">
              <h1 className="text-white my-5 text-center">Project Name</h1>
              <input className="text-white border-2 border-white h-1/2 w-11/12 bg-gray-700 m-auto"
                value={projectName}
                onChange={(event) => setProjectName(event.target.value)}>
              </input>
            </div>
            <div className="h-full w-full flex justify-center flex-col">
              <h1 className="text-white my-5 text-center">Project Website</h1>
              <input className="text-white border-2 border-white h-1/2 w-11/12 bg-gray-700 m-auto"
                value={projectWebsite}
                onChange={(event) => setProjectWebsite(event.target.value)}>
              </input>
            </div>
          </div>
          <div className="w-full h-1/3 flex justify-between">
            <div className="h-full w-full flex justify-center flex-col">
              <h1 className="text-white my-5 text-center">Project Description</h1>
              <textarea className="text-white border-2 border-white h-3/4 w-11/12 bg-gray-700 m-auto"
                value={projectDescription}
                onChange={(event) => setProjectDescription(event.target.value)}>
              </textarea>
            </div>
            <div className="h-full w-full flex justify-center flex-col">
              <h1 className="text-white my-5 text-center">Project Run Instructions</h1>
              <textarea className="text-white border-2 border-white h-3/4 w-11/12 bg-gray-700 m-auto"
                value={projectInstructions}
                onChange={(event) => setProjectInstructions(event.target.value)}>
              </textarea>
            </div>
          </div>
          <div className="w-full h-3/4 flex justify-between">
            <div className="h-full w-full">
              <h1 className="text-white my-5 text-center">Project Techs</h1>
              <section className="border-2 border-white h-1/2 w-11/12 bg-gray-700 m-auto flex flex-col">
                <select className="bg-gray-800 text-white w-64 h-16 text-center my-4 m-auto">
                  {Object.values(techs).map(tech =>
                    <option
                      className="bg-gray-800"
                      key={tech[0]}
                      onClick={() => setCurrentTech(tech)}
                    >{tech[0]}</option>)}
                </select>
                <button className="bg-green-800 text-white w-32 h-12 font-bold mx-auto"
                  onClick={addTech}>Add</button>
                <div className="h-1/2 grid grid-cols-5 my-5">
                    {Object.values(selectedTechs).map(tech =>
                      <div key={tech[0]} className="w-32 h-10 mx-5 flex justify-around bg-gray-900">
                        <Image src={tech[1]} alt={tech[0]} className="w-1/6 h-full h-min my-auto" />
                        <p className="text-white my-auto">{tech[0]}</p>
                      </div>)}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
