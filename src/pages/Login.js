import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../actions';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { login } = this.props;
    const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // Ref: https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation
    const passwordLength = 6;
    return (
      <form className="login-form">
        <input
          type="text"
          data-testid="email-input"
          name="email"
          placeholder="E-mail"
          onChange={ this.handleInput }
          value={ email }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          placeholder="Senha"
          onChange={ this.handleInput }
          value={ password }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !emailFormat.test(email) || password.length < passwordLength }
            onClick={ () => login(email, password) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(loginAction(email, password)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
