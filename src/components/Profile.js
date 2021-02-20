
const  Profile = ({avatar,tag,name,location,followers,views,likes}) =>(
  
  <div className="profile">
    <div className="description">
      <imghtps
        src={avatar}
        alt="Аватар пользователя"
        class="avatar"
      />
      <p className="tag">{tag}</p>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div>
);
 export default Profile