import styles from './styles.module.css'
import PropTypes from 'prop-types';

function formatCompactNumber(number) {
  if (number < 1000) {
    return number;
  } else if (number >= 1000 && number < 1_000_000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  } else if (number >= 1_000_000 && number < 1_000_000_000) {
    return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "m";
  } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
    return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "b";
  } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
    return (number / 1_000_000_000_000).toFixed(1).replace(/\.0$/, "") + "t";
  }
}

function ReceiptItem({ data }) {
  const cost = formatCompactNumber(data.cost * data.amount);
  return (
    <div className={styles.receiptItemWrapper}>
        <div className={styles.receiptItem}>
          <span>{data.name}</span><span>x{data.amount}</span> <span className={styles.cost}>${cost}</span>
        </div>
    </div>
  )
}

ReceiptItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    cost: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReceiptItem