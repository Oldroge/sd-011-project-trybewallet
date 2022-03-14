import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { requestLogin } from '../actions';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const validCredentials = () => {
    const patternEmail = /[a-z0-9._-]+@[a-z0-9]+\.[a-z]+$/;
    const passwordLength = 6;
    return patternEmail.test(email) && password.length >= passwordLength;
  };

  return (
    <section>
      <label htmlFor="email-label">
        E-mail
        <input
          type="email"
          data-testid="email-input"
          name="email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>

      <label htmlFor="password-label">
        Senha
        <input
          type="password"
          data-testid="password-input"
          name="password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <Link to="/carteira">
        <button
          type="submit"
          disabled={ !validCredentials() }
          onClick={ () => dispatch(requestLogin(email)) }
        >
          Entrar
        </button>
      </Link>
    </section>
  );
}
