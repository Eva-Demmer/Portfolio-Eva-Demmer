import { useState, useEffect } from "react";
import MediaQuery from "react-responsive";
import { apiAllProjects } from "../../services/api.projects";
import Logo from "./Logo";
import NavWeather from "./NavWeather";
import NavToggleButton from "./NavToggle";
import ProgressBar from "./ProgressBar";
import NavLink from "./NavLink";

// TODO: make use of media queries utils (not MediaQuery)

function NavBar() {
  const navLinks = [
    { id: 1, href: "/home", text: "A propos" },
    { id: 2, href: "/projects", text: "Projects" },
    { id: 3, href: "/contact", text: "Contact" },
  ];

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    apiAllProjects()
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error getting projects", error);
      });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      toggleNavbar();
    }
  };

  const handleMailLink = () => {
    window.open("mailto:info@evademmer.com");
  };

  return (
    <div id="nav" className="relative flex w-full flex-col">
      <header
        id="nav-header"
        className={`fixed left-0 top-0 flex w-full items-center justify-between bg-primary p-5 md:px-10 md:py-10 lg:px-20 ${
          isOpen ? "z-50" : "z-20"
        } `}
      >
        <Logo />
        <NavWeather />
        <NavToggleButton
          onClick={toggleNavbar}
          isOpen={isOpen}
          onKeyDown={handleKeyPress}
        />
        <ProgressBar />
      </header>
      {isOpen && (
        <main
          id="main-nav"
          className="absolute z-40 flex h-screen w-full flex-col justify-between gap-20 bg-primary px-5 pb-5 pt-[65px] md:px-10 md:pb-10 lg:flex-row-reverse lg:px-20 lg:pb-20"
        >
          <div
            id="nav-links"
            className="flex h-3/5 w-full flex-col justify-between pt-5 lg:h-full lg:justify-center lg:pr-32 lg:pt-20"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="flex flex-col justify-end p-2 uppercase tracking-desktopH3 text-primary-100"
              >
                <MediaQuery maxWidth={1023}>
                  <h2>{link.text}</h2>
                </MediaQuery>
                <MediaQuery minWidth={1024}>
                  <h1>{link.text}</h1>
                </MediaQuery>
              </a>
            ))}
          </div>
          <div
            id="project-and-contact-links"
            className="flex h-full w-full flex-col justify-between gap-7 lg:pt-20"
          >
            <div id="latest-projects" className="flex w-full flex-col">
              <h5 className="uppercase text-secondary-600 lg:text-base">
                derniers projects
              </h5>
              {projects.slice(0, 3).map((project) => (
                <a
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="uppercase tracking-desktopH3 text-primary-100"
                >
                  <h5 className="lg:text-[36px] lg:leading-10 lg:tracking-wider">
                    {project.name}
                  </h5>
                </a>
              ))}
            </div>
            <div id="contact" className="-mb-3 flex w-full flex-col">
              <h5 className="uppercase text-secondary-600 lg:text-base">
                contact
              </h5>
              <button
                type="button"
                onClick={handleMailLink}
                className="self-start border-0 bg-transparent uppercase tracking-desktopH3 text-primary-100 outline-none"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                <h5>Enovyer un mail</h5>
              </button>
              <NavLink text="GitHub" link="https://github.com/Eva-Demmer" />
              <NavLink
                text="LinkedIn"
                link="https://www.linkedin.com/in/eva-demmer/"
              />
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default NavBar;
