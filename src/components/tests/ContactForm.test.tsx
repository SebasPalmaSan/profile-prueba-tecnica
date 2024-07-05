// import React from "react";
// import { render, fireEvent, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import ContactForm from "../../components/ContactForm";

// describe("ContactForm component", () => {
//   test("renders form inputs correctly", () => {
//     const { getByLabelText } = render(<ContactForm />);

//     const nameInput = getByLabelText("Nombre");
//     expect(nameInput).toBeInTheDocument();

//     const emailInput = getByLabelText("Email");
//     expect(emailInput).toBeInTheDocument();

//     const messageTextarea = getByLabelText("Mensaje");
//     expect(messageTextarea).toBeInTheDocument();
//   });

//   test("validates form submission with empty fields", async () => {
//     const { getByText } = render(<ContactForm />);

//     const submitButton = getByText("Enviar");
//     fireEvent.click(submitButton);

//     await waitFor(() => {
//       const nameError = getByText("Este campo es obligatorio");
//       expect(nameError).toBeInTheDocument();

//       const emailError = getByText("Este campo es obligatorio");
//       expect(emailError).toBeInTheDocument();

//       const messageError = getByText("Este campo es obligatorio");
//       expect(messageError).toBeInTheDocument();
//     });
//   });

//   test("submits form with valid data", async () => {
//     const { getByLabelText, getByText, queryByText } = render(<ContactForm />);

//     const nameInput = getByLabelText("Nombre");
//     fireEvent.change(nameInput, { target: { value: "John Doe" } });

//     const emailInput = getByLabelText("Email");
//     fireEvent.change(emailInput, { target: { value: "john@example.com" } });

//     const messageTextarea = getByLabelText("Mensaje");
//     fireEvent.change(messageTextarea, {
//       target: { value: "Hola, este es un mensaje de prueba." },
//     });

//     const submitButton = getByText("Enviar");
//     fireEvent.click(submitButton);

//     // Se verifica que los mensajes de error no estén presentes después del envío válido
//     await waitFor(() => {
//       const nameError = queryByText("Este campo es obligatorio");
//       expect(nameError).toBeNull();

//       const emailError = queryByText("Este campo es obligatorio");
//       expect(emailError).toBeNull();

//       const messageError = queryByText("Este campo es obligatorio");
//       expect(messageError).toBeNull();
//     });
//   });
// });
