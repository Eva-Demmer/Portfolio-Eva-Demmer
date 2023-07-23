import { Link } from "react-router-dom";
import IconButton from "../components/buttons/IconButton";
import CV from "../assets/documents/DEMMER_Eva-CV.pdf";
import ContactForm from "../components/ContactForm";
import Email from "../assets/logos/mail.svg";
import GitHub from "../assets/logos/github.svg";
import LinkedIn from "../assets/logos/linkedin.svg";

function Contact() {
  // TODO: add redirect for mail
  const iconButtons = [
    { id: "email", src: Email, alt: "email", navigateLink: "" },
    {
      id: "GitHub",
      src: GitHub,
      alt: "GitHub",
      navigateLink: "https://github.com/Eva-Demmer",
    },
    {
      id: "LinkedIn",
      src: LinkedIn,
      alt: "LinkedIn",
      navigateLink: "https://www.linkedin.com/in/eva-demmer/",
    },
  ];

  return (
    <div
      id="contact"
      className="flex h-screen w-full flex-col items-center px-5 pb-5 md:px-10 md:pb-10 lg:px-20 lg:pb-20"
    >
      <h1 className="mt-[65px]">Contact</h1>
      <main
        id="main-contact"
        className="flex h-full w-full flex-col justify-between"
      >
        <div id="buttons" className="flex w-full flex-col gap-5 pb-5">
          <div className="flex justify-center gap-2">
            {iconButtons.map((button) => (
              <IconButton
                key={button.id}
                src={button.src}
                alt={button.alt}
                navigateLink={button.navigateLink}
              />
            ))}
          </div>
          <Link
            to={CV}
            download="DEMMER_Eva-CV"
            target="_blank"
            rel="noreferrer"
            className="w-max cursor-pointer self-center border-x-0 border-b-4 border-t-0 border-solid border-primary-800 bg-transparent px-1 pb-2 text-primary-100 uppercase text-xl font-medium leading-5 tracking-mobileParagraph md:leading-8 md:tracking-tabletParagraph lg:tracking-desktopParagraph"
          >
            Télécharger mon CV
          </Link>
        </div>
        <ContactForm />
      </main>
      <footer className="mt-auto flex flex-col items-center">
        <p className="font-semibold">© Eva Demmer 2023</p>
        <p className="uppercase">Développeur freelance</p>
      </footer>
    </div>
  );
}

export default Contact;
