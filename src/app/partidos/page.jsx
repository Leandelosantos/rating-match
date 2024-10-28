"use client";

import Footer from "@/app/footer/page";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import estadio from "../../assets/estadio.jpg";
import Link from "next/link";
import arrowL from "../../assets/arrowL.svg";

const WrapperPartidos = styled.section`
  display: flex;
  flex-flow: column nowrap;
  color: #cbcbcb;
  gap: 30px;
  margin: 15% 3% 55%;

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

  .gridPartidos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
  }

  .partido {
    width: 100%;
  }

  .partido img {
    border-radius: 20px;
    width: 100%;
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

const partidos = () => {
  return (
    <>
      <WrapperPartidos>
        <div className="misPartidosTitle">
          <Link href="/inicio">
            <div className="title">
              <Image src={arrowL} alt="arrowR" width={30} />
              <h2>Mis Partidos Jugados</h2>
            </div>
          </Link>
        </div>
        <div className="gridPartidos">
          <div className="partido">
            <Link href="/partidos/partido">
              <Image src={estadio} alt="img" widht={100} height={100} />
              <p>5 - 2</p>
              <p>10/10/2024</p>
            </Link>
          </div>
          <div className="partido">
            <Image src={estadio} alt="img" widht={100} height={100} />
            <p>5 - 2</p>
            <p>10/10/2024</p>
          </div>
          <div className="partido">
            <Image src={estadio} alt="img" widht={100} height={100} />
            <p>5 - 2</p>
            <p>10/10/2024</p>
          </div>
          <div className="partido">
            <Image src={estadio} alt="img" widht={100} height={100} />
            <p>5 - 2</p>
            <p>10/10/2024</p>
          </div>
          <div className="partido">
            <Image src={estadio} alt="img" widht={100} height={100} />
            <p>5 - 2</p>
            <p>10/10/2024</p>
          </div>
          <div className="partido">
            <Image src={estadio} alt="img" widht={100} height={100} />
            <p>5 - 2</p>
            <p>10/10/2024</p>
          </div>
          <div className="partido">
            <Image src={estadio} alt="img" widht={100} height={100} />
            <p>5 - 2</p>
            <p>10/10/2024</p>
          </div>
          <div className="partido">
            <Image src={estadio} alt="img" widht={100} height={100} />
            <p>5 - 2</p>
            <p>10/10/2024</p>
          </div>
          <div className="partido">
            <Image src={estadio} alt="img" widht={100} height={100} />
            <p>5 - 2</p>
            <p>10/10/2024</p>
          </div>
        </div>
      </WrapperPartidos>
      <Footer />
    </>
  );
};

export default partidos;
