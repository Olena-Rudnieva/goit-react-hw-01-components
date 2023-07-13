import { Item } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <Item>{type}</Item>
      <Item>{amount}</Item>
      <Item>{currency}</Item>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
