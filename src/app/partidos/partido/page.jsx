"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import estadio from "../../../assets/estadio.jpg";
import icon from "../../../assets/homeIcon.svg";
import arrowL from "../../../assets/arrowL.svg";
import Footer from "@/app/footer/page";
import Link from "next/link";

const WrapperPartido = styled.section`
  display: flex;
  flex-flow: column nowrap;
  color: #cbcbcb;
  gap: 30px;
  margin: 15% 3%;

  .misPartidosTitle {
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-size: 28px;
    font-weight: 600;
  }

  .misPartidosTitle a {
    width: 100%;
  }

  .negro {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row nowrap;
    font-size: 24px;
    font-weight: 600;
  }

  .blanco {
  }

  .playerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
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

const partido = () => {
  return (
    <>
      <WrapperPartido>
        <div className="misPartidosTitle">
          <Link href="/partidos">
            <div className="title">
              <Image src={arrowL} alt="arrowR" width={30} />
              <h2>Partido del 10/10/2024</h2>
            </div>
          </Link>
          <Image src={estadio} alt="estadio" width={640} height={247} />
          <p>5 - 2</p>
        </div>
        <div className="team">
          <h2>Equipo Negro</h2>
        </div>
        <div className="negro">
          <div className="playerContainer">
            <Image src={icon} alt="estadio" width={20} height={20} />
            <p>Jugador</p>
          </div>
          <p>5</p>
        </div>
      </WrapperPartido>
      <Footer />
    </>
  );
};

export default partido;
