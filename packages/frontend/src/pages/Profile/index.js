import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  let rows = [];

  for (let i = 1; i < 5; i++) {
    rows.push(i)
  }

  function renderRow(row) {
    return (
      <li>
        <strong>CASO:</strong>
        <p>Caso Teste {row}</p>

        <strong>DESCRIÇÃO:</strong>
        <p>Descrição teste do caso teste {row}.</p>

        <strong>VALOR:</strong>
        <p>R$ {row * 50},00</p>

        <button type="button">
          <FiTrash2 size={20} color="#A8A8B3" />
        </button>
      </li>
    );
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem-vinda, ONG!</span>

        <Link to="/incidents/new" className="button">
          Cadastrar novo caso
        </Link>

        <button type="button">
          <FiPower size={18} color="E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {rows.map(renderRow)}
      </ul>
    </div>
  );
}
