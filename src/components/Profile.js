
import user  from '../user.json'

function Profile(user) {
  return
  <div class="profile">
    <div className="description">
      <imghtps
        src={user.avatar}
        alt="Аватар пользователя"
        class="avatar"
      />
      <p className="tag">{user.tag}</p>
      <p className="name">{user.name}</p>
      <p className="location">{user.location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{user.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">user.{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{user.likes}</span>
      </li>
    </ul>
  </div>
}
 export default Profile