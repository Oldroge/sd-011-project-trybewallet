import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { requestLogin } from '../actions';

function Login() {
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
          data-testid="email-input"
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>

      <label htmlFor="password-label">
        Senha
        <input
          data-testid="password-input"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>

      <button
        type="submit"
        disabled={ !validCredentials() }
        onClick={ () => dispatch(requestLogin(email)) }
      >
        Entrar
      </button>
    </section>
  );
}

export default Login;
