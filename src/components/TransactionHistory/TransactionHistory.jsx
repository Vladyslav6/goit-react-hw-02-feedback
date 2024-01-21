import Styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const transactMap = items.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));
  return (
    <table className={Styles.transactionHistory}>
      <thead>
        <tr className={Styles.colorB}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody align="center">{transactMap}</tbody>
    </table>
  );
};

export default TransactionHistory;
