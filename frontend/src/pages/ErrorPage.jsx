import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/buttons/PrimaryButton";

// TODO: make pretty

function ErrorPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div
      id="error-page"
      className="h-screen flex flex-col justify-center text-center gap-10 p-5 bg-gradient-to-b from-[#151515] to-emerald-950 lg:via-emerald-950 lg:to-emerald-900"
    >
      <h1>Oups!</h1>
      <p className="mb-10 -mt-10">
        Vous avez atteint le trou noir du développement web - la Galaxie Erreur
        404 !
      </p>
      <PrimaryButton onClick={handleClick}>Retour à la maison</PrimaryButton>
    </div>
  );
}
export default ErrorPage;
