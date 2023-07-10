import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../features/filterSlice'


function Searchbar() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.value);

  return (
    <div className={styles.div}>
      <input
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className={styles.input}
        type="text"
        placeholder="Search.."
      />
    </div>
  )
}

export default Searchbar