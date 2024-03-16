import { Container } from "react-bootstrap";

const ContactPage = () => {
  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <Container className="pt-5">
      <h1 className="mb-4">Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptionTextarea" className="form-label">Descripción</label>
          <textarea className="form-control" id="descriptionTextarea" rows="3" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </Container>
  );
};

export default ContactPage;
