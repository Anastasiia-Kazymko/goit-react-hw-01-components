import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export const FriendList = ({friends}) => {   
    return (
      <ul className={css.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
  <li className={css.item} key={id}>
  <span className={css.status} style={{ backgroundColor: isOnline ? "green" : "red" }}>{isOnline}</span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
  <p className={css.name}>{name}</p>
</li>))}
</ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
  avatar: PropTypes.string,
  name: PropTypes.string,
    isOnline: PropTypes.bool 
   }))
}