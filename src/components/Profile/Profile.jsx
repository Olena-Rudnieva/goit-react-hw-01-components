import user from '../../../src/user.json';
import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={user.avatar} alt={user.username} className={css.avatar} />
      <p className={css.name}>{user.username}</p>
      <p className={css.tag}>@{user.tag}</p>
      <p className={css.location}>{user.location}</p>
    </div>

    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{user.stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{user.stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

/* <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>; */
