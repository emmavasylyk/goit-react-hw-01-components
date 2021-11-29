import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={s.itemValue}>{type}</td>
      <td className={s.itemValue}>{amount}</td>
      <td className={s.itemValue}>{currency}</td>
    </>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistoryItem;
