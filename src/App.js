import React, {useState} from 'react';

function App() {
  // State to manage the theme, default to 'light'
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    // Change the theme state to the opposite value
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex h-full w-full flex-col" data-theme={theme}>
      <div className="navbar justify-between">
        <div>
          <p className='text-3xl font-semibold text-teal-700'>&lt;/BM&gt;</p>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About Me</a></li>
            <li><a href='#project'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        <li>
              <label className="flex cursor-pointer gap-2" onClick={toggleTheme}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                <input type="checkbox" className="toggle theme-controller" checked={theme === 'dark'} onChange={toggleTheme}/>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              </label>
            </li>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="max-w-md">
            <span className="text-3xl font-bold text-orange-500">Brian Morga</span>
            <div className="mb-5 text-5xl font-bold">Hello, I'm a <span className="text-teal-700">Full Stack Developer</span></div>
            <p className="mb-5 text-xl"> I love to build web applications and solve problems.</p>
            <a href="#contact" className="btn btn-primary">Hire Me</a>
          </div>
          <div className='avatar'>
            <div className='w-96'>
            <img src='cartoonme.png' alt='hs' className="mask mask-hexagon"/>
            </div>
          </div>
        </div>
        <div className="hero-image">
        </div>
      </div>
    </div>
  );
}

export default App;