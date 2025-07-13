import FriendListItem from "./friendListItem.jsx";
import styles from "./friendList.module.css"

const FriendsList = ({ friends }) => {
    return (
        <ul className={styles.UlContainer}>
            {friends.map(({ avatar, name, isOnline }) => (
                <li>
                    <FriendListItem avatar={avatar} name={name} isOnline={isOnline}/>
                </li>
            ))}
        </ul>
    )
}

export default FriendsList;