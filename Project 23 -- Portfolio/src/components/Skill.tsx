import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact} from 'react-icons/fa';
import { SiTypescript, SiBootstrap, SiGit } from "react-icons/si";


function Skill() {
  return (
    <div className="bg-gray-100 min-h-screen w-screen p-8">
  <h1 className="md:text-4xl text-3xl 2xl:w-[200px] font-bold pb-2  mb-8 md:w-[160px] w-[140px] mx-auto border-b-4 border-sky-400">My Skills</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* <!-- Skill Card Example --> */}
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <div className="bg-red-500 p-3 rounded-full">

        {/* <!-- HTML Icon --> */}
        <FaHtml5 className="text-white h-10 w-10" />
      </div>
      <div className="ml-4 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">HTML</h3>
          <span className="text-gray-600">100%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-gradient-to-r from-red-500 to-red-700 h-2.5 rounded-full w-[100%]"></div>
        </div>
      </div>
    </div>

    {/* <!-- Repeat for each skill with different colors --> */}
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <div className="bg-blue-500 p-3 rounded-full">
        {/* <!-- CSS Icon --> */}
        <FaCss3Alt className="text-white h-10 w-10" />
      </div>
      <div className="ml-4 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">CSS</h3>
          <span className="text-gray-600">90%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-2.5 rounded-full w-[90%]"></div>
        </div>
      </div>
    </div>

    {/* <!-- JavaScript Skill Card --> */}
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <div className="bg-yellow-500 p-3 rounded-full">
        {/* <!-- JavaScript Icon --> */}
        <FaJsSquare className="text-white h-10 w-10" />
      </div>
      <div className="ml-4 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">JavaScript</h3>
          <span className="text-gray-600">95%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 h-2.5 rounded-full w-[95%]"></div>
        </div>
      </div>
    </div>

    {/* <!-- Repeat for Tailwind CSS and React.js with appropriate colors --> */}
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <div className="bg-teal-400 p-3 rounded-full">
        {/* <!-- Tailwind Icon --> */}
        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 54 33"
      className="h-10 w-10 text-white"
      fill="currentColor"
    >
      <path d="M26.5 0C20.876 0 17.21 3.7 15.5 11c2.633-3.7 5.633-5.4 9-5.1 2.76.2 4.53 1.9 5.3 5.1 1.3 5.2-1.67 10.5-9 16 5.623 0 9.29-3.7 11-11 2.633 3.7 5.633 5.4 9 5.1 2.76-.2 4.53-1.9 5.3-5.1 1.3-5.2-1.67-10.5-9-16C37.958 1.52 34.291 0 30 0c-.916 0-1.79.04-2.63.12a15.836 15.836 0 00-1.87.38z"/>
    </svg>
      </div>
      <div className="ml-4 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Tailwind CSS</h3>
          <span className="text-gray-600">90%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-gradient-to-r from-teal-400 to-teal-600 h-2.5 rounded-full w-[90%]"></div>
        </div>
      </div>
    </div>

    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <div className="bg-yellow-600 p-3 rounded-full">
        {/* <!-- React Icon --> */}
        <SiBootstrap className="text-white h-10 w-10" /> 
      </div>
      <div className="ml-4 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Bootstrap</h3>
          <span className="text-gray-600">90%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 h-2.5 rounded-full w-[90%]"></div>
        </div>
      </div>
    </div>

    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <div className="bg-indigo-600 p-3 rounded-full">
        {/* <!-- React Icon --> */}
        <FaReact className="text-white h-10 w-10" />
      </div>
      <div className="ml-4 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">React.js</h3>
          <span className="text-gray-600">90%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 h-2.5 rounded-full w-[90%]"></div>
        </div>
      </div>
    </div>

    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <div className="bg-lime-600 p-3 rounded-full">
        {/* <!-- React Icon --> */}
        <SiTypescript className="text-white h-10 w-10" /> 
      </div>
      <div className="ml-4 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Typescript</h3>
          <span className="text-gray-600">80%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-gradient-to-r from-lime-600 to-lime-800 h-2.5 rounded-full w-[80%]"></div>
        </div>
      </div>
    </div>

    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <div className="bg-sky-600 p-3 rounded-full">
        {/* <!-- React Icon --> */}
        <SiGit className="text-white h-10 w-10" /> 
      </div>
      <div className="ml-4 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Version Control (GIT)</h3>
          <span className="text-gray-600">100%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-gradient-to-r from-sky-600 to-sky-800 h-2.5 rounded-full w-[100%]"></div>
        </div>
      </div>
    </div>

    
 
  </div>
</div>

  )
}

export default Skill