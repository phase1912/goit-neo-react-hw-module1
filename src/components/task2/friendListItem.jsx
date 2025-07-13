import styles from './friendListItem.module.css';
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={avatar} alt="Avatar" width="48"/>
            <p className={styles.name}>{name}</p>
            <p className={clsx("status", {
                "online": isOnline,
                "offline": !isOnline,
            })}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    )
}

export default FriendListItem;