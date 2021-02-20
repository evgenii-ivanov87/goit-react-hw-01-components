import Profile from './components/Profile';

const userProf = {
  "name": "Jacques Gluke",
  "tag": "jgluke",
  "location": "Ocho Rios, Jamaica",
  "avatar": "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
  "stats": {
    "followers": 5603,
    "views": 4827,
    "likes": 1308
  }
};

const ProfileList = ({ Profile }) => {
  
  <Profile
    avatar={avatar}
    tag={tag}
    name={name}
    location={location}
    followers={stats.followers}
    views={stats.views }
    likes={stats.likes } />
}

function App() {
  console.log(userProf)
  return (
    <ProfileList Profile={userProf.avatar,userProf.tag,userProf.name,userProf.location,userProf.followers,userProf.views,userProf.likes }/>
  );
}

export default App;
