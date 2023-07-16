import { useSelector } from 'react-redux'
import styles from './styles.module.css'


function Balance() {
  const balance = useSelector((state) => state.basket.balance);

  return (
    <div className={styles.balance}>
        ${balance.toLocaleString('en')}
    </div>
  )
}

export default Balance