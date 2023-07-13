import { TransactionItem } from './TransactionItem';
import { Table, HeadItem } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <HeadItem>Type</HeadItem>
          <HeadItem>Amount</HeadItem>
          <HeadItem>Currency</HeadItem>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <TransactionItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
