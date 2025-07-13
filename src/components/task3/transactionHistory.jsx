import styles from './transactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
            <tr>
                <th className={styles.th}>Type</th>
                <th className={styles.th}>Amount</th>
                <th className={styles.th}>Currency</th>
            </tr>
            </thead>

            <tbody>
            {transactions.map(({ type, amount, currency }, index) => (
                <tr
                    key={index}
                    className={`${index % 2 === 0 ? styles.evenRow : styles.oddRow} ${styles.hoverRow}`}
                >
                    <td className={styles.td}>{type}</td>
                    <td className={styles.td}>{amount}</td>
                    <td className={styles.td}>{currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default TransactionHistory