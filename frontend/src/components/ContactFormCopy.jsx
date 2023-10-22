import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import PrimaryButton from "./buttons/PrimaryButton";

function ContactForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleNameChange = (newValue) => {
    setName(newValue);
    setNameError("");
  };

  const handleEmailChange = (newValue) => {
    setEmail(newValue);
    setEmailError("");
  };

  const handleMessageChange = (newValue) => {
    setMessage(newValue);
    setMessageError("");
  };

  const handleSubmit = () => {
    let isValid = true;

    if (!name) {
      setNameError("Ajoutez votre nom");
      isValid = false;
    }

    if (!email) {
      setEmailError("Ajoutez votre addresse mail");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Format addresse mail incorrect");
      isValid = false;
    }

    if (!message) {
      setMessageError("Ajoutez un message");
      isValid = false;
    }

    if (isValid) {
      // TODO: handle form submission: show success message + send mail
      navigate("/home");
    }
  };

  // TODO: adapt message input height

  return (
    <form className="my-5 flex h-full w-full flex-col justify-between bg-form p-5">
      <div id="inputs" className="flex h-full flex-col gap-8 pt-2">
        <Input
          label="Nom"
          type="text"
          value={name}
          onChange={handleNameChange}
          error={nameError}
        />
        <Input
          label="Adresse mail"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
        />
        <Input
          label="Message"
          type="textarea"
          value={message}
          onChange={handleMessageChange}
          error={messageError}
        />
      </div>
      <div id="btn" className="mt-8 flex justify-end">
        <PrimaryButton onClick={handleSubmit}>Envoyer</PrimaryButton>
      </div>
    </form>
  );
}

export default ContactForm;
