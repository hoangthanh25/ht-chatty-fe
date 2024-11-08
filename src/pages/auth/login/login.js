import React from 'react';
import './login.scss';
import { FaArrowRight } from 'react-icons/fa';
import Input from '../../../components/input/input';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth-inner">
      <div className="alerts alert-error" role="alert">
        Error message
      </div>
      <form className="auth-form">
        <div className="form-input-container">
          <Input
            id="username"
            name="username"
            type="text"
            value="inp"
            labelText="username"
            placeHolder="Enter Username"
            handleChange={() => {}}
          />
          <Input
            id="password"
            name="password"
            type="text"
            value="a sd "
            labelText="password"
            placeHolder="Enter Password"
            handleChange={() => {}}
          />
          <label className="checkmark-container" htmlFor="checkbox">
            <Input id="checkbox" type="checkbox" name="checkbox" value={false} handleChange={() => {}} />
            Keep me signed in
          </label>
        </div>
        <Button label={'SIGNIN'} className="auth-button button" disabled={true} />

        <Link to={'/forgot-password'}>
          <span className="forgot-password">
            Forgot password? <FaArrowRight className="arrow-right" />
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
