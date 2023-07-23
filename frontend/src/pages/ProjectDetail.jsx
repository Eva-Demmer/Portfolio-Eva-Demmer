import NavBar from "../components/navigation/NavBar";

function Project() {
  return (
    <div
      id="project"
      className="lg:p-x-20 flex h-screen w-full flex-col border border-solid border-red-500 px-5 pb-5 md:px-10 md:pb-10 lg:pb-20 "
    >
      <NavBar />
      <main
        id="main-project"
        className="mt-[65px] flex h-full w-full flex-col border border-solid border-yellow-500"
      >
        <h1>Projets</h1>
        <div
          id="content"
          className="flex h-full w-full flex-col justify-between border border-solid border-green-500"
        >
          <div
            id="media"
            className="flex h-full w-full flex-col items-center justify-between border border-solid border-blue-500"
          >
            <div
              id="big-media"
              className="w-full border border-solid border-green-500"
            >
              big media
            </div>
            <div
              id="small-media"
              className="flex w-full border border-solid border-purple-500"
            >
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
            <p>...</p>
          </div>
          <div
            id="summary"
            className="flex h-full w-full flex-col justify-between border border-solid border-orange-500"
          >
            <h2
              id="project-name"
              className="w-full border border-solid border-blue-500"
            >
              project name
            </h2>
            <div
              id="project-description"
              className="w-full border border-solid border-blue-500"
            >
              project description
            </div>
            <div
              id="project-technologies"
              className="flex w-full border border-solid border-blue-500"
            >
              project technologies
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Project;
