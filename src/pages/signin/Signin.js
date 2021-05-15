import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signin } from '../../redux/actions/userActions';

import LoadingBox from '../../components/loadingBox/LoadingBox';
import MessageBox from '../../components/messageBox/MessageBox';

import './Signin.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const redirect = history.location.search
    ? history.location.search.split('=')[1]
    : '/';

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  return (
    <div className="signin-container">
      <div className="signin-title">כניסה כמשתמש רשום</div>
      {loading && <LoadingBox />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <form className="sigin-form" onSubmit={submitHandler}>
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
        <button className="signin-form-button" type="submit">
          כניסה לחשבון
        </button>
      </form>
      <div className="signin-stillNot">
        עדיין לא רשום?{' '}
        <Link to={`/register?redirect=${redirect}`}>לחץ כאן</Link>
      </div>
    </div>
  );
};

export default Signin;
