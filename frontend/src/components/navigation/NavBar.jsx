import { useState, useEffect } from "react";
import { apiAllProjects } from "../../services/api.projects";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";
import NavToggleButton from "./NavToggle";
import NavLink from "./NavLink";

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
    <div id="nav" className="flex w-full flex-col relative">
      <header
        id="nav-header"
        className="fixed left-0 top-0 flex w-full items-center justify-between bg-primary p-5 md:p-6 lg:p-10 z-30"
      >
        <Logo />
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
          className="mt-[45px] pb-[65px] absolute h-screen flex w-full flex-col justify-between bg-primary gap-20 z-50 px-5 md:px-6 lg:px-10"
        >
          <div
            id="nav-links"
            className="flex h-3/5 w-full flex-col justify-between pt-5"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="flex flex-col justify-end p-2 uppercase tracking-desktopH3 text-primary-100"
              >
                <h2>{link.text}</h2>
              </a>
            ))}
          </div>
          <div
            id="project-and-contact-links"
            className="flex h-full w-full flex-col justify-between gap-8"
          >
            <div id="latest-projects" className="flex w-full flex-col">
              <h5 className="uppercase text-secondary-600">
                derniers projects
              </h5>
              {projects.slice(0, 3).map((project) => (
                <a
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="uppercase tracking-desktopH3 text-primary-100"
                >
                  <h5>{project.name}</h5>
                </a>
              ))}
            </div>
            <div id="contact" className="-mb-3 flex w-full flex-col">
              <h5 className="uppercase text-secondary-600">contact</h5>
              <button
                type="button"
                onClick={handleMailLink}
                className="uppercase tracking-desktopH3 text-primary-100 border-0 outline-none bg-transparent self-start"
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
