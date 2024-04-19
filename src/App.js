import React, { useState, useRef, useEffect } from "react";
import Typed from "typed.js";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    // Change the theme state to the opposite value
    setTheme(theme === "light" ? "dark" : "light");
  };

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    requestAnimationFrame(() => {
      setOffsetY(window.scrollY);
    });
  };
  

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const typed = new Typed(".typedText", {
      strings: ["Full Stack Developer", "Mobile App Developer"],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true
    });

    return () => typed.destroy(); // Cleanup on component unmount

  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen min-w-screen" data-theme={theme}>
      {/* Navbar */}
<div className="navbar justify-between bg-base-100 border-b border-base-200 shadow-2xl">
  <div>
    <a className="btn btn-ghost text-3xl gap-0 lg:h-16">&lt;/<a className=" text-teal-700">bm</a>&gt;</a>
  </div>
  <div className="hidden lg:flex">
    <a className="btn btn-ghost" onClick={() => scrollToSection(homeRef)}>Home</a>
    <a className="btn btn-ghost" onClick={() => scrollToSection(aboutRef)}>About Me</a>
    <a className="btn btn-ghost" onClick={() => scrollToSection(projectRef)}>Projects</a>
    <a className="btn btn-ghost" onClick={() => scrollToSection(contactRef)}>Contact</a>
  </div>
  <div className="flex items-center">
  <div className="mr-2">
  <label className="flex cursor-pointer gap-2" onClick={toggleTheme}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
    <input
      type="checkbox"
      className="toggle theme-controller"
      checked={theme === "dark"}
      onChange={toggleTheme}
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </label>
</div>

<div className="dropdown relative lg:hidden">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle"
        onClick={toggleDropdown}  // Adding click event to toggle the menu
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className={`menu dropdown-content absolute right-0 z-50 shadow bg-base-100 rounded-box w-40 ${isOpen ? 'block' : 'hidden'}`}  // Conditional class
      >
        <li><a onClick={() => scrollToSection(homeRef)}>Home</a></li>
        <li><a onClick={() => scrollToSection(aboutRef)}>About Me</a></li>
        <li><a onClick={() => scrollToSection(projectRef)}>Projects</a></li>
        <li><a onClick={() => scrollToSection(contactRef)}>Contact</a></li>
      </ul>
    </div>
  </div>
</div>


      {/* Home */}
      <div className="hero h-screen bg-base-200" id="home" ref={homeRef}>
        {/* Socials */}
        <div style={{ transform: `translateY(${offsetY}px)` }} className="hidden lg:flex lg:flex-col lg:place-self-end lg:justify-self-start lg:ml-5 lg:h-auto lg:space-y-5">
            <a href="https://github.com/BrianMorga"><img src="github.svg" alt="github" className="h-10 w-10" /></a>
            <a href="https://linkedin.com/in/brianmorga"><img src="linkedin.svg" alt="linkedin" className="h-10 w-10" /></a>
            <a onClick={() => scrollToSection(contactRef)}><img src="email.svg" alt="twitter" className="h-10 w-10" /></a>
            <div className="h-32 border-l ml-5 border-gray-400"></div>
          </div>
        {/* Hero Content */}
  <div className="hero-content p-0 flex-col lg:flex-row-reverse lg:flex ">
    <img src="IMG_0941.png" className="max-w-sm mask mask-hexagon rounded-lg shadow-2xl" />
    <div className="flex flex-col w-11/12 justify-center items-center rounded-l-lg lg:items-start">
    <div className="mb-5 w-screen text-4xl font-bold text-center lg:w-auto ">
              <div className="text-orange-500 animate-slow-pulse text-3xl font-bold lg:text-left">Brian Morga</div>
              <div className="text-4xl font-bold text-center lg:text-left">Hello, I'm a{" "}</div>
              <p className="md:hidden"></p>
              <span className="text-teal-700 text-4xl font-bold typedText text-center lg:text-left"></span>
            </div>

      <p className="text-center text-lg lg:text-left lg:w-96"> I love to build web applications and solve probelms.</p>
      <button className="btn bg-teal-700 mt-5 text-white" onClick={() => scrollToSection(contactRef)}>Let's Talk</button>
    </div>
  </div>
</div>

      {/* About Me */}
      <div className="hero min-h-screen bg-base-200" id="about" ref={aboutRef}>
  <div className="hero-content flex-row">
    
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">About Me</h1>
      <img src="cartoonme.png" className="w-56 rounded-lg shadow-2xl lg:w-96 lg:mt-5" />
      <p className="py-6 lg:w-96">As an impending Computer Science graduate with a concentration in Software Development (May 2024), I am excited to embark on my journey into the tech industry. My passion for technology, 
            fueled by a lifelong interest in video games and computers, has driven me to pivot from a career as a mechanic—a role that honed my problem-solving skills and attention to detail—to the dynamic 
            and creative field of software development.</p>
            <div  className="flex flex-row space-x-6 lg:hidden">
            <a href="https://github.com/BrianMorga"><img src="github.svg" alt="github" className="h-10 w-10" /></a>
            <a href="https://linkedin.com/in/brianmorga"><img src="linkedin.svg" alt="linkedin" className="h-10 w-10" /></a>
            <a onClick={() => scrollToSection(contactRef)}><img src="email.svg" alt="twitter" className="h-10 w-10" /></a>
          </div>
    </div>
  </div>
</div>

      {/* Projects */}
      <div className=" bg-base-200 min-h-screen content-center" ref={projectRef} id="project">
        <h1 className="text-4xl font-bold text-center mb-5" >
          Projects
        </h1>
        <div className="flex flex-col items-center lg:flex-row lg:justify-evenly">
          <div className="card card-compact mb-5 w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="bg1.jpeg" alt="date" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">DateWise</h2>
              <p>
                A web application designed to assist users with finding out a
                time to meet with peers
              </p>
              <div className="card-actions justify-end">
                <a href="https://github.com/ScheduleSyn-Scholars/DateWise"><button className="btn bg-teal-700 text-white">Source Code</button></a>
              </div>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="bg2.jpeg" alt="farm" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">FarmFlap</h2>
              <p>A mobile app sidescroller game created with react native</p>
              <div className="card-actions justify-end">
                <a href="https://github.com/BrianMorga/FarmFlap"><button className="btn bg-teal-700 text-white">Source Code</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="contact py-10 min-h-screen bg-base-200 content-center" id="contact" ref={contactRef}>
  <div className="w-10/12 bg-base-100 shadow-2xl rounded-xl mx-auto">
    <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>
    <form className="w-full max-w-lg mx-auto">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3  ">
          <label className="block uppercase tracking-wide ml-5 text-gray-700 text-xs font-bold mb-2" htmlFor="contact-name">
            Name
          </label>
          <input className="appearance-none block ml-5 w-5/6 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact-name" type="text" placeholder="First and Last"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide ml-5 text-gray-700 text-xs font-bold mb-2" htmlFor="contact-email">
            Email
          </label>
          <input className="appearance-none block ml-5 w-5/6 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact-email" type="email" placeholder="email@example.com"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide ml-5 text-gray-700 text-xs font-bold mb-2" htmlFor="contact-message">
            Message
          </label>
          <textarea className="appearance-none block ml-5 w-5/6 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact-message" placeholder="Hi there!" rows="3"></textarea>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3 text-center">
          <button className="btn bg-teal-700 mb-5 text-white" type="submit">
            Send Message
          </button>
        </div>
      </div>
    </form>
  </div>
</div>


    </div>
  );
}

export default App;
