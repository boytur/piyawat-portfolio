import { useState } from "react";
import { GoPerson, GoProject } from "react-icons/go";
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaBarsStaggered, FaCode } from "react-icons/fa6";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion"
import { GoHome } from "react-icons/go";

function Navbar() {
  // set mobile navbar
  const [toggleMobileNavbar, setToggleMobileNavbar] = useState<boolean>(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  
  //framer motion scroll navbar variants 
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, y: "-100%" },
  }
  
  return (

    <div className=" flex justify-center z-50" >

      {/* Desktop navbar */}
      <nav className="w-full h-[5rem] md:flex pt-5 px-2 hidden fixed justify-center">
        <div className=" w-full flex max-w-screen-xl">
          <div className=" w-full h-10 text-white">
            <div
              className="w-[10rem] border flex justify-center text-[1.5rem] rounded-sm items-center gap-2 font-bold cursor-pointer"
              onClick={scrollToTop}
            >
              <p>PIYAWAT</p>
              <span>
                <FaCode />
              </span>
            </div>
          </div>
          <div onClick={() => setToggleMobileNavbar(!toggleMobileNavbar)} className="md:hidden flex items-center h-9 text-white">
            <FaBarsStaggered size={25} />
          </div>
          <div className="w-full h-10 text-white md:flex justify-center">
            <ul className="w-full flex justify-between items-center">
            <Link
                to="home"
                smooth={true}
                duration={500}
                className="flex items-center gap-1 cursor-pointer"
              >
                <GoHome />
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="flex items-center gap-1 cursor-pointer"
              >
                <GoPerson />
                About
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="flex items-center gap-1 cursor-pointer"
              >
                <GoProject className="mt-[2px]" />
                Projects
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="flex items-center gap-1 cursor-pointer"
              >
                <IoCodeSlashOutline />
                Skills
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="flex items-center gap-1 cursor-pointer"
              >
                <MdOutlinePermContactCalendar className="mt-[2px]" />
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile navbar */}
      <nav
      className={`w-full h-[100vh] md:hidden fixed z-50 ${toggleMobileNavbar ? "bg-[#1E1E1E]" : ""}`}>
        <div className="flex px-3 pt-5">
          <div className=" w-full h-10 text-white">
            <div
              className="w-[10rem] border flex justify-center text-[1.5rem] rounded-sm items-center gap-2 font-bold cursor-pointer"
              onClick={scrollToTop}
            >
              <p>PIYAWAT</p>
              <span>
                <FaCode />
              </span>
            </div>
          </div>
          <div onClick={() => setToggleMobileNavbar(!toggleMobileNavbar)} className="md:hidden flex items-center h-9 text-white">
            <FaBarsStaggered size={25} />
          </div>
        </div>
        <div>
          <motion.div
           animate={toggleMobileNavbar ? "open" : "closed"}
           variants={variants}
           className={`w-full h-full text-white md:hidden justify-center ${toggleMobileNavbar ? "flex" : "hidden"}`}>
            <ul className="w-full flex justify-between items-center flex-col gap-5 pt-5 pb-5">
            <Link
                onClick={() => setToggleMobileNavbar(!toggleMobileNavbar)}
                to="home"
                smooth={true}
                duration={500}
                className="flex items-center gap-1 cursor-pointer"
              >
                <GoHome />
                Home
              </Link>
              <Link
                onClick={() => setToggleMobileNavbar(!toggleMobileNavbar)}
                to="about"
                smooth={true}
                duration={500}
                className="flex items-center gap-1 cursor-pointer"
              >
                <GoPerson />
                About
              </Link>
              <Link
                onClick={() => setToggleMobileNavbar(!toggleMobileNavbar)}
                to="projects"
                smooth={true}
                duration={500}
                className="flex items-center gap-1 cursor-pointer"
              >
                <GoProject className="mt-[2px]" />
                Projects
              </Link>
              <Link
                onClick={() => setToggleMobileNavbar(!toggleMobileNavbar)}
                to="skills"
                smooth={true}
                duration={500}
                className="flex items-center gap-1 cursor-pointer"
              >
                <IoCodeSlashOutline />
                Skills
              </Link>
              <Link
                onClick={() => setToggleMobileNavbar(!toggleMobileNavbar)}
                to="contact"
                smooth={true}
                duration={500}
                className="flex items-center gap-1 cursor-pointer"
              >
                <MdOutlinePermContactCalendar className="mt-[2px]" />
                Contact
              </Link>
            </ul>
          </motion.div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
