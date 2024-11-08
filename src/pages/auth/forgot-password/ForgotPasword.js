import React from 'react';
import './ForgotPasword.scss';
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../../../components/input/input';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';
import backgroundImage from '../../../assets/images/background.jpg';

const ForgotPasword = () => {
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                <form className="auth-form">
                  <div className="form-input-container">
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      value="inp@m.com"
                      labelText="email"
                      placeHolder="Enter email"
                      handleChange={() => {}}
                    />
                  </div>
                  <Button label={'SIGNIN'} className="auth-button button" disabled={true} />

                  <Link to={'/'}>
                    <span className="forgot-password">
                      <FaArrowLeft className="arrow-left" /> Back to Login
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasword;
