import React from 'react';
import './Register.scss';
import Input from '../../../components/input/input';
import Button from '../../../components/button/Button';

const Register = () => {
  return (
    <div className="auth-inner">
      {/* <div className="alerts alert-error" role="alert">
        Error message
      </div> */}
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
            id="email"
            name="email"
            type="text"
            value="inp"
            labelText="email"
            placeHolder="Enter email"
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
        </div>
        <Button label={'SIGNUP'} className="auth-button button" disabled={true} />
      </form>
    </div>
  );
};

export default Register;
