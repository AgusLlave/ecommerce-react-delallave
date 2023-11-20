import { useState } from "react";

const ContactForm = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name, email, phone });
  };

  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <div className="text-center m-2 p-2">
        <label className="px-1">Nombre:</label>
        <input
          required
          type="text"
          name="nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="text-center m-2 p-2">
        <label className="px-1">Email:</label>
        <input
          aria-required
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="text-center m-2 p-2">
        <label className="px-1">Celular:</label>
        <input
          aria-required
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-primary">
        Crear orden
      </button>
    </form>
  );
};

export default ContactForm;
