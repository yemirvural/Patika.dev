import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../features/noteSlice'


function Searchbar() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.note.filter);
  
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