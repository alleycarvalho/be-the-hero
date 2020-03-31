import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form>
          <h1>Faça seu login</h1>

          <input placeholder="Sua ID"/>
          <button type="submit" className="button">
            Entrar
          </button>
        </form>

        <a href="/register">
          <FiLogIn size={16} color="E02041" />
          Não tenho cadastro
        </a>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}