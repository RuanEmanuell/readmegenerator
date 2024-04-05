"use client"

import { ChangeEvent, useRef, useState } from "react";

type Tech = [string, string];

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const techs: Tech[] = [
    // Web
    ["HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"],
    ["CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"],
    ["Javascript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"],
    ["React", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"],
    ["Angular", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"],
    ["Vue.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"],
    ["Next.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"],
    ["Svelte", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"],
    ["Bootstrap", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"],
    ["Tailwind", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"],
    ["PHP", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"],
    ["Node.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"],
    ["Express.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"],
    ["Python", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"],
    ["Ruby", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"],
    ["ASP.NET", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"],
    ["Java", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"],
    ["Spring", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"],
    ["Firebase", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"],

    // Mobile
    ["Flutter", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"],
    ["React Native", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"],
    ["Ionic", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg"],
    ["Swift", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg"],
    ["Kotlin", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"],
    ["Xamarin", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xamarin/xamarin-original.svg"],

    // Desktop
    ["Electron", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg"],
    ["C#", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"],
    ["Qt", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg"],

    // Databases
    ["PostgreSQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"],
    ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"],
    ["MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"],
    ["Redis", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"],
    ["SQLite", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"],

    // Testing
    ["Jest", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"],
    ["Mocha", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg"],
    ["Cypressio", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg"],

    // CI/CD & DevOps
    ["Docker", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"],
    ["Kubernetes", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"],
    ["Git", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"],
    ["GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"],
    ["GitHub Actions", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"],
    ["GitLab", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"],

    // Scripting
    ["Bash", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"],
    ["PowerShell", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg"],

    // Games
    ["Unity", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"],
    ["Unreal Engine", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg"],
    ["Godot", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg"]
  ];

  const [projectName, setProjectName] = useState<string>("");
  const [projectWebsite, setProjectWebsite] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [projectInstructions, setProjectInstructions] = useState<string>("");
  const [currentTech, setCurrentTech] = useState<Tech>(techs.sort()[0]);
  const [selectedTechs, setSelectedTechs] = useState<Tech[]>([]);

  function addTech() {
    if (!selectedTechs.some(tech => JSON.stringify(tech) === JSON.stringify(currentTech))) {
      setSelectedTechs(prev => [...prev, currentTech]);
    }
  }

  function removeTech(tech: Tech) {
    setSelectedTechs(prev => prev.filter(item => item !== tech));
  }

  function selectTech(event: ChangeEvent<HTMLSelectElement>) {
    setCurrentTech(techs[event.target.selectedIndex]);
  }

  function openSaveMenu() {
    dialogRef.current?.showModal();
  }

  function closeSaveMenu() {
    dialogRef.current?.close();
  }


  async function generateReadmeText() {
    const techsText = selectedTechs.map(tech => 
    `<td style="padding: 5px;">
        <div style="background-color: #333; width: 200px; height: 50px; padding: 10px;">
            <img src='${tech[1]}' width="25" height="25" style="border-radius: 5px;">
            <p style="color: white; padding: 5px; margin: 0;">${tech[0]}</p>
        </div>
    </td>`).join('');

    const instructionsText = "\t\t" + projectInstructions.split("\n").join("\n\t\t");

    const readmeText =
      `## ${projectName}
    
### What is this? 🤔 
${projectDescription}
    
### Where can I access it? 🖥
You can access it <a href="${projectWebsite}">here</a>
    
### Which technologies were used to build it? 🚀 
<table><tr>${techsText}</tr></table>
    
### How to run 🏃
${instructionsText}`;

    return readmeText;
}


  async function copyReadmeText() {
    try {
      await navigator.clipboard.writeText(await generateReadmeText());
    } catch (error) {
      alert("Erro ao copiar: " + error);
    }
  }

  async function downloadReadme() {
    try {
      const readmeText = await generateReadmeText();
      const readmeBlob = new Blob([readmeText], { type: "text/markdown" });
      const url = URL.createObjectURL(readmeBlob);

      const tempDownloadLink = document.createElement("a");
      document.body.appendChild(tempDownloadLink);
      tempDownloadLink.style.display = 'none';
      tempDownloadLink.href = url;
      tempDownloadLink.download = "README.md";

      tempDownloadLink.click();

      URL.revokeObjectURL(url);
      tempDownloadLink.remove();
    } catch (error) {
      alert("Erro ao tentar baixar o arquivo: " + error);
    }
  }


  return (
    <>
      <div className="w-full h-full">
        <main className="max-w-screen-lg h-max m-auto flex justify-center flex-col">
          <h1 className="text-center text-white font-bold text-4xl my-5">README Generator</h1>
          <section className="w-11/12 md:w-3/4 h-screen mx-auto border-4 border-green-700 rounded overflow-auto">
            <div className="w-full h-1/3 sm:h-1/4 md:h-1/8 grid grid-cols-1 md:grid-cols-2 my-5">
              <div className="h-full flex justify-center flex-col">
                <h1 className="text-white my-5 text-center">Project Name</h1>
                <input className="whiteBox h-1/2 w-11/12 m-auto"
                  value={projectName}
                  onChange={(event) => setProjectName(event.target.value)}>
                </input>
              </div>
              <div className="flex justify-center flex-col">
                <h1 className="text-white my-5 text-center">Project Website</h1>
                <input className="whiteBox h-1/2 w-11/12 m-auto"
                  value={projectWebsite}
                  onChange={(event) => setProjectWebsite(event.target.value)}>
                </input>
              </div>
            </div>
            <div className="w-full h-1/2 md:h-1/4 grid grid-cols-1 md:grid-cols-2">
              <div className="h-full w-full flex justify-center flex-col">
                <h1 className="text-white my-5 text-center">Project Description</h1>
                <textarea className="whiteBox h-3/4 w-11/12 m-auto"
                  value={projectDescription}
                  onChange={(event) => setProjectDescription(event.target.value)}>
                </textarea>
              </div>
              <div className="h-full w-full flex justify-center flex-col">
                <h1 className="text-white my-5 text-center">Project Run Instructions</h1>
                <textarea className="whiteBox h-3/4 w-11/12 m-auto"
                  value={projectInstructions}
                  onChange={(event) => setProjectInstructions(event.target.value)}>
                </textarea>
              </div>
            </div>
            <div className="w-full h-3/5 my-auto">
              <div className="h-full w-full text-center">
                <h1 className="text-white my-5">Project Techs</h1>
                <section className="whiteBox h-5/6 w-11/12 flex flex-col my-5 mx-auto">
                  <select className="bg-gray-800 text-white w-1/2 h-16 text-center my-5 m-auto"
                    onChange={(event) => selectTech(event)}>
                    {Object.values(techs.sort()).map((tech, index) =>
                      <option
                        className="bg-gray-800"
                        key={index}
                        value={index}
                      >{tech[0]}</option>)}
                  </select>
                  <button className="bg-blue-600 text-white w-32 h-12 font-bold mx-auto"
                    onClick={addTech}>Add</button>
                  <div className="border-t-2 border-gray-600 h-max flex flex-wrap mt-5 overflow-auto">
                    {Object.values(selectedTechs).map((tech, index) =>
                      <div key={index} className="w-40 h-10 mx-auto my-5 grid grid-cols-5 bg-gray-800 cursor-pointer" onClick={() => removeTech(tech)}>
                        <div className="col-span-1 my-auto">
                          <img src={tech[1]} alt={tech[0]} className="h-auto w-1/2 object-cover mx-2.5" />
                        </div>
                        <p className="col-span-4 text-white my-auto">{tech[0]}</p>
                      </div>)}
                  </div>
                </section>
              </div>
            </div>
          </section>
          <button className="bg-green-800 text-white w-48 h-12 font-bold mx-auto my-5"
            onClick={openSaveMenu}>Save</button>
        </main>
      </div>
      <dialog ref={dialogRef} className="h-full w-full" onClick={closeSaveMenu}>
        <div className="m-auto flex flex-col">
          <section className="border-2 bg-gray-800 h-max w-full max-w-screen-md mx-auto my-5">
            <h1 className="border-b-2 border-gray-700 text-white font-bold text-4xl m-5">{projectName}</h1>
            <h2 className="text-white font-bold text-2xl m-5">What is this? 🤔</h2>
            <p className="text-white text-lg m-5">{projectDescription}</p>
            <h2 className="text-white font-bold text-2xl m-5">Where can I acess it? 🖥</h2>
            <p className="text-white text-lg m-5">You can acess it <a href={projectDescription} target="_blank" className="text-blue-500">here</a></p>
            <h2 className="text-white font-bold text-2xl m-5">Which tecnologies were used to build it? 🚀 </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-max m-auto sm:m-2.5">
              {Object.values(selectedTechs).map(tech =>
                <div key={tech[0]} className="w-40 h-10 m-2.5 grid grid-cols-5 bg-gray-700 cursor-pointer">
                  <div className="col-span-1 my-auto">
                    <img src={tech[1]} alt={tech[0]} className="h-auto w-1/2 object-cover mx-2.5" />
                  </div>
                  <p className="col-span-4 text-white my-auto">{tech[0]}</p>
                </div>)}
            </div>
            <h2 className="text-white font-bold text-2xl m-5">How to run in development mode 🏃</h2>
            <div className="mb-5">
              {projectInstructions.split("\n").map((instruction, index) => <p key={index} className="mx-5 pl-2.5 text-white bg-gray-700">{instruction}</p>)}
            </div>
          </section>
          <button className="bg-green-800 text-white w-48 h-12 font-bold mx-auto my-5"
            onClick={copyReadmeText}>Copy</button>
          <button className="downloadButton bg-blue-600 text-white w-48 h-12 font-bold mx-auto my-5"
            onClick={downloadReadme}>Download</button>
        </div>
      </dialog>
    </>
  );
}
