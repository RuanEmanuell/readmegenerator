"use client"

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import HTMLIcon from "./assets/images/html.png";
import CSSIcon from "./assets/images/css.png";
import JavascriptIcon from "./assets/images/javascript.png";

export default function Home() {
  const [projectName, setProjectName] = useState<string>("");
  const [projectWebsite, setProjectWebsite] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [projectInstructions, setProjectInstructions] = useState<string>("");
  const [selectedTechs, setSelectedTechs] = useState<string[] | null>(null);

  const techs = [
    {"HTML" : HTMLIcon},
    {"CSS" : CSSIcon},
    {"Javascript" : JavascriptIcon},
  ]

  return (
    <div className="w-full h-full">
      <main className="max-w-screen-xl h-full m-auto flex justify-center">
        <section className="w-full h-5/6 my-auto mx-5 border-2 border-green-700">
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
                <select className="bg-gray-800 text-white w-64 h-16 text-center my-2.5 m-auto">
                  {Object.values(techs).map(tech =>
                    <option
                      className="bg-gray-800"
                      key={tech}>{tech}</option>)}
                </select>
                <button className="bg-green-800 text-white w-32 h-12 font-bold mx-auto">Add</button>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
