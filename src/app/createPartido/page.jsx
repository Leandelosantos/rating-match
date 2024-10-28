"use client";

import Footer from "@/app/footer/page";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  min-height: 100dvh;
  grid-template-rows: 1fr auto;
`;

const WrapperCreatePartido = styled.section`
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
    align-items: center;
    flex-flow: column nowrap;
    margin: 5% 0;
    width: 100%;
    gap: 5px;
    font-weight: 600;
    font-size: 22px;
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
    color: #cbcbcb;
    font-weight: 600;
    font-size: 18px;
  }

  .resultsContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .resultsContainer input {
    width: 30%;
  }

  .vs {
    width: auto;
    font-size: 24px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8%;
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
`;

const createPartido = () => {
  return (
    <Wrapper>
      <WrapperCreatePartido>
        <div className="titleContainer">
          <h2>Crear Partido</h2>
        </div>
        <div className="formContainer">
          <form action="">
            <div className="inputContainer">
              <label htmlFor="fecha">Fecha</label>
              <input type="date" name="fecha" id="fecha" />
            </div>
            <div className="titleContainer">
              <h2>Resultado</h2>
            </div>
            <div className="resultsContainer">
              <div className="inputContainer">
                <label htmlFor="resultado1">Equipo Negro</label>
                <input
                  type="number"
                  name="resultado1"
                  id="resultado1"
                  min="1"
                  max="50"
                  inputMode="numeric"
                  onInput={(e) => {
                    if (e.target.value.length > 2) {
                      e.target.value = e.target.value.slice(0, 2); // Limita a 5 caracteres
                    }
                  }}
                />
              </div>
              <div className="vs">vs</div>
              <div className="inputContainer">
                <label htmlFor="resultado2">Equipo Blanco</label>
                <input
                  type="number"
                  name="resultado2"
                  id="resultado2"
                  min="1"
                  max="50"
                  inputMode="numeric"
                  onInput={(e) => {
                    if (e.target.value.length > 2) {
                      e.target.value = e.target.value.slice(0, 2); // Limita a 5 caracteres
                    }
                  }}
                />
              </div>
            </div>
            <div className="inputContainer">
              <button>Crear Partido</button>
            </div>
          </form>
        </div>
      </WrapperCreatePartido>
      <Footer />
    </Wrapper>
  );
};

export default createPartido;
