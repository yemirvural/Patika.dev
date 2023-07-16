import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setProductCount } from '../../features/basketSlice';
import PropTypes from 'prop-types';
 
 function Item({ item }) {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.basket.balance);
  const inputHandler = (e) => {
    if(e.target.innerHTML === "Buy"){
      const data = item.amount + 1;
      return dispatch(setProductCount({id:item.id, data}))
    }
    if(e.target.innerHTML === "Sell"){
      const data = item.amount > 0 ? (item.amount - 1) : item.amount;
      return dispatch(setProductCount({id:item.id, data}))
    }
    const inputValue = e.target.value;
    let numberValue = parseInt(inputValue);

    if(balance < (item.cost * numberValue)){
      let maxAmount = Math.floor((balance + (item.amount * item.cost)) / item.cost);
      if(numberValue < maxAmount) return dispatch(setProductCount({id:item.id, data: numberValue}))
      numberValue = maxAmount;
    }
    
    if (!isNaN(numberValue)) dispatch(setProductCount({id:item.id, data: numberValue}))
    if (inputValue === "") dispatch(setProductCount({id:item.id, data: 0}))
  }
   
   return (
     <div className={styles.cardWrapper}>
        <img src={`/${item.image}`} alt="item_image" />
        <div className={styles.itemName}>{item.name}</div>
        <div className={styles.itemCost}>${item.cost.toLocaleString('en')}</div>
        <div className={styles.itemControls}>
          <button disabled={!item.amount} onClick={(e) => inputHandler(e)} className={styles.sellButton}>Sell</button>
          <input
            type="text"
            value={item.amount}
            disabled={(item.cost > balance) && !item.amount}
            maxLength={12}
            onChange={(e) => inputHandler(e)}
          />
          <button disabled={item.cost > balance} onClick={(e) => inputHandler(e)} className={styles.buyButton}>Buy</button>
        </div>
     </div>
   )
 }
 
 Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

 export default Item