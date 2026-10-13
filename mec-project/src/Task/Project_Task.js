import React from "react";

function Projects_Task() {
  const project= [
    {
      id: 1,
      name: "Portfolio Website",
      description: "My portfolio ."
    },
    {
      id: 2,
      name: "Login Page",
      description: "A  login page using React."
    },
    {
      id: 3,
      name: "Student Project",
      description: "A student information ."
    }
  ];

  return (
    <div>
      <h1>My Projects</h1>

      {project.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects_Task;