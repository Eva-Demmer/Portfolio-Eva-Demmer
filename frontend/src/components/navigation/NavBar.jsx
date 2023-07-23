import { useState } from "react";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";
import NavToggleButton from "./NavToggle";

// TODO: fix toggle bug on home page

function NavBarMarkUp() {
  const navLinks = [
    { href: "/home", text: "A propos" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" },
  ];

  // TODO: add project links
  const projectLinks = [
    { href: "/projects", text: "Cruzzle" },
    { href: "/projects", text: "Emmaüs Connect" },
    { href: "/projects", text: "Burdiga Live" },
  ];

  // TODO: change contact link to open mail
  const contactLinks = [
    { href: "/contact", text: "envoyer un mail" },
    { href: "https://github.com/Eva-Demmer", text: "GitHub" },
    { href: "https://www.linkedin.com/in/eva-demmer/", text: "LinkedIn" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      toggleNavbar();
    }
  };

  return (
    <div id="nav" className="flex w-full flex-col">
      <header
        id="nav-header"
        className="fixed left-0 top-0 flex w-full items-center justify-between bg-primary p-5 z-50"
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
          className="mt-[45px] flex h-full w-full flex-col justify-between gap-20"
        >
          <div
            id="nav-links"
            className="flex h-3/5 w-full flex-col justify-between pt-5"
          >
            {navLinks.map((link) => (
              <a
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
              {projectLinks.map((link) => (
                <a
                  href={link.href}
                  className="uppercase tracking-desktopH3 text-primary-100"
                >
                  <h5>{link.text}</h5>
                </a>
              ))}
            </div>
            <div id="contact" className="-mb-3 flex w-full flex-col">
              <h5 className="uppercase text-secondary-600">contact</h5>
              {contactLinks.map((link) => (
                <a
                  href={link.href}
                  className="uppercase tracking-desktopH3 text-primary-100"
                >
                  <h5>{link.text}</h5>
                </a>
              ))}
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default NavBarMarkUp;
