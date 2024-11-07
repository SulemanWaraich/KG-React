function About() {
  return (
    <>
      <div className="w-screen min-h-screen p-5 ">
      <h1 className="md:text-4xl text-3xl border-b-4 pb-2 mb-10 mt-4 border-sky-400 mx-auto 2xl:w-[200px] md:w-[180px] w-[150px] font-bold">About Me</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        <div className="grid grid-row-2 gap-4 left-div">

        <div className="border-2 p-5 space-y-4 rounded-lg shadow-lg">
          <div className="flex items-center text-2xl font-semibold">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              className="text-sky-400 mr-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </svg>
            <h1>About Me</h1>
          </div>
          <p className="border-l-4 border-sky-400 pl-4">
          Hi, I’m Muhammad Suleman, a front-end developer skilled in building responsive, user-friendly web applications with React, Tailwind CSS, JavaScript, and TypeScript. With experience in dynamic UI development and API integration, I’m dedicated to delivering high-quality user experiences. Known for clear communication and team collaboration, I continuously learn new technologies to write clean, efficient code that meets project goals and deadlines.
          </p>
        </div>

          <div className="border-2 p-5 space-y-4 rounded-lg shadow-lg">
          <div className="flex items-center text-2xl font-semibold">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              className="text-sky-400 mr-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
            </svg>
            <h1>Qualifications</h1>
          </div>
          <div className="border-l-4 border-sky-400 pl-4">
            <ul className="space-y-6">
              <div> 
                <p className="font-bold">Bachelor of Science in Software Engineering</p>
                <span>- Karachi University | 2023 - 2027 (Expected)</span>
                </div>    
              <div>
              <p className="font-bold">Full Stack Development Cohort </p>
              <span>- Harkirat’s Cohort | Started February 2024</span>
                </div>    
            </ul>
          </div>
          </div>

        </div>



        <div className="right-div border-2 p-5 space-y-4 rounded-lg shadow-lg">
          <div className="flex items-center text-2xl font-semibold">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="text-sky-400 mr-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path>
            </svg>
            <h1>Professional Experience</h1>
          </div>

          <div className="border-l-4 border-sky-400 pl-4 space-y-4">
            <div>
            <h2 className="font-bold text-xl">
              Instructor
            </h2>
            <p>Aptech | February 2024 – Present</p>
            </div>
            
            <ul className="list-disc pl-5">
              <li>
              Taught front-end and full-stack development topics, focusing on React, JavaScript, and UI design.
              </li>
              <li>
              Guided students in building responsive, user-centered applications.
              </li>
              <li>
              Provided hands-on instruction and mentorship, fostering student growth and understanding of industry practices.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-sky-400 pl-4 space-y-4">
            <div>
            <h2 className="font-bold">
              Font-End Developer Intern
            </h2>
            <p>April 2024 - July 2024</p>
            </div>

            <ul className="list-disc pl-5">
              <li>Contributed to the development of responsive and dynamic website components using React and JavaScript.</li>
              <li>
                Collaborated with designers to implement interactive UI
                features.
              </li>
              <li>
                Gained hands-on experience with front-end technologies and best
                practices.
              </li>
            </ul>
          </div>
        </div>


        </div>
      </div>

        
    </>
  );
}

export default About;
