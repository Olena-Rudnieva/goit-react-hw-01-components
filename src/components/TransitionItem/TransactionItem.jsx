import { Item } from '../TransitionItem/TransitionItem.styled';
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
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
