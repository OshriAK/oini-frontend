import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  detailsUser,
  updateUserProfile,
} from '../../redux/actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../../redux/constants/userConstants';

//Components
import LoadingBox from '../../components/loadingBox/LoadingBox';
import MessageBox from '../../components/messageBox/MessageBox';

import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    }
  }, [userInfo, history]);

  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and Confirm Password Are Not Match');
    } else {
      dispatch(updateUserProfile({ userId: user._id, name, email, password }));
    }
  };

  return (
    <div className="profile-container">
      <form className="profile-form" onSubmit={submitHandler}>
        <div className="profile-title">
          <h1>פרופיל משתמש</h1>
        </div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {loadingUpdate && <LoadingBox />}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant="success">הפרופיל עודכן בהצלחה</MessageBox>
            )}
            <label htmlFor="name">שם:</label>
            <input
              id="name"
              type="text"
              placeholder="הכנס שם"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">דואר אלקטרוני:</label>
            <input
              id="email"
              type="email"
              placeholder="הכנס דואר אלטרוני"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password"> סיסמה חדשה:</label>
            <input
              id="password"
              type="password"
              placeholder="הכנס סיסמה"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">אישור סיסמה:</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="הכנס אישור סיסמה"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="profile-update-button" type="submit">
              עדכן
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Profile;
