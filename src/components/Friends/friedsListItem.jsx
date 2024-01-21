import PropTypes from 'prop-types';
import Styles from './Friends.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={Styles.item}>
      <span className={Styles.status}>
        {isOnline === true ? (
          <div className={Styles.coloOnline}></div>
        ) : (
          <div className={Styles.coloOffline}></div>
        )}
      </span>
      <img
        className={Styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={Styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
