import NavBar from "../components/navigation/NavBar";
import technologies from "../assets/icons/technologies.svg";

function Project() {
  return (
    <div
      id="projects"
      className="flex min-h-screen flex-col items-center px-5 pb-5 md:p-10 lg:p-20"
    >
      <NavBar />
      <h1 className="mt-[65px]">Projects</h1>
      <div className="flex w-full flex-col items-center gap-5">
        <div className="flex h-44 w-full items-center justify-center rounded-md bg-form">
          add Cruzzle here
        </div>
        <div className="flex gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-md bg-form">
            Video
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-md bg-form">
            Pic 1
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-md bg-form">
            Pic 2
          </div>
        </div>
      </div>
      <h2>Cruzzle</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero
        lectus. Etiam nibh lacus, viverra ut odio eu, fringilla semper arcu.
        Fusce sed tellus id felis.
      </p>
      <div className="flex w-full">
        <img src={technologies} alt="technologies" className="pr-5" />
        <p>React, Express, Tailwind</p>
      </div>
    </div>
  );
}

export default Project;
