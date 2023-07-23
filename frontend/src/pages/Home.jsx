import { useNavigate } from "react-router-dom";
import NavBar from "../components/navigation/NavBar";
import Button from "../components/buttons/PrimaryButton";
import Portrait from "../assets/images/portrait.png";

// TODO: fix nav toggle bug

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div
      id="home"
      className="flex h-screen w-full flex-col items-center justify-end gap-5 border border-solid border-red-500 p-5"
    >
      <NavBar />
      <div
        id="portrait"
        className="absolute top-0 flex h-1/2 w-1/2 flex-col items-center justify-end border border-solid border-green-500 bg-gradient-to-t from-[#242424] to-transparent"
      >
        <img src={Portrait} alt="portrait" className="w-full" />
      </div>
      <main
        id="main-home"
        className="flex h-1/2 w-full flex-col justify-between border border-solid border-yellow-500 pt-10 text-center"
      >
        <header id="welcome" className="w-full pb-[18px]">
          <h2>Enchantée !</h2>
          <h2>
            Moi, c'est{" "}
            <span className="border-x-0 border-b-8 border-t-0 border-solid border-primary-800 text-4xl font-bold normal-case leading-9 md:text-6xl md:leading-11 md:tracking-tabletH2 lg:text-7xl lg:tracking-desktopH2">
              Eva
            </span>
            .
          </h2>
        </header>
        <p id="description-self" className="w-full text-start">
          Basée à Bordeaux, en France, je suis une développeuse front-end junior
          passionnée par la création d'applications web faciles d'utilisation.
        </p>
        <Button onClick={handleClick}>Contactez-moi</Button>
      </main>
    </div>
  );
}

export default Home;
