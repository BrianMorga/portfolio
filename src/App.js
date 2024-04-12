import React, { useState, useRef, useEffect } from "react";
import Typed from "typed.js";

function App() {
  // State to manage the theme, default to 'light'
  const [theme, setTheme] = useState("dark");

  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    // Change the theme state to the opposite value
    setTheme(theme === "light" ? "dark" : "light");
  };

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle smooth scrolling
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


  return (
    <div className="flex h-full w-100vw flex-col" data-theme={theme}>
      <div className="navbar justify-between fixed bg-base z-50">
        <div className="ml-1">
          <p className="text-5xl font-semibold font-mono text-zinc-600">&lt;/</p>
          <p className="text-5xl font-semibold font-mono text-teal-600">BM</p>
          <p className="text-5xl font-semibold font-mono text-zinc-600">&gt;</p>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li><a onClick={() => scrollToSection(homeRef)}>Home</a></li>
            <li><a onClick={() => scrollToSection(aboutRef)}>About Me</a></li>
            <li><a onClick={() => scrollToSection(projectRef)}>Projects</a></li>
            <li><a onClick={() => scrollToSection(contactRef)}>Contact</a></li>
          </ul>
        </div>
        <li>
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
        </li>
      </div>
      <div className="hero min-h-screen" id="home" ref={homeRef}>
        <div className="hero-content">
          <div className="max-w-md">
            <span className="text-3xl font-bold text-orange-500">
              Brian Morga
            </span>
            <div className="mb-5 text-5xl font-bold">
              Hello, I'm a{" "}
              <span className="text-teal-700 typedText"></span>
            </div>
            <p className="mb-5 text-xl">
              {" "}
              I love to build web applications and solve problems.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
          <div className="avatar">
            <div className="w-96">
              <img
                src="IMG_0941.png"
                alt="avatar"
                className="mask mask-hexagon"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen" id="about" ref={aboutRef}>
        <div className="hero-content max-w-2xl flex-col lg:flex-row">
          <img
            src="cartoonme.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold" >About Me</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto min-h-screen content-center" id="project" ref={projectRef}>
        <h1 className="text-4xl font-bold text-center mt-10" >
          Projects
        </h1>
        <div className="flex flex-row justify-around">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
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
                <button className="btn btn-primary">Source Code</button>
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
                <button className="btn btn-primary">Source Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="contact py-10 min-h-screen content-center" id="contact" ref={contactRef}>
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>
    <form className="w-full max-w-lg mx-auto">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="contact-name">
            Name
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact-name" type="text" placeholder="Jane Doe"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="contact-email">
            Email
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact-email" type="email" placeholder="email@example.com"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="contact-message">
            Message
          </label>
          <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact-message" placeholder="Hi there!" rows="3"></textarea>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3 text-center">
          <button className="btn btn-primary" type="submit">
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
