import UltraLinx from '../assets/UltraLinx.jfif';
import s5 from '../assets/s5.png'
import tm2 from '../assets/tm2.jpg'
import pp1 from '../assets/pp1.jpg'
import b2 from '../assets/b2.jpg'
import c2 from '../assets/c2.webp'


function Projects() {
  return (
    <div className="w-screen min-h-screen p-5 ">
      <h1 className="md:text-4xl 2xl:w-[200px] text-3xl border-b-4 pb-2 mb-10 mt-4 border-sky-400 mx-auto md:w-[220px] w-[180px] font-bold">My Projects</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 md:px-24 sm:px-24 px-16 place-items-center">

        <div className='border-2 shadow-lg md:pb-4 pb-2 rounded-lg md:h-72 sm:h-72 w-52 md:w-full sm:w-full transform hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden'>
          <a href="https://spotify-clone-website10.netlify.app/" target='blank'>
          <img src={UltraLinx} alt="#" className='md:h-52 sm:h-52 h-48 md:object-cover sm:object-cover w-full'/>
          <div className='bg-white  flex flex-col border-t-2 items-center pt-2'>
          <h2 className='font-bold md:text-xl text-lg text-center'>Spotify Clone</h2>
          <p className='md:text-lg text-sm text-center md:visible invinsible'>Vanilla ( HTML | CSS | JS )</p>
          </div>
          </a>
        </div>
        
        <div className='border-2 shadow-lg pb-2 md:pb-4 rounded-lg md:h-72 sm:h-72 w-52 md:w-full sm:w-full transform hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden'>
          <a href="https://social-media-manager-website.netlify.app/" target='blank'>
          <img src={s5} alt="#" className='md:h-52 sm:h-52 h-48 md:object-cover sm:object-cover w-full '/>
          <div className='bg-white flex flex-col justify-center items-center pt-2 border-t-2'>
          <h2 className='font-bold md:text-xl text-lg text-center'>Social Media </h2>
          <p className='md:text-lg text-sm text-center md:visible invinsible'>MERN Stack | React.js | Bootstrap</p>
          </div>
          </a>
        </div>

        <div className='border-2 shadow-lg pb-2 md:pb-4 rounded-lg md:h-72 sm:h-72 w-52 md:w-full sm:w-full transform hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden'>
          <a href="https://crud-axios-api.netlify.app/" target='blank'>
          <img src={c2} alt="#" className='md:h-52 sm:h-52 h-48  md:object-cover  w-full'/>
          <div className='bg-white flex flex-col border-t-2 justify-center items-center pt-2'>
          <h2 className='font-bold md:text-xl text-lg'>CRUD APP</h2>
          <p className='md:text-lg text-sm text-center' >MERN Stack | React.js | AXIOS | API</p>
          </div>
          </a>
        </div>

        <div className='border-2 shadow-lg md:pb-4 pb-2 rounded-lg md:h-72 sm:h-72 w-52 md:w-full sm:w-full transform hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden'>
          <a href="https://bat-ball-game-website.netlify.app/" target='blank'>
          <img src={b2} alt="#" className='md:h-52 sm:h-52 h-48 md:object-cover sm:object-cover w-full'/>
          <div className='bg-white flex flex-col border-t-2 justify-center items-center pt-2'>
          <h2 className='font-bold md:text-xl text-lg'>Bat & Ball Game</h2>
          <p className='md:text-lg text-sm text-center md:visible invinsible'>Core Foundation | Javascript</p>
          </div>

          </a>
        </div>

        <div className='border-2 shadow-lg md:pb-4 pb-2  rounded-lg md:h-72 sm:h-72 w-52 md:w-full sm:w-full transform hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden'>
          <a href="https://theme-switcher-website.netlify.app/" target='blank'>
          <img src={tm2} alt="#" className='md:h-52 sm:h-52 h-48 md:object-cover sm:object-cover w-full'/>
          <div className='bg-white flex flex-col justify-center border-t-2 items-center pt-2'>
          <h2 className='font-bold md:text-xl text-lg'>Theme Switcher</h2>
          <p className='md:text-lg text-sm text-center md:visible invinsible'>MERN Stack | React.js | Local Storage</p>
          </div>

          </a>
        </div>

        <div className='border-2 shadow-lg md:pb-4 pb-2 rounded-lg md:h-72 sm:h-72 w-52 md:w-full sm:w-full transform hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden'>
          <a href="https://myportfoliowebsite10.netlify.app/" target='blank'>
          <img src={pp1} alt="#" className='md:h-52 sm:h-52 h-48 md:object-cover  w-full'/>
          <div className='bg-white flex flex-col border-t-2 justify-center items-center pt-2'>
          <h2 className='font-bold md:text-xl text-lg'>Portfolio Website</h2>
          <p className='md:text-lg text-sm text-center md:visible invinsible'>MERN Stack | React.js | Typescript.js</p>
          </div>
          </a>
        </div>
     

        
        

      </div>
    </div>
  )
}

export default Projects