// import { useForm } from "react-hook-form";
// // import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Input from "./Input";
// import PrimaryButton from "./buttons/PrimaryButton";

// function ContactForm() {
//   const navigate = useNavigate();
//   const { register, handleSubmit, errors } = useForm();

//   // TODO: handle form submission: show success message + send mail + redirect to home
//   const onSubmit = (data) => {
//     console.info(data);
//     navigate("/");
//   };

//   // --- //

//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [message, setMessage] = useState("");

//   // const [nameError, setNameError] = useState("");
//   // const [emailError, setEmailError] = useState("");
//   // const [messageError, setMessageError] = useState("");

//   // const handleNameChange = (newValue) => {
//   //   setName(newValue);
//   //   setNameError("");
//   // };

//   // const handleEmailChange = (newValue) => {
//   //   setEmail(newValue);
//   //   setEmailError("");
//   // };

//   // const handleMessageChange = (newValue) => {
//   //   setMessage(newValue);
//   //   setMessageError("");
//   // };

//   // const handleSubmit = () => {
//   //   let isValid = true;

//   //   if (!name) {
//   //     setNameError("Ajoutez votre nom");
//   //     isValid = false;
//   //   }

//   //   if (!email) {
//   //     setEmailError("Ajoutez votre addresse mail");
//   //     isValid = false;
//   //   } else if (!/\S+@\S+\.\S+/.test(email)) {
//   //     setEmailError("Format addresse mail incorrect");
//   //     isValid = false;
//   //   }

//   //   if (!message) {
//   //     setMessageError("Ajoutez un message");
//   //     isValid = false;
//   //   }

//   //   if (isValid) {
//   //     // TODO: handle form submission: show success message + send mail
//   //     navigate("/home");
//   //   }
//   // };

//   // TODO: adapt message input height

//   return (
//     <form
//       className="my-5 flex h-full w-full flex-col justify-between bg-form p-5"
//       onSubmit={handleSubmit(onSubmit)}
//     >
//       <div id="inputs" className="flex h-full flex-col gap-8 pt-2">
//         <Input
//           label="Nom"
//           type="text"
//           value={name}
//           name="name"
//           onChange={register}
//           error={errors.name && errors.name.message}
//         />
//         <Input
//           label="Adresse mail"
//           type="email"
//           value={email}
//           name="email"
//           onChange={register}
//           error={errors.email && errors.email.message}
//         />
//         <Input
//           label="Message"
//           type="textarea"
//           value={message}
//           name="message"
//           onChange={register}
//           error={errors.message && errors.message.message}
//         />
//       </div>
//       <div id="btn" className="mt-8 flex justify-end">
//         <PrimaryButton onClick={handleSubmit}>Envoyer</PrimaryButton>
//       </div>
//     </form>
//   );
// }

// export default ContactForm;

import { useForm } from "react-hook-form";
import Input from "./Input";

function ContactForm() {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.info(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        value=""
        onChange={() => {}}
        label="Name"
        error={errors.name && errors.name.message}
        inputRef={register({ required: "Name is required" })}
      />
      <Input
        type="email"
        value=""
        onChange={() => {}}
        label="Email Address"
        error={errors.email && errors.email.message}
        inputRef={register({
          required: "Email Address is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      <Input
        type="text"
        value=""
        onChange={() => {}}
        label="Message"
        error={errors.message && errors.message.message}
        inputRef={register({ required: "Message is required" })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
