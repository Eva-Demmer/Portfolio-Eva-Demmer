import { useNavigate } from "react-router-dom";
import Button from "../components/buttons/PrimaryButton";
import Portrait from "../assets/images/portrait.png";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div
      id="home"
      className="flex h-screen w-full flex-col items-center justify-end gap-5 overflow-hidden p-5 md:p-10 lg:items-start lg:p-20"
    >
      <div
        id="portrait"
        className="absolute top-0 z-30 flex h-1/2 w-1/2 flex-col items-center justify-end bg-gradient-to-t from-[#242424] to-transparent md:w-5/12 lg:right-[10%] lg:h-[90%] lg:w-1/4"
      >
        <img src={Portrait} alt="portrait" className="w-full" />
      </div>
      <main
        id="main-home"
        className="flex h-1/2 w-full flex-col justify-between pt-10 text-center lg:h-full lg:w-[60%] lg:py-[10%]"
      >
        <header id="welcome" className="w-full pb-[18px] md:text-start">
          <h2>Enchantée !</h2>
          <h2>
            Moi, c'est{" "}
            <span className="border-x-0 border-b-8 border-t-0 border-solid border-primary-800 text-4xl font-bold normal-case leading-9 md:text-6xl md:leading-11 md:tracking-tabletH2 lg:text-7xl lg:tracking-desktopH2">
              Eva
            </span>
            .
          </h2>
        </header>
        <p id="description-self" className="w-full text-start lg:pt-[6%]">
          Basée à Bordeaux, en France, je suis une développeuse front-end junior
          passionnée par la création d'applications web faciles d'utilisation.
        </p>
        <div className="lg:flex lg:items-start lg:pt-[10%]">
          <Button onClick={handleClick}>Contactez-moi</Button>
        </div>
      </main>
    </div>
  );
}

export default Home;
