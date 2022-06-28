import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user.json';

export const AppProfile = () => {
  return (<div>
    <Profile      
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
  </div>);
}

