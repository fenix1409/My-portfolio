"use client"

import * as React from "react"

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = React.useState(false)

  const handleCardClick = () => {
    if (project.demo) {
      window.open(project.demo, "_blank")
    } else if (project.live) {
      window.open(project.live, "_blank")
    } else if (project.github) {
      window.open(project.github, "_blank")
    }
  }

  return (
    <div
      className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">{project.name}</p>
      </div>

      {/* Project Image Section */}
      {project.image && (
        <div className="relative mx-4 lg:mx-8 mb-4 rounded-lg overflow-hidden border border-indigo-800/50">
          <div className="relative group">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              className={`w-full h-48 lg:h-56 object-cover transition-all duration-500 ${isHovered ? "scale-110 brightness-110" : "scale-100"
                }`}
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-[#0d1224]/80 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? "opacity-60" : "opacity-40"
                }`}
            ></div>

            {/* Animated Border */}
            <div
              className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-lg transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                }`}
              style={{
                background: "linear-gradient(45deg, #ec4899, #8b5cf6, #06b6d4) border-box",
                WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "exclude",
                maskComposite: "exclude",
              }}
            ></div>

            {/* Glowing Effect */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-lg blur-sm transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                }`}
            ></div>

            {/* Tech Stack Overlay */}
            {project.tools && (
              <div
                className={`absolute bottom-2 left-2 right-2 transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
              >
                <div className="flex flex-wrap gap-1">
                  {project.tools.slice(0, 3).map((tool, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-black/60 backdrop-blur-sm text-white rounded-full border border-white/20"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-black/60 backdrop-blur-sm text-white rounded-full border border-white/20">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Play/View Icon */}
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isHovered ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Links Section */}
      {(project.github || project.demo || project.live) && (
        <div className="px-4 lg:px-8 pb-4">
          <div className="flex gap-3 justify-center">
            {project.github && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.github, "_blank")
                }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-lg transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </button>
            )}
            {project?.demo && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.demo, "_blank")
                }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600/50 hover:bg-blue-500/50 text-white rounded-lg transition-all duration-300 border border-blue-500/30 hover:border-blue-400/50"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Demo
              </button>
            )}
            {project.live && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.live, "_blank")
                }}
                className="flex items-center gap-2 px-4 py-2 bg-green-600/50 hover:bg-green-500/50 text-white rounded-lg transition-all duration-300 border border-green-500/30 hover:border-green-400/50"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.029 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clipRule="evenodd"
                  />
                </svg>
                Live Site
              </button>
            )}
          </div>
        </div>
      )}

      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{"{"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">{tag}</span>
                {project.tools?.length - 1 !== i && <span className="text-gray-400">{`', '`}</span>}
              </React.Fragment>
            ))}
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{" " + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="text-gray-400">{`};`}</span>
          </div>
        </code>
      </div>
    </div>
  )
}

export default ProjectCard