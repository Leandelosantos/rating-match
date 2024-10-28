"use client";

import Footer from "@/app/footer/page";
import React from "react";
import styled from "styled-components";

const WrapperAddAmigo = styled.section`
  display: flex;
  flex-flow: column nowrap;
  color: #cbcbcb;
  gap: 30px;
  margin: 15% 3% 15%;

  .titleContainer {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .titleContainer h2 {
    font-weight: 600;
  }

  .formContainer {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: column nowrap;
    padding: 5%;
    border: 1px solid grey;
    border-radius: 10px;
    width: 100%;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    width: 100%;
  }

  .inputContainer {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column nowrap;
    margin: 5% 0;
    width: 100%;
    gap: 5px;
    font-weight: 600;
  }

  form label {
    color: #cbcbcb;
  }

  form input {
    padding: 10px;
    border: 1px solid grey;
    border-radius: 10px;
    background-color: #474747;
    width: 100%;
  }

  .inputContainer button {
    padding: 10px;
    border: 1px solid grey;
    border-radius: 10px;
    background-color: #cbcbcb;
    color: #474747;
    width: 100%;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 18px;
  }

  textarea {
    border-radius: 10px;
    background-color: #474747;
    color: #cbcbcb;
    padding: 5px;
  }
`;

const addAmigo = () => {
  return (
    <>
      <WrapperAddAmigo>
        <div className="titleContainer">
          <h2>Agregar Amigo</h2>
        </div>
        <div className="formContainer">
          <form action="">
            <div className="inputContainer">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" id="nombre" />
            </div>
            <div className="inputContainer">
              <label htmlFor="apellido">Apellido</label>
              <input type="text" name="apellido" id="apellido" />
            </div>
            <div className="inputContainer">
              <label htmlFor="Email">Email</label>
              <input type="email" name="Email" id="email" />
            </div>
            <div className="inputContainer">
              <label htmlFor="msj">Mensaje</label>
              <textarea
                id="msj"
                name="msj"
                rows="5"
                cols="42"
                placeholder="Escribile un mensaje a tu amigo..."
              ></textarea>
            </div>
            <div className="inputContainer">
              <button>Enviar Invitacion</button>
            </div>
          </form>
        </div>
      </WrapperAddAmigo>
      <Footer />
    </>
  );
};
export default addAmigo;
