import user from '../../src/user.json';
import data from '../../src/data.json';
import { Profile } from './Profile/Profile';
import { StatisticList } from './Statistics/StatisticList';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <StatisticList title="Upload stats" stats={data} />
    </div>
  );
};
