import { useSelector } from 'react-redux'
import styles from './styles.module.css'
import ReceiptItem from './ReceiptItem'

function Receipt() {
  const items = useSelector((state) => state.basket.items);
  const total = useSelector((state) => state.basket.receivedTotal)

  return (
    total > 0 && <div className={styles.receiptWrapper}>
      <div className={styles.wrapper}>
        <h2>Your Receipt</h2>
        {
          items.filter(el => el.amount > 0).map((data, id) => {
            return (<ReceiptItem key={id} data={data}/>)
          })
        }
        <div className={styles.receiptTotal}>
          <span>TOTAL</span><span className={styles.cost}>${total.toLocaleString('en')}</span>
        </div>
      </div>  
    </div>
  )
}

export default Receipt