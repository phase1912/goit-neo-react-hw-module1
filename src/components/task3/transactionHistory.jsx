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
            {transactions.map(({ type, amount, currency, id }) => (
                <tr key={id}>
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