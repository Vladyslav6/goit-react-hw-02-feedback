import Styles from './Friends.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './friedsListItem';

const FriendList = ({ friendsLi }) => {
  return (
    <ul className={Styles.friendList}>
      {friendsLi.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friendsLi: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
