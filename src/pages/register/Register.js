import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { register } from '../../redux/actions/userActions';

import LoadingBox from '../../components/loadingBox/LoadingBox';
import MessageBox from '../../components/messageBox/MessageBox';

import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error } = userRegister;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const redirect = history.location.search
    ? history.location.search.split('=')[1]
    : '/';

  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwoed and confirm password are not match');
    } else {
      await dispatch(register(name, email, password));
      history.push(redirect);
    }
  };

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  return (
    <div className="register-container">
      <div className="register-title">יצירת משתמש חדש</div>
      {loading && <LoadingBox />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <form className="register-form" onSubmit={submitHandler}>
        <label htmlFor="name">שם:</label>
        <input
          type="text"
          id="name"
          placeholder="הכנס שם"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">דוא"ל:</label>
        <input
          type="email"
          id="email"
          placeholder="הכנס דואר אלקטרוני"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">סיסמה:</label>
        <input
          type="password"
          id="password"
          placeholder="הכנס סיסמה"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmPassword">אישור סיסמה:</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="הכנס אישור סיסמה"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="register-form-button" type="submit">
          סיום הרשמה
        </button>
      </form>
      <div className="register-stillNot">
        יש לך כבר חשבון?{' '}
        <Link to={`/signin?redirect=${redirect}`}>לחץ כאן</Link>
      </div>
    </div>
  );
};

export default Register;
