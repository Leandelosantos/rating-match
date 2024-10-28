"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import homeIcon from "../assets/homeIcon.svg";
import ballIcon from "../assets/ballIcon.svg";
import friendIcon from "../assets/friendIcon.svg";
import Link from "next/link";

const WrapperFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  flex-flow: row nowrap;
  font-size: 18px;
  gap: 10px;
  width: 100%;
  color: #cbcbcb;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  height: 110px;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  position: fixed;
  bottom: 0;

  .inicio {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 100%;
    text-align: center;
    letter-spacing: 1px;
    gap: 3px;
  }
  .crearPartido {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 100%;
    text-align: center;
    letter-spacing: 2px;
    gap: 3px;
    position: relative;
    bottom: 25px;
  }
  .agregarAmigo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 100%;
    text-align: center;
    letter-spacing: 1px;
    gap: 3px;
  }

  .inicio:active,
  .crearPartido:active,
  .agregarAmigo:active {
    text-shadow: 0px 0px 10px #cbcbcb, 0px 0px 10px #cbcbcb,
      0px 0px 10px #cbcbcb; /* Sombra */
  }
`;

const Footer = () => {
  return (
    <WrapperFooter>
      <div className="inicio">
        <Link href="/inicio">
          <Image src={homeIcon} alt="home" width={25} heigth={25} />
          <p>Inicio</p>
        </Link>
      </div>
      <div className="crearPartido">
        <Image src={ballIcon} alt="home" width={50} heigth={50} />
        <p>Crear Partido</p>
      </div>
      <div className="agregarAmigo">
        <Link href="/addAmigo">
          <Image src={friendIcon} alt="home" width={25} heigth={25} />
          <p>Agregar Amigo</p>
        </Link>
      </div>
    </WrapperFooter>
  );
};

export default Footer;
