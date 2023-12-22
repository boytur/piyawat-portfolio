import profile from '../assets/profile.png'
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";
import { Link } from 'react-scroll';
function Home() {
  return (
    <section id="home" className="h-[120vh] md:h-[100vh] flex justify-center w-full md:mt-0">
      <div className="lg:flex lg:flex-row justify-center items-center h-full max-w-screen-xl w-full flex flex-col mt-6">
        {/* Left */}
        <div className="w-full h-full order-2 flex justify-center lg:items-center">
          <div className='w-full flex flex-col gap-2 pt-4 p-1'>
            <div className='w-full text-[2rem] text-center md:text-center md:text-[4rem]  lg:text-[4.5rem] font-bold text-white'>
              <h1>Hi, I'm Piyawat👋</h1>
            </div>
            <div className='text-white text-md md:text-center lg:text-left text-center md:text-[1.5rem]'>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm a second-year software engineering student with a passion for Full-Stack development with JavaScript, eager to continue learning and improving my skills.</p>
            </div>
            {/* Social medis */}
            <div className='w-full h-[3rem] flex items-center mt-2 gap-5 text-white justify-center lg:justify-start'>
              <div className=' w-16 border h-10 justify-center flex items-center rounded-md hover:bg-[#4c49ed46] hover:border-none cursor-pointer'>
                <a href="https://github.com/boytur" target="_blank"><FaGithub size={30} /></a>
              </div>
              <div className='w-16 border h-10 justify-center flex items-center rounded-md hover:bg-[#4c49ed46] hover:border-none cursor-pointer'>
                <a href="https://www.facebook.com/profile.php?id=100084796533376" target="_blank"><FaFacebook size={30} /></a>
              </div>
              <div className='w-16 border h-10 justify-center flex items-center rounded-md hover:bg-[#4c49ed46] hover:border-none cursor-pointer'>
                <a href="https://www.instagram.com/piy.bb" target="_blank"><FaInstagram size={30} /></a>
              </div>
            </div>
            {/* Btn */}
            <div className='w-full h-[5rem] lg:flex md:flex-row items-center flex-col'>
              <Link
                smooth={true}
                duration={500}
                to="about" className='lg:w-2/4 mx-2 lg:mx-0 border h-[60px] rounded-sm text-white flex justify-center items-center cursor-pointer hover:scale-105'>
                <div><p>View more</p></div>
                <div>
                  <IoIosArrowRoundDown size={35} />
                </div>
              </Link>
              <div className='lg:w-3/4 w-full h-[60px] text-white underline justify-center flex items-center' >
                <a href='https://drive.google.com/drive/folders/1eqSxxvD7Cl0MJ1oSKfV8lk7pzW-_b-EF?usp=sharing'
                  target="_blank"
                >
                  <p>Download resume</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-full md:h-full h-[50rem] flex justify-center items-center order-1 lg:order-2" >
          <div className='w-full h-full flex justify-center overflow-hidden items-center relative mt-20 md:mt-0'>
            <img className='bg-[#4c49ed46] rounded-full md:h-[25rem] md:w-[25rem] w-[19rem] h-[19rem] lg:h-[30rem] lg:w-[30rem] object-cover z-10' src={profile} alt="" />
            <div className='absolute border rounded-full w-[21rem] h-[21rem] md:w-[26rem] md:h-[26rem] lg:h-[32rem] lg:w-[32rem]'></div>
          </div>
          <div className='absolute rounded-full w-[20rem] h-[24rem] md:w-[20rem] md:h-[24rem] lg:h-[30rem] lg:w-[30rem] bg-[#4C49ED] blur-[400px]'></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
