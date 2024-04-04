"use client"

import { useState } from "react";

type Tech = [string, string];

export default function Home() {
  const [projectName, setProjectName] = useState<string>("");
  const [projectWebsite, setProjectWebsite] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [projectInstructions, setProjectInstructions] = useState<string>("");
  const [currentTech, setCurrentTech] = useState<Tech>(["HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"]);
  const [selectedTechs, setSelectedTechs] = useState<Tech[]>([]);

  const techs: Tech[] = [
    ["HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"],
    ["CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"],
    ["Javascript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"],
  ]

  function addTech() {
    if(!selectedTechs.some(tech => JSON.stringify(tech) === JSON.stringify(currentTech))){
    setSelectedTechs(prev => [...prev, currentTech]);
    }
  }

  return (
    <div className="w-full h-full">
      <main className="max-w-screen-xl h-max m-auto flex justify-center flex-col">
        <h1 className="text-center text-white font-bold text-4xl my-5">README Generator</h1>
        <section className="w-11/12 h-full mx-auto border-4 border-green-700 rounded">
          <div className="w-full md:h-1/6 sm:h-1/3 grid md:grid-cols-2 sm:grid-cols-1">
            <div className="h-full flex justify-center flex-col">
              <h1 className="text-white my-5 text-center">Project Name</h1>
              <input className="whiteBox h-1/2 w-11/12"
                value={projectName}
                onChange={(event) => setProjectName(event.target.value)}>
              </input>
            </div>
            <div className="flex justify-center flex-col">
              <h1 className="text-white my-5 text-center">Project Website</h1>
              <input className="whiteBox h-1/2 w-11/12"
                value={projectWebsite}
                onChange={(event) => setProjectWebsite(event.target.value)}>
              </input>
            </div>
          </div>
          <div className="w-full h-1/3 grid md:grid-cols-2 sm:grid-cols-1">
            <div className="h-full w-full flex justify-center flex-col">
              <h1 className="text-white my-5 text-center">Project Description</h1>
              <textarea className="whiteBox h-3/4 w-11/12"
                value={projectDescription}
                onChange={(event) => setProjectDescription(event.target.value)}>
              </textarea>
            </div>
            <div className="h-full w-full flex justify-center flex-col">
              <h1 className="text-white my-5 text-center">Project Run Instructions</h1>
              <textarea className="whiteBox h-3/4 w-11/12"
                value={projectInstructions}
                onChange={(event) => setProjectInstructions(event.target.value)}>
              </textarea>
            </div>
          </div>
          <div className="w-full h-1/2">
            <div className="h-full w-full text-center">
              <h1 className="text-white my-5">Project Techs</h1>
              <section className="whiteBox h-5/6 w-11/12 flex flex-col">
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
                <div className="h-1/2 grid md:grid-cols-6 sm:grid-cols-3 my-5">
                    {Object.values(selectedTechs).map(tech =>
                      <div key={tech[0]} className="w-32 h-10 mx-5 grid grid-cols-3 bg-gray-900">
                        <div className="col-span-1 h-6 my-auto">
                        <img src={tech[1]} alt={tech[0]} className="h-auto w-1/2 object-cover mx-2.5" />
                        </div>
                        <p className="col-span-2 text-white my-auto">{tech[0]}</p>
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
