import styles from './styles.module.css'
import Item from '../Item/Item'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getProducts } from '../../features/basketSlice';

function Products() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);
  const balance = useSelector((state) => state.basket.balance);
  const isLoading = useSelector((state) => state.basket.isLoading);
  const error = useSelector((state) => state.basket.error);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  
  console.log(balance)
  return (
    <div className={styles.productsWrapper}>
      {error && (error)}
      {isLoading && 'Loading...'}
      {
       !isLoading && items.map((item, id) => {
          return(<Item key={id} item={item}/>)
        })
      }
    </div>
  )
}

export default Products