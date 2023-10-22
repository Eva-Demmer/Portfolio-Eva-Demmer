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
      className="flex h-screen flex-col justify-center gap-10 bg-gradient-to-b from-[#151515] to-emerald-950 p-5 text-center lg:via-emerald-950 lg:to-emerald-900"
    >
      <h1>Oups!</h1>
      <p className="-mt-10 mb-10">
        Vous avez atteint le trou noir du développement web - la Galaxie Erreur
        404 !
      </p>
      <PrimaryButton onClick={handleClick}>Retour à la maison</PrimaryButton>
    </div>
  );
}
export default ErrorPage;
