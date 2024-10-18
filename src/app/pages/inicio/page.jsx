"use client";
import Image from "next/image";
import React from "react";
import estadio from "../../assets/estadio.jpg";
import styled from "styled-components";
import Footer from "@/components/Footer";
import Link from "next/link";
import arrowR from "../../assets/arrowR.svg";

const WrapperInicio = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  margin: 15% 3%;

  .bienvenidoJugador {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .bienvenidoJugador h2 {
    color: #cbcbcb;
  }

  .misPartidosTitle {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    flex-flow: column nowrap;
    gap: 10px;
  }

  .misPartidosTitle h2 {
    color: #cbcbcb;
    font-weight: 400;
  }

  .misPartidosTitle img {
    align-self: center;
    width: 100%;
    border-radius: 20px;
  }

  .misPartidosTitle p {
    color: #cbcbcb;
    font-size: 18px;
    font-weight: 300;
  }

  .misPartidosTitle a {
    width: 100%;
  }

  .listaAmigos {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    flex-flow: column nowrap;
    gap: 10px;
  }

  .listaAmigos h2 {
    color: #cbcbcb;
    font-weight: 400;
  }

  .listaAmigosContainer {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
    width: 100%;
    overflow-x: auto;
  }

  .listaAmigosContainer img {
    border-radius: 20px;
  }

  .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
  }

  .title img {
    width: auto;
  }
`;

const Inicio = () => {
  return (
    <>
      <WrapperInicio>
        <div className="bienvenidoJugador">
          <h2>Bienvenido ´Jugador´</h2>
        </div>
        <div className="misPartidosTitle">
          <Link href="/partidos">
            <div className="title">
              <h2>Mis Partidos</h2>
              <Image src={arrowR} alt="arrowR" width={30} />
            </div>
          </Link>
          <Image src={estadio} alt="ej" width={640} height={247} />
          <p>Negro 3 - 2 Blanco</p>
          <p>10/10/2024</p>
        </div>
        <div className="listaAmigos">
          <h2>Lista de Amigos</h2>
          <div className="listaAmigosContainer">
            <Image src={estadio} alt="ej" width={100} height={100} />
            <Image src={estadio} alt="ej" width={100} height={100} />
            <Image src={estadio} alt="ej" width={100} height={100} />
            <Image src={estadio} alt="ej" width={100} height={100} />
            <Image src={estadio} alt="ej" width={100} height={100} />
          </div>
        </div>
      </WrapperInicio>
      <Footer />
    </>
  );
};

export default Inicio;
