import React from "react";

const CodeBlock = () => {
  return (
    <div className="font-mono text-sm text-white">
      {/* Import Statements */}

      {/* React Component */}
      <div>
        <span className="text-blue-500">function</span>{" "}
        <span className="text-purple-400">Aboutme</span>() &#123;
      </div>
      <div className="ml-4">
        <span className="text-blue-500">const</span> [projects, setProjects] ={" "}
        <span className="text-purple-400">useState</span>([]);
      </div>
      <div className="ml-4">
        <span className="text-purple-400">React.useEffect</span>
        {"(() => &#123;"}
      </div>
      <div className="ml-8">
        <span className="text-purple-400">fetchProjects</span>
        ().then(setProjects);
      </div>
      <div className="ml-4">&#125;, []);</div>
      <br />
      <div className="ml-4">
        <span className="text-blue-500">return</span> (
      </div>
      <div className="ml-8">
        {"<"}
        <span className="text-purple-400">div</span>
        {">"}
      </div>
      <div className="ml-12">
        {"<"}
        <span className="text-purple-400">h1</span>
        {">"}My Projects{"</"}
        <span className="text-purple-400">h1</span>
        {">"}
      </div>
      <div className="ml-12">
        {"<"}
        <span className="text-purple-400">ul</span>
        {">"}
      </div>
      <div className="ml-16">{"{projects.map(project => ("}</div>
      <div className="ml-20">
        {"<"}
        <span className="text-purple-400">li</span>
        {" key={project._id}>"}
        {"{project.title}"}
        {"</"}
        <span className="text-purple-400">li</span>
        {">"}
      </div>
      <div className="ml-16">{"))}"}</div>
      <div className="ml-12">{"</ul>"}</div>
      <div className="ml-8">{"</div>"}</div>
      <div className="ml-4">);</div>
      <div>&#125;</div>
    </div>
  );
};

export default CodeBlock;
