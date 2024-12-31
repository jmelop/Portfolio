import React from "react";

function ProjectInfo({ framework, version, libraries }) {
  return (
    <div className="project-info">
      <p><strong>Framework:</strong> {framework}</p>
      <p><strong>Version:</strong> {version}</p>
      <p><strong>Libraries:</strong> {libraries.join(", ")}</p>
    </div>
  );
}

export default ProjectInfo;
