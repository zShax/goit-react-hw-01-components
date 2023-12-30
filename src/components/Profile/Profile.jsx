import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  // const { followers, views, likes } = stats;
  const formattedFollowers = stats.followers.toLocaleString();
  const formattedViews = stats.views.toLocaleString();
  const formattedLikes = stats.likes.toLocaleString();

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatar}
          width="110"
        />
        <p className={styles.name}> {username} </p>
        <p className={styles.tag}> @{tag} </p>
        <p className={styles.location}> {location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}> Followers </span>
          <span className={styles.quantity}> {formattedFollowers} </span>
        </li>
        <li>
          <span className={styles.label}> Views </span>
          <span className={styles.quantity}> {formattedViews} </span>
        </li>
        <li>
          <span className={styles.label}> Likes </span>
          <span className={styles.quantity}> {formattedLikes} </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
