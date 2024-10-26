"use client";

import Link from "next/link";
import styled from "styled-components";

export const WrapperLogin = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;

  h1 {
    margin: 20% 0;
    color: #cbcbcb;
    font-size: 34px;
    letter-spacing: 4px;
  }

  .formContainer {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: column nowrap;
    padding: 5%;
    border: 1px solid grey;
    border-radius: 10px;
    width: 80%;
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

  .forgot {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column nowrap;
    margin: 5% 0;
    width: 100%;
    color: #cbcbcb;
  }

  .forgot a {
    text-decoration: underline;
  }

  .register {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    margin: 10% 0;
    width: 100%;
    gap: 10px;
    font-weight: 600;
  }

  .register button {
    padding: 10px;
    border: 1px solid grey;
    border-radius: 20px;
    background: #0f2027; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #2c5364,
      #203a43,
      #0f2027
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #2c5364,
      #203a43,
      #0f2027
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    color: #cbcbcb;
    width: 40%;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 16px;
  }

  .register button:hover {
    box-shadow: 0px 0px 20px #cbcbcb, 0px 0px 20px #cbcbcb;
  }
`;

const Login = () => {
  return (
    <WrapperLogin>
      <h1>Rating match</h1>
      <div className="formContainer">
        <form action="">
          <div className="inputContainer">
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" id="email" />
          </div>
          <div className="inputContainer">
            <label htmlFor="pass">Contraseña</label>
            <input type="password" name="pass" id="pass" />
          </div>
          <div className="inputContainer">
            <Link href="/inicio">
              <button type="submit">Sign In</button>
            </Link>
          </div>
          <div className="forgot">
            <a href="#">Olvidaste la contraseña?</a>
          </div>
        </form>
      </div>
      <div className="register">
        <button>Google</button>
        <button>Registrate</button>
      </div>
    </WrapperLogin>
  );
};

export default Login;
