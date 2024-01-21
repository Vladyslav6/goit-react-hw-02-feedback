// import styled from 'styled-components';
import Styles from './Profil.module.css';

// export const Divin = styled.div`
//   background-color: #518080;
// `;

const Profile = props => {
  return (
    <div className={Styles.profile}>
      <div className={Styles.description}>
        <img src={props.avatar} alt="User avatar" className={Styles.avatar} />
        <p className={Styles.name}>{props.username}</p>
        <p className={Styles.tag}>@{props.tag}</p>
        <p className={Styles.location}>{props.location}</p>
      </div>
      <ul className={Styles.stats}>
        <li>
          <span className={Styles.label}>Followers</span>
          <span className={Styles.quantity}>: {props.stats.followers}</span>
        </li>
        <li>
          <span className={Styles.label}>Views</span>
          <span className={Styles.quantity}>: {props.stats.views}</span>
        </li>
        <li>
          <span className={Styles.label}>Likes</span>
          <span className={Styles.quantity}>: {props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
