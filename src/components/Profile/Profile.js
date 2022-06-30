import PropTypes from 'prop-types';
import css from './Profile.module.css'

export const Profile = (p) => {
  const { username, tag, location, avatar, stats } = p;
    return (
      <div className={css.profile}>
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
        <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.statsItem}>
      <span className="label">Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li className={css.statsItem}>
      <span className="label">Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li className={css.statsItem}>
      <span className="label">Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  }),
}