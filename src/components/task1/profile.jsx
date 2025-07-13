import styles from './profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.profileHeader}>
                <img
                    src={image}
                    alt="User avatar"
                    className={styles.profileAvatar}
                />
                <p className={styles.profileUsername}>{name}</p>
                <p className={styles.profileTag}>{tag}</p>
                <p className={styles.profileLocation}>{location}</p>
            </div>

            <ul className={styles.profileStats}>
                {
                    Object.keys(stats).map((key) => {
                        return <li className={styles.statsItem}>
                            <span className={styles.statsLabel}>{key}</span>
                            <span className={styles.statsValue}>{stats[key]}</span>
                        </li>;
                    })
                }
            </ul>
        </div>
    )
};

export default Profile;