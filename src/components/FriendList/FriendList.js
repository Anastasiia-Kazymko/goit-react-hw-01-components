import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {   
    return (
      <ul className="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
  <li className="item" key={id}>
  <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt={name} width="48" />
  <p className="name">{name}</p>
</li>))}
</ul>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool 
}